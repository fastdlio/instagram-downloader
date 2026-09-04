import React from "react";
import { Download, ExternalLink, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] flex items-center justify-center shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Download className="w-5 h-5 text-rose-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              FastDL
            </span>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest -mt-1">
              Open Source
            </span>
          </div>
        </a>

        {/* Navigation / Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-rose-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-rose-600 transition-colors">
            How It Works
          </a>
          <a href="#faq" className="hover:text-rose-600 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button linking to official live web */}
        <div className="flex items-center gap-3">
          <a
            href="https://fastdl.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold text-sm shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-rose-500/30 hover:opacity-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>FastDL.io Official</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
}
