"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is FastDL?",
      a: "FastDL (https://fastdl.io/) is a fast, free, and secure browser-based tool designed to help users download publicly available Instagram videos, photos, Reels, Stories, Highlights, and profile pictures without software installation.",
    },
    {
      q: "Do I need an Instagram account or password to use FastDL?",
      a: "No. FastDL works without requiring an Instagram login, password, or session cookies for supported public links. You simply paste the URL and download the media anonymously.",
    },
    {
      q: "Is FastDL free to use?",
      a: "Yes, FastDL is 100% free with unlimited downloads. There are no subscriptions, payment gates, or hidden software installations required.",
    },
    {
      q: "Can I download Instagram Reels and Stories?",
      a: "Yes! FastDL fully supports downloading Instagram Reels, standard video posts, IGTV, carousels, and publicly accessible Stories in original high definition.",
    },
    {
      q: "Is FastDL affiliated with Instagram or Meta?",
      a: "No. FastDL is an independent service and is not affiliated, endorsed, or certified by Instagram or Meta. Please only download content that you own or have permission to save.",
    },
  ];

  return (
    <section id="faq" className="py-16 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Everything you need to know about FastDL and downloading Instagram media.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-rose-600 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 transition-transform duration-200",
                      isOpen && "rotate-180 text-rose-600"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
