import React from "react";
import { Copy, Link2, Download, ExternalLink } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <Copy className="w-6 h-6 text-rose-500" />,
      title: "Copy Instagram URL",
      description:
        "Open Instagram, navigate to the Post, Reel, or IGTV you want to save, click the three dots or Share icon, and select 'Copy Link'.",
    },
    {
      step: "02",
      icon: <Link2 className="w-6 h-6 text-purple-600" />,
      title: "Paste into FastDL",
      description:
        "Paste the copied Instagram URL into the input field above, or visit FastDL.io directly in any browser.",
    },
    {
      step: "03",
      icon: <Download className="w-6 h-6 text-teal-600" />,
      title: "Save in Full HD",
      description:
        "Click the Download button. FastDL will process the media and provide a direct link to save your MP4 or JPG file instantly.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Quick Tutorial
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How to Download Instagram Videos & Photos
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            No technical knowledge or installation needed. Three simple clicks to save your favorite media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start gap-4"
            >
              <div className="flex items-center justify-between w-full">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-3xl font-black text-slate-200">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live Cloud Banner */}
        <div className="mt-12 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-purple-900/10">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Looking for our high-speed production service?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Visit FastDL.io for automated Story downloads, multi-photo carousels, and high-bandwidth CDN delivery.
            </p>
          </div>
          <a
            href="https://fastdl.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
          >
            <span>Visit FastDL.io</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
