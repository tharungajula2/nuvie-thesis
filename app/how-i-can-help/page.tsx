import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How I Can Help — Nuvie Thesis",
  description: "A practical outline of where I may be useful across product, repeat logic, and execution clarity.",
};

import React from 'react';
import Link from 'next/link';
import { CtaButton } from '../components/ui/CtaButton';

export default function HowICanHelpPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-accent/30">
            {/* Hero */}
            <section className="relative py-32 px-6 overflow-hidden border-b border-foreground/5 pt-48 bg-background">
                {/* 
                    CINEMATIC VIDEO BASE 
                    Consistent with site-wide performance-editorial visual language.
                */}
                <div className="absolute inset-0 z-0 overflow-hidden video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute w-full h-full object-cover scale-105 opacity-15 transition-opacity duration-1000"
                        poster="/images/hero-fallback.jpg"
                    >
                        <source src="/videos/outreach-hero.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Atmospheric Overlays */}
                    <div className="absolute inset-0 video-vignette opacity-80" />
                    <div className="absolute inset-0 bg-accent/5 mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-none" />
                </div>

                <div className="absolute inset-0 bg-accent/2 blur-[140px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-accent/50 text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">
                        How I Can Help
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8 text-balance">
                        Useful work, not <br/><span className="italic text-foreground/80 text-4xl md:text-6xl lg:text-8xl block md:inline mt-2 md:mt-0">abstract advice.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
                        A few areas where I think I can genuinely contribute, around product-occasion fit, repeat mechanics, and how Nuvie communicates in the channels that matter.
                    </p>
                </div>
            </section>

            {/* How I Think */}
            <section className="py-32 px-6 max-w-4xl mx-auto">
                <div className="space-y-8 text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
                    <p>
                        I came from places where the information was dense and the job was to make it clearer. Credit risk, lending workflows, analytics. The common thread was always the same — take something messy, find the structure inside it, and build something usable from it. Not a framework. A working output.
                    </p>
                    <p>
                        That is how I approached this study. And that is how I would approach anything useful I could do here.
                    </p>
                </div>
            </section>

            {/* Where I May Be Useful */}
            <section className="py-24 bg-graphite/40 border-y border-foreground/5 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent opacity-50" />
                <div className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">

                    <h2 className="text-3xl md:text-5xl font-serif mb-6">Where I may be useful</h2>
                    <p className="text-foreground/75 font-light max-w-xl mx-auto text-lg leading-relaxed">
                        Focused contribution areas built around Nuvie’s real problems: occasions, repeat, trust, and channel clarity.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Area 1 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 01</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Product × Occasion Fit</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                How specific SKUs attach to specific moments, and where messaging or positioning may become sharper based on real behavioral signals.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                Specifically around which SKUs attach naturally to which moments, and where the current messaging may be working against that.
                            </p>
                        </div>

                        {/* Area 2 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 02</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Repeat & Retention Logic</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                Identifying where trial happens vs where repeat stalls. Building stronger scaffolding across ritual, routine, and rotation products.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                Specifically around where first trial is happening, where repeat stalls, and what the data would tell you if you looked at it cohort by cohort.
                            </p>
                        </div>

                        {/* Area 3 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 03</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Channel & Conversion Clarity</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                Optimizing how products communicate in quick-commerce and D2C surfaces when the user is solving an immediate moment.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                Specifically around quick commerce listing language and how product pages communicate when a consumer is solving an immediate moment.
                            </p>
                        </div>

                        {/* Area 4 */}
                        <div className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] shadow-sm group hover:border-accent transition-all duration-500">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-accent/30" />
                                <span className="text-accent/60 text-[9px] font-bold uppercase tracking-widest">Focus 04</span>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Structured Tools and Artifacts</h3>
                            <p className="text-base text-foreground/75 font-light leading-relaxed mb-8">
                                Building systems, audits, messaging maps, or working prototypes that make decisions clearer and execution faster.
                            </p>
                            <p className="text-base text-foreground/75 font-light leading-relaxed">
                                Specifically building the working output — audit, map, or prototype — rather than describing what it should look like.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Where I am coming from */}
            <section className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-foreground/5">
                <h2 className="text-3xl md:text-5xl font-serif mb-12">Where I am coming from</h2>
                <div className="space-y-8 text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-3xl mx-auto mb-16">
                    <p>
                        I don&apos;t know what Nuvie needs right now from the inside. This research is my honest attempt to understand it from the outside — the product, the channel, the repeat problem, the brand.
                    </p>
                    <p>
                        If there is a problem worth working on together, I will go as deep as needed to be useful on it. I am not coming with a fixed set of answers. I am coming with the willingness to find them.
                    </p>
                    <p>
                        If any of this resonates, I would genuinely like to talk.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link href="mailto:tharun.gajula.2@gmail.com">
                        <CtaButton size="xl" variant="primary">
                            LET’S TALK
                        </CtaButton>
                    </Link>
                </div>
            </section>

        </main>
    );
}
