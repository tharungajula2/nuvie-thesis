'use client';

import React from 'react';
import Link from 'next/link';

interface SystemContinuationProps {
  nextRoute: string;
  nextTitle: string;
  description: string;
  ctaLabel?: string;
}

export const SystemContinuation: React.FC<SystemContinuationProps> = ({
  nextRoute,
  nextTitle,
  description,
  ctaLabel,
}) => {
  return (
    <section className="relative py-48 px-6 bg-background border-t border-foreground/5 overflow-hidden">
      {/* Background Anchors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/2 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
               <span className="w-8 h-[1px] bg-accent/40" />
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent/60">Explore Next</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-accent transition-colors duration-500 line-clamp-2">
              {nextTitle}
            </h3>
            <p className="text-lg text-foreground/45 font-light leading-relaxed">
              {description}
            </p>
          </div>

          <Link href={nextRoute} className="flex-shrink-0">
            <button className={`${ctaLabel ? 'px-8 py-4 rounded-full bg-accent text-background' : 'w-20 h-20 rounded-full border border-foreground/10'} flex items-center justify-center gap-3 transition-all duration-500 active:scale-95 group-hover:border-accent group-hover:bg-accent/5`}>
              {ctaLabel && <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{ctaLabel}</span>}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                className={`${ctaLabel ? 'text-background' : 'text-foreground/40'} group-hover:translate-x-1 group-hover:text-accent transition-all duration-500`}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
