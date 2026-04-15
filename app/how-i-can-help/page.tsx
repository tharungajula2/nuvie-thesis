import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How I Can Help — Nuvie Thesis",
  description: "A practical outline of where I may be useful across product, repeat logic, and execution clarity.",
};

import React from 'react';
import Link from 'next/link';
import { outreachContent } from '../data/outreach';

// Reused Strategic Components
import { SystemContinuation } from '../components/ui/SystemContinuation';
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
                <div className="space-y-10">
                    <p className="text-2xl md:text-3xl font-serif text-foreground leading-[1.3] text-balance">
                        I came from places where the information was dense and the job was to make it clearer. Credit risk, lending workflows, analytics. The common thread was always the same — take something messy, find the structure inside it, and build something usable from it. Not a framework. A working output.
                    </p>
                    <p className="text-2xl md:text-3xl font-serif text-foreground leading-[1.3] text-balance">
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
                            <p className="text-base text-foreground/60 italic leading-relaxed">
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
                            <p className="text-base text-foreground/60 italic leading-relaxed">
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
                            <p className="text-base text-foreground/60 italic leading-relaxed">
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
                            <p className="text-base text-foreground/60 italic leading-relaxed">
                                Specifically building the working output — audit, map, or prototype — rather than describing what it should look like.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What I would look at first */}
            <section className="py-32 px-6 bg-background">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <span className="text-accent/50 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">First Pass</span>
                        <h2 className="text-3xl md:text-5xl font-serif">What I would look at first</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {[
                            "Which SKU currently has the strongest natural repeat behavior",
                            "Whether the coffee ritual wedge is being fully utilized",
                            "Whether indulgence-led entry and routine-led retention are clearly separated",
                            "Whether quick-commerce presentation is solving moments fast enough",
                            "Where product pages / listing language may still be too category-heavy",
                            "Where trust and repeat communication can become clearer"
                        ].map((point, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="text-accent/20 font-serif italic text-2xl group-hover:text-accent transition-colors">0{idx + 1}</span>
                                <p className="text-foreground/80 font-light leading-relaxed pt-1 text-lg">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiatives / 30 Days */}
            <section className="py-48 px-6 bg-graphite/10 border-y border-foreground/5 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-background to-transparent opacity-30" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-accent/40 text-[10px] uppercase font-bold tracking-[0.4em] mb-6 block">The First Step</span>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8">What I would try first</h2>
                        <p className="text-xl text-foreground/60 font-light italic">A practical, useful first 30 days.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-10">
                        {outreachContent.initiatives.map((item, idx) => (
                            <div key={idx} className="p-12 md:p-16 bg-white/40 backdrop-blur-md border border-foreground/5 rounded-[3rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-12 group hover:border-accent transition-all duration-700 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/2 blur-3xl -z-10" />
                                <div className="max-w-xl">
                                    <div className="flex items-center space-x-4 mb-6 opacity-0 pointer-events-none">
                                        <span className="px-3 py-1 bg-accent/5 border border-accent/20 rounded text-[8px] font-bold text-accent uppercase tracking-widest">Spacer</span>
                                    </div>
                                    <h4 className="text-3xl font-serif mb-4 group-hover:text-accent transition-colors">{item.title}</h4>
                                    <p className="text-foreground/75 font-light leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex-shrink-0 w-20 h-20 rounded-full border border-foreground/8 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500 shadow-sm">
                                    <span className="text-xl font-serif text-foreground/20 group-hover:text-accent italic">0{idx + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why My Background Helps */}
            <section className="py-48 px-6 bg-background">
                <div className="max-w-4xl mx-auto border border-foreground/5 bg-graphite/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/2 blur-[80px] pointer-events-none" />
                    
                    <div className="mb-12">
                        <span className="text-accent/50 text-[10px] uppercase font-bold tracking-[0.5em] block mb-4">WHERE I COME FROM</span>
                        <h2 className="text-3xl md:text-5xl font-serif">Why my background helps</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-xs uppercase tracking-widest font-bold text-foreground/60">The background</h4>
                            <p className="text-foreground/80 font-light leading-relaxed text-lg text-balance">
                                Credit risk, lending systems, analytics. Places where information is dense, problems are messy, and clarity is the actual job. Not theory. Not strategy decks. Getting something structured and usable from difficult raw material.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs uppercase tracking-widest font-bold text-foreground/60">Why it matters here</h4>
                            <p className="text-foreground/80 font-light leading-relaxed text-lg text-balance">
                                What that means practically is this. I can take a behavioral or data problem, break it into something structured, and build a working output from it. Not a presentation. Something that actually helps someone make a faster decision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-32 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-serif mb-12 italic opacity-60">
                    If any of this is relevant to where Nuvie is right now, I’d genuinely like to talk.
                </h2>
                <div className="flex justify-center">
                    <CtaButton size="xl" variant="primary">
                        LET’S TALK
                    </CtaButton>
                </div>
            </section>

        </main>
    );
}
