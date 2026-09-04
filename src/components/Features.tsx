import React from "react";
import { Sparkles, ShieldCheck, Zap, MonitorSmartphone } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      title: "Full HD & 4K Downloads",
      description:
        "FastDL extracts photos and videos directly from the original source files, preserving highest available resolution and crystal-clear audio.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "No Account or Login Required",
      description:
        "Never share your Instagram password or cookies. FastDL processes publicly available media anonymously without requiring any registration.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Lightning-Fast Processing",
      description:
        "Built with optimized Next.js serverless functions to resolve and return download links in milliseconds with zero queuing.",
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-rose-500" />,
      title: "Works on All Devices",
      description:
        "Fully responsive and cross-platform. Enjoy seamless downloading across iPhone, iPad, Android phones, Mac, Windows, and Linux browsers.",
    },
  ];

  return (
    <section id="features" className="py-16 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose FastDL Instagram Downloader?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Engineered for speed, privacy, and maximum quality. The ultimate open-source solution for Instagram media preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
