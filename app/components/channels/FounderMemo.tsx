import React from 'react';

export const FounderMemo: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto mb-20">
            <div className="bg-graphite/10 border border-foreground/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="var(--color-gold)">
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5v-3zm0-5h14v3H5v-3zm0-5h14v3H5V5z"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <span className="text-[#facc15]/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                        The Operator's Reality
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">Operator Memo: Scale</h3>

                    <div className="space-y-12">
                        {/* Directive 1 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">1. Coffee Owns the Office</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                The Café Latte SKU has the strongest potential in Office/Pantry environments. The 3 PM slump is the highest-leverage occasion in the system. Flood B2B sales networks with the Coffee Hybrid—it generates zero CAC and creates a daily sampling loop that pushes individuals back to the D2C ecosystem for weekends.
                            </p>
                        </div>

                        {/* Directive 2 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">2. Protect the Vanilla Anchor</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Wah Vanilla is a D2C staple. Do not waste modern trade slotting fees on Vanilla unless required by the buyer to anchor the shelf. Vanilla wins in the blender at home, not on the impulse shelf at the gas station.
                            </p>
                        </div>

                        {/* Directive 3 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">3. Discipline in Quick Commerce</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Quick commerce will make you feel like you have market-share while destroying your P&L. Use it strictly as an acquisition engine. Ensure every product shipped from a dark store contains aggressive, highly-visible CTAs urging the user to subscribe on the main D2C property for a permanent discount.
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
