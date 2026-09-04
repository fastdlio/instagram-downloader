import React from "react";
import { Download, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center">
                <Download className="w-4 h-4 text-rose-500" />
              </div>
            </div>
            <span className="text-lg font-extrabold text-white">FastDL</span>
            <span className="text-xs text-slate-500 ml-1">Open-Source Project</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
            <a
              href="https://fastdl.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rose-400 flex items-center gap-1 font-medium transition-colors"
            >
              <span>Official FastDL.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://x.com/fastdlio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X / Twitter (@fastdlio)
            </a>
            <a
              href="mailto:contact@fastdl.io"
              className="hover:text-white transition-colors"
            >
              contact@fastdl.io
            </a>
          </div>
        </div>

        {/* Legal Disclaimer compliant with Master Entity */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-2xl leading-relaxed">
            FastDL is an independent open-source project and is not affiliated,
            sponsored, or certified by Instagram™ or Meta Platforms, Inc. Use
            FastDL only for media you own or have explicit permission to save.
          </p>

          <p className="flex items-center gap-1 flex-shrink-0">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for the open web</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
