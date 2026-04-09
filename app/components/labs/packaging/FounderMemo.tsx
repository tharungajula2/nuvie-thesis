import React from 'react';

export const FounderMemo: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto mb-20">
            <div className="bg-graphite/10 border border-foreground/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="var(--color-gold)">
                         <path d="M12 2L2 22h20L12 2zm0 3.8l6.7 13.4H5.3L12 5.8zm-1 8.2v-4h2v4h-2zm0 4v-2h2v2h-2z"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                        The Operator's Reality
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">Operator Memo: Perception</h3>

                    <div className="space-y-12">
                        {/* Directive 1 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">1. Front-Load Digestibility</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Wah Vanilla is currently positioned well as a core support logic SKU, but if the label does not scream "Lactose-Free" on the very front panel, you are losing 40% of standard consumers to fear of bloat. Move digestive comfort signals to the top visual hierarchy.
                            </p>
                        </div>

                        {/* Directive 2 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">2. Optimize for the 150px War</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                If you are going to aggressively push Choco Loco in Quick Commerce, redesign the primary render. The macro callout (20g) must be artificially unscaled on the thumbnail asset. Elegant minimalism means absolutely nothing when a user is rapid-scrolling on a phone screen.
                            </p>
                        </div>

                        {/* Directive 3 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">3. Claim Discipline</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Stop saying "Sugar-Free." It sounds like an artificial lab chemical. Start saying "No Added Sugar" or "Naturally Sweetened." Small semantic shifts dictate whether a customer trusts the product or feels like they are compromising their health.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-8 border-t border-foreground/10 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold flex items-center">System Status: <span className="text-green-500 ml-3 flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Alignment Maintained</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
