import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { latestNews } from '../data/latestNews';

const LatestNews = () => {
  // Tripling the array ensures a perfectly smooth, infinite running loop
  const tickerItems = [...latestNews, ...latestNews, ...latestNews];

  return (
    <div className="w-full bg-[#0f172a] border-b border-white/5 relative z-40 overflow-hidden shadow-md flex items-center h-12 sm:h-14">
      
      {/* CSS Animation Injector for ultra-smooth running */}
      <style>{`
        @keyframes runningTicker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        .animate-running-ticker {
          display: flex;
          width: max-content;
          animation: runningTicker 35s linear infinite;
          will-change: transform;
        }
        .animate-running-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Premium Static Badge with Blinking Animation */}
      <div className="absolute left-0 top-0 bottom-0 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 z-50 shadow-[10px_0_20px_rgba(15,23,42,0.9)] border-r border-yellow-300">
        
        {/* Blinking 'LIVE' Dot */}
        <div className="relative flex items-center justify-center h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-700"></span>
        </div>

        <span className="text-[#0f172a] font-extrabold tracking-[0.15em] uppercase text-[10px] sm:text-xs whitespace-nowrap">
          Latest Updates
        </span>
      </div>

      {/* Continuous Auto-Scrolling Track */}
      <div className="w-full h-full flex items-center pl-[160px] sm:pl-[200px] overflow-hidden">
        {/* Fade overlays for smooth edges */}
        <div className="absolute left-[140px] sm:left-[180px] top-0 bottom-0 w-12 bg-gradient-to-r from-[#0f172a] to-transparent z-40 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f172a] to-transparent z-40 pointer-events-none"></div>

        <div className="animate-running-ticker items-center gap-12 sm:gap-16">
          {tickerItems.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={item.link}
              className="flex items-center gap-3 text-blue-100 hover:text-yellow-400 transition-colors duration-300 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap group cursor-pointer"
            >
              {/* Premium Gold Dot Bullet */}
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0 inline-block opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Headline Text */}
              <span>{item.text}</span>
              
              {/* Subtle hover icon */}
              <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-yellow-400 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;