"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { DownloaderForm } from "@/components/DownloaderForm";
import { MediaResult } from "@/components/MediaResult";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import type { MediaItem } from "@/lib/instagram";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 px-4 sm:px-6 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-rose-400/15 via-purple-400/15 to-amber-300/15 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Free, Fast & Unlimited Instagram Media Downloader</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-none">
              Download Instagram{" "}
              <span className="bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                Videos, Reels & Photos
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Save high-resolution Instagram Reels, Videos, Stories, and Photos directly in your browser. No login or installation required.
            </p>

            <div className="mt-8">
              <DownloaderForm
                onSuccess={(newItems) => setItems(newItems)}
                onError={() => setItems([])}
                onLoading={(loading) => setIsLoading(loading)}
              />
            </div>

            {/* Results Preview */}
            <MediaResult items={items} />
          </div>
        </section>

        {/* Features Grid */}
        <Features />

        {/* How It Works Guide */}
        <HowItWorks />

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
