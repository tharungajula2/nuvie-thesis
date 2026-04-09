import React from 'react';

const layers = [
    { title: 'Visual Authority', desc: 'The font, the negative space, and the gloss. A product in a matte pastel wrapper is implicitly trusted as "cleaner" than a product in a neon graphic foil, regardless of the actual ingredients.' },
    { title: 'Claim Hierarchy', desc: 'What is the eye drawn to first? "25g Protein"? "Lactose-Free"? Or "Astro-Blast Flavor"? The hierarchy dictates exactly which archetype will pick the product up.' },
    { title: 'The Flip Test', desc: 'When they flip the bottle to read the back. If the front promises "Clean Energy" but the back reveals a 15-syllable chemical sweetener list, trust drops to zero instantly.' },
    { title: 'Somatic Expectation', desc: 'What does the consumer believe will happen in their digestive tract after drinking it? If they fear bloating, they will not buy, no matter how good it tastes.' }
];

export const TrustAnatomyMap: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">
                        Perception Layers
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6 mt-2">
                        The Anatomy of Credibility
                    </h2>
                    <p className="text-foreground/50 text-lg font-light leading-relaxed">
                        Trust is not abstract. It is a strictly sequenced mechanism that begins long before consumption. Fracture any of these layers, and the trial fails.
                    </p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {layers.map((layer, i) => (
                        <div key={i} className="group p-8 bg-graphite/5 border border-foreground/5 hover:border-foreground/20 rounded-2xl transition-all duration-300 relative overflow-hidden">
                            <div className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold mb-6 italic">
                                Layer 0{i + 1}
                            </div>
                            <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-gold transition-colors">{layer.title}</h4>
                            <p className="text-sm font-light text-foreground/60 leading-relaxed">
                                {layer.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
