import React from 'react';

const pillars = [
    { title: 'Discovery Logic', desc: 'Is the consumer searching for exactly your brand, or are they browsing a category shelf? Discovery dictates pack-size and discount pressure.' },
    { title: 'Decision Friction', desc: 'D2C asks a user to spend $40 before tasting the product. Retail asks for $3. Understanding friction defines which channel should serve as your trial wedge.' },
    { title: 'Basket Context', desc: 'Is the product being thrown into an impulse basket alongside an energy drink, or is it a planned monthly grocery supply? Context changes format viability.' },
];

export const ChannelLandscape: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">
                        Behavioral Geometry
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
                        The Channel Thesis
                    </h2>
                    <p className="text-foreground/50 text-lg font-light leading-relaxed">
                        A channel is a specific psychological environment. It dictates pricing tolerance, flavor adventurousness, and repeat probability long before the consumer actually consumes the product.
                    </p>
                </div>

                <div className="md:w-2/3 space-y-6">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="group p-8 bg-graphite/5 border border-foreground/5 hover:border-gold/20 rounded-2xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-5xl font-serif italic pointer-events-none">
                                0{i + 1}
                            </div>
                            <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-gold transition-colors">{pillar.title}</h4>
                            <p className="text-sm font-light text-foreground/60 leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
