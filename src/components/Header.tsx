import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-[#263634]/10 bg-[#FFF9ED]/90 backdrop-blur-xs sticky top-0 z-40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-[#124E50] rounded-sm py-1"
          aria-label="Flora & Bloom Homepage"
        >
          <div className="w-7 h-7 rounded-full bg-[#124E50] flex items-center justify-center text-[#F5D95B] font-serif text-base font-bold shadow-xs transition-transform duration-300 group-hover:scale-105">
            F
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#124E50] leading-none">
              Flora &amp; Bloom
            </span>
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#4F9990] font-medium mt-1">
              Everyday Gut Health
            </span>
          </div>
        </a>

        {/* Clean, quiet metadata indicator (No pill badges, no second CTAs) */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#263634]/70">
          <span>Weekly Digest</span>
          <span aria-hidden="true" className="text-[#4F9990]">·</span>
          <span>Science-Grounded</span>
          <span aria-hidden="true" className="text-[#4F9990]">·</span>
          <span>100% Free</span>
        </div>
      </div>
    </header>
  );
};
