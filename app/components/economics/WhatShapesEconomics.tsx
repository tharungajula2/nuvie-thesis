import React from 'react';

const factors = [
    { name: 'Processing Load', desc: 'Protein degrades under heat. Hiding it in RTD liquids or coffee requires aggressive thermal processing, drastically inflating manufacturing base costs.', type: 'COGS' },
    { name: 'Packaging Burden', desc: 'A heavy liquid payload requires rigid, sterile containers (PET or TetraPak). The packaging often costs as much as the actual nutritional payload.', type: 'COGS' },
    { name: 'Logistics Drag', desc: 'Shipping liquids D2C is brutal. The weight-to-value ratio destroys margin unless the basket size is artificially forced higher.', type: 'Fulfillment' },
    { name: 'Discount Dependence', desc: 'When repeat logic fails, brands rely on 15-20% discounts to induce purchase. In tight-margin channels, this wipes out unit profitability completely.', type: 'Revenue' },
];

export const WhatShapesEconomics: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 inline-block mb-4">Structural Forces</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">The Anatomy of Viability</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    A product is only as good as the system required to deliver it. These are the core forces that determine if a SKU scales or bleeds.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {factors.map((factor, i) => (
                    <div key={i} className="group relative border border-foreground/10 bg-graphite/5 p-8 rounded-2xl overflow-hidden hover:bg-graphite/10 transition-colors">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] blur-xl rounded-full group-hover:bg-red-500/[0.05] transition-colors" />
                        <span className="text-[8px] uppercase tracking-[0.3em] font-bold bg-foreground/5 text-foreground/40 px-2 py-1 rounded inline-block mb-6">
                            {factor.type}
                        </span>
                        <h4 className="text-xl font-serif text-foreground mb-4">{factor.name}</h4>
                        <p className="text-sm font-light text-foreground/60 leading-relaxed">
                            {factor.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
