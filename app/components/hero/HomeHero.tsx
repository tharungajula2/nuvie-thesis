'use client';

import React from 'react';
import { siteContent } from '../../data/site-content';
import { CtaButton } from '../ui/CtaButton';
import Link from 'next/link';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* Subtle Atmospheric Depth */}
      <div className="absolute inset-0 bg-accent/2 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-block text-accent text-[10px] uppercase tracking-[0.5em] font-bold mb-12 animate-fade-in">
          The Outreach Study
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-12 text-balance">
          {siteContent.hero.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/45 font-light max-w-2xl mx-auto leading-relaxed text-balance mb-16">
          {siteContent.hero.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/products">
            <CtaButton variant="primary" size="xl">
              {siteContent.hero.primaryCta}
            </CtaButton>
          </Link>
          <Link href="/how-i-can-help">
            <CtaButton variant="outline" size="xl">
              {siteContent.hero.secondaryCta}
            </CtaButton>
          </Link>
        </div>
      </div>

      {/* Static Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">Scroll to Enter</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};
