import React from 'react';

export const RecommendationLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto mb-20">
            
            {/* Operator Memo / Recommendation block */}
            <div className="bg-gold/5 border border-gold/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="var(--color-gold)">
                        <path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.2H4.8L12 5.8z"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold inline-block mb-6">OS Directives</span>
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">Operator Summary</h3>

                    <div className="space-y-12">
                        {/* Directive 1 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">1. Protect the Wedge (Café Latte)</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                The current portfolio's strongest acquisition lever is the coffee ritual. It has the highest strategic weight because it replaces an existing habit rather than creating a new one. Do not dilute this category with adjacent cafe flavors (like Mocha) until Latte has saturated its primary channel.
                            </p>
                        </div>

                        {/* Directive 2 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">2. Anchor with Heritage (Kesar Pista)</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                While western flavors (Chocolate/Vanilla) are functional, Kesar Pista operates as a "Trust SKU." It brings regional validation and household acceptance. Ensure this SKU receives subscription-focused marketing to lock in long-term household LTV.
                            </p>
                        </div>

                        {/* Directive 3 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">3. Expansion Risk (Bar Category)</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                The bar format is inherently high-friction logistically. Currently split between Brownie (Smooth Impulse) and Almond (Crunch Impulse). Expanding this line further introduces severe cannibalization. Hold at 2 SKUs and optimize the D2C shipping logic before expanding the flavor matrix.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-8 border-t border-gold/10 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">System Status: <span className="text-green-500 ml-2">Stable Architecture</span></div>
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    </div>
                </div>
            </div>

        </section>
    );
};
