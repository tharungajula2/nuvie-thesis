import React from 'react';

const stages = [
    { title: 'Awareness Hook', desc: 'The scroll-stopper. Usually driven by a hyper-specific aesthetic or a polarizing message (e.g., "Protein that actually tastes like dessert").' },
    { title: 'Occasion Entry', desc: 'The user maps the product to a specific gap in their own life (e.g., "I will drink this when I am rushing to work").' },
    { title: 'Trust Confirmation', desc: 'Seeking borrowed trust from creators, reviewers, or ingredient panels to reduce purchase anxiety before checkout.' },
    { title: 'The Repeat Trigger', desc: 'The exact physical or emotional sensation post-consumption that creates the desire to do it again tomorrow.' }
];

export const GrowthArchitectureMap: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 inline-block mb-4">Strategic Sequence</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">The Growth Mechanics</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    Growth is not a funnel; it is a sequential psychological lock. If the user passes the trust check but fails the repeat trigger, you have bought a trial, not a customer.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-1/2" />
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {stages.map((stage, i) => (
                        <div key={i} className="relative z-10 bg-background border border-foreground/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-gold/30 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-foreground/20 bg-graphite/40 flex items-center justify-center font-serif text-xl text-foreground/60 mb-6 group-hover:text-gold group-hover:border-gold/40 transition-colors">
                                {i + 1}
                            </div>
                            <h4 className="text-xl font-serif text-foreground mb-4">{stage.title}</h4>
                            <p className="text-sm font-light text-foreground/60 leading-relaxed">
                                {stage.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
