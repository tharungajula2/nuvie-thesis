import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product Lab — Nuvie Thesis",
  description: "A product-first reading of Nuvie’s portfolio, core SKUs, and future flavor directions.",
};

import React from 'react';
import { products } from '../data/products';
import { siteContent } from '../data/site-content';
import { ProductSurface } from '../components/ui/ProductSurface';
import { SystemContinuation } from '../components/ui/SystemContinuation';
import { ChapterHero } from '../components/hero/ChapterHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SummerConceptGrid } from '../components/labs/flavor/SummerConceptGrid';
import { StrategyCard } from '../components/ui/StrategyCard';

export default function ProductsPage() {
    // FIX 3: Separate Occasions from SKU names in the Hero Switcher
    // Keep only the first slide (The Reading).
    const labChapters = siteContent.heroChapters.slice(0, 1);

    const strategicInsights = [
        {
            title: "Role clarity",
            badge: "Product Logic",
            description: "Each SKU works harder when it has a clear, distinct job. From lowering entry friction to anchoring a daily routine, specificity matters more than coverage. This is how I am currently thinking about it."
        },
        {
            title: "Repeat Dynamics",
            badge: "Retention",
            description: "Routine SKUs and rotation SKUs play different roles in keeping someone in the portfolio. The goal is the habit, not just the next transaction. I may be oversimplifying this."
        },
        {
            title: "Indulgence Entry",
            badge: "Observation",
            description: "For a brand like Nuvie, pleasure seems like a natural entry point. If the indulgence promise holds at scale, repeat becomes possible. This is an outside read, not a confirmed signal."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Section 1: Cinematic Product Transition (SKU Switcher Top) */}
            <ChapterHero chapters={labChapters} />

            {/* Section 2: Core SKU Showcase */}
            <section id="portfolio-showcase" className="relative py-32 bg-background border-t border-foreground/5">
                <div className="px-6 mb-20 max-w-7xl mx-auto">
                    <SectionHeader 
                        alignment="left"
                        eyebrow="6-SKU CORE"
                        title="Portfolio as I Read It from the Outside"
                        subtitle="This is how I tried to map the portfolio from the outside. Each SKU seems to serve a different purpose, though I am working from public signals only. I may have some of this wrong."
                        badge="How I Read the Portfolio"
                    />
                </div>
                
                <div className="flex flex-col">
                    {products.map((product, idx) => (
                        <ProductSurface key={product.id} product={product} index={idx} />
                    ))}
                </div>
            </section>

            {/* NEW SECTION: SEPARATED OCCASION LENS (To avoid mix-up in Hero Switcher) */}
            <section className="relative py-48 bg-background overflow-hidden border-t border-foreground/5">
                <div className="absolute inset-0 bg-accent/2 blur-[120px] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-bold mb-8 block">
                        OCCASION LENS
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-[1.05] text-balance">
                        My working hypothesis: occasion matters more than category.
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 mt-16 opacity-60 max-w-4xl mx-auto">
                        {['Coffee Ritual', '4 PM Slump', 'Breakfast Rescue', 'Sweet Craving Swap', 'Commute Fuel'].map((tag) => (
                            <span key={tag} className="text-[9px] tracking-widest uppercase font-extrabold border-b border-accent/20 pb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Seasonal Extensions & Concepts */}
            <section className="relative py-48 bg-graphite/10 border-y border-foreground/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
                <div className="px-6 mb-20 max-w-7xl mx-auto text-center md:text-left transition-all">
                    <SectionHeader 
                        alignment="center"
                        eyebrow="CONCEPT EXTENSIONS"
                        title="Flavor directions I explored in this study"
                        subtitle="These are packaging concepts and flavor ideas I designed as part of this study. They are not Nuvie's actual plans and I am not proposing they should be. Nuvie's philosophy of doing one thing well before expanding is something I noticed and respect. This section is simply my way of thinking through cultural and seasonal fit logic, and demonstrating how I approach product exploration. Nothing here should be read as a product roadmap."
                        badge="PRODUCT LAB"
                    />
                    <p className="mt-8 text-xs text-foreground/60 italic text-center max-w-2xl mx-auto animate-pulse">
                        The packaging visuals in this section are concept designs I created for this study. They are not Nuvie's planned products.
                    </p>
                </div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <SummerConceptGrid />
                </div>
            </section>

            {/* Section 4: Special Strategic Callouts */}
            <section className="relative py-48 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <SectionHeader 
                            alignment="left"
                            eyebrow="PRODUCT NOTES"
                            title="A few things I kept coming back to"
                            subtitle="Observations from studying how the lineup appears to handle entry, routine, and repeat."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {strategicInsights.map((insight, idx) => (
                            <div key={idx} className="h-full">
                                <StrategyCard 
                                    title={insight.title}
                                    badge={insight.badge}
                                    description={insight.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Continuation */}
            <SystemContinuation 
                nextRoute="/how-i-can-help"
                nextTitle="How I Can Help"
                description="Specific initiatives and audit directions built around Nuvie’s current growth reality."
            />
        </main>
    );
}
