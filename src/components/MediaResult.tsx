"use client";

import React from "react";
import { Download, Film, Image as ImageIcon, User, CheckCircle2 } from "lucide-react";
import type { MediaItem } from "@/lib/instagram";

interface MediaResultProps {
  items: MediaItem[];
}

export function MediaResult({ items }: MediaResultProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span>Ready to Download</span>
        </h3>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          HD Quality
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-100 flex flex-col justify-between"
          >
            {/* Preview Section */}
            <div className="relative aspect-[4/5] bg-slate-900 w-full overflow-hidden flex items-center justify-center">
              {item.type === "video" ? (
                <video
                  src={item.downloadUrl}
                  poster={item.thumbnailUrl}
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.downloadUrl || item.thumbnailUrl}
                  alt={item.title || "Instagram media preview"}
                  className="w-full h-full object-contain"
                />
              )}

              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5">
                {item.type === "video" ? (
                  <>
                    <Film className="w-3.5 h-3.5 text-rose-400" />
                    <span>Video / Reel</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Photo</span>
                  </>
                )}
              </div>
            </div>

            {/* Content & Action Section */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <User className="w-3.5 h-3.5" />
                <span>@{item.author}</span>
              </div>

              {item.title && (
                <p className="text-xs text-slate-600 line-clamp-2 italic">
                  &ldquo;{item.title}&rdquo;
                </p>
              )}

              <a
                href={item.downloadUrl}
                download={`fastdl-${item.id || "instagram"}.${item.type === "video" ? "mp4" : "jpg"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download {item.type === "video" ? "MP4 Video" : "HD Photo"}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
