"use client";

import React, { useState } from "react";
import { Clipboard, Download, Loader2, X, AlertCircle } from "lucide-react";
import { isValidInstagramUrl } from "@/lib/utils";
import type { MediaItem } from "@/lib/instagram";

interface DownloaderFormProps {
  onSuccess: (items: MediaItem[]) => void;
  onError: (msg: string | null) => void;
  onLoading: (isLoading: boolean) => void;
}

export function DownloaderForm({
  onSuccess,
  onError,
  onLoading,
}: DownloaderFormProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        setLocalError(null);
        onError(null);
      }
    } catch {
      setLocalError("Unable to access clipboard. Please paste manually.");
    }
  };

  const handleClear = () => {
    setUrl("");
    setLocalError(null);
    onError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = url.trim();

    if (!cleanUrl) {
      setLocalError("Please enter an Instagram post or Reel link.");
      return;
    }

    if (!isValidInstagramUrl(cleanUrl)) {
      setLocalError(
        "Invalid format. Please enter a valid Instagram post or reel link (e.g. https://www.instagram.com/reel/...)"
      );
      return;
    }

    setLocalError(null);
    onError(null);
    setIsLoading(true);
    onLoading(true);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: cleanUrl }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        const errorMsg =
          json.error || "Failed to extract Instagram media. Please try again.";
        setLocalError(errorMsg);
        onError(errorMsg);
      } else {
        onSuccess(json.items);
      }
    } catch {
      const errorMsg = "Network error. Please verify your connection.";
      setLocalError(errorMsg);
      onError(errorMsg);
    } finally {
      setIsLoading(false);
      onLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-2"
      >
        <div className="relative flex-1 w-full flex items-center">
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (localError) setLocalError(null);
            }}
            placeholder="Paste Instagram link here (Post, Reel, IGTV)..."
            className="w-full px-4 py-3.5 pr-20 text-slate-800 placeholder-slate-400 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-sm sm:text-base"
            disabled={isLoading}
          />

          <div className="absolute right-2 flex items-center gap-1">
            {url ? (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
                title="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePaste}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors"
              >
                <Clipboard className="w-3.5 h-3.5" />
                <span>Paste</span>
              </button>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Fetching...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download</span>
            </>
          )}
        </button>
      </form>

      {localError && (
        <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2 animate-fadeIn">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
          <span>{localError}</span>
        </div>
      )}
    </div>
  );
}
