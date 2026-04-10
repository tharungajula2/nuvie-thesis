import React from 'react';

const economics = [
    { label: 'MOQ Constraint', value: 'Commercial lines often require 10k-25k+ units per SKU for a single run. High MOQ forces high inventory risk.', risk: 'Inventory Bloat' },
    { label: 'Batch Yield', value: 'Standard factory losses (e.g., product left in pipes/tanks) can be 3-7%. Poor yield destroys unit margins.', risk: 'Margin Decay' },
    { label: 'Line Capability', value: 'Not every factory can handle high viscosities or specific bottle shapes. Design for the machinery, not just the brand.', risk: 'Technical Rejection' },
    { label: 'Supply Continuity', value: 'Relying on a single co-manufacturer is a single point of failure. Redundancy at scale is expensive but required.', risk: 'Sourcing Fragility' }
];

export const EconomicsScaleLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                    
                    <div className="md:w-1/3 sticky top-32">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">
                            Operational Burden
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6 mt-2">
                            Scale-Up <span className="italic text-gold">Realities.</span>
                        </h2>
                        <p className="text-foreground/50 text-lg font-light leading-relaxed">
                            Manufacturing success is measured in yield, consistency, and stability. Once a product leaves the lab, it enters the world of industrial operational burden.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {economics.map((item, i) => (
                            <div key={i} className="group p-8 bg-graphite/[0.05] border border-foreground/5 hover:border-blue-500/20 rounded-2xl transition-all duration-300 relative overflow-hidden">
                                <span className="text-[9px] uppercase tracking-widest text-blue-500/30 font-bold mb-6 italic block">
                                    Operational Constraint // 0{i + 1}
                                </span>
                                <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-blue-400 transition-colors">{item.label}</h4>
                                <p className="text-sm font-light text-foreground/60 leading-relaxed mb-6">
                                    {item.value}
                                </p>
                                <div className="pt-4 border-t border-foreground/10 flex items-center space-x-3">
                                    <span className="text-[8px] uppercase tracking-widest text-red-500/50 font-bold">Primary Risk:</span>
                                    <span className="text-[10px] uppercase tracking-widest text-foreground font-bold">{item.risk}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
        </section>
    );
};
