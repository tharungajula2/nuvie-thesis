import React from 'react';

export const FounderMemo: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto mb-20">
            <div className="bg-graphite/10 border border-foreground/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="var(--color-gold)">
                         <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                        The Operator's Reality
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">Operator Memo: Growth</h3>

                    <div className="space-y-12">
                        {/* Directive 1 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">1. Lock the Morning Routine</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                The Coffee Hybrid is the strongest wedge. Market this exclusively to *The Busy Professional* using the *Utility & Speed* framing. The objective is to hijack their existing caffeine routine. Do not dilute this message with dessert/indulgence imagery.
                            </p>
                        </div>

                        {/* Directive 2 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">2. Indulgence Requires UGC Trust</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Choco Loco succeeds when positioned as an afternoon sweet-craving swap. However, because consumers have been burned by chalky protein treats before, this SKU requires heavy investments in blind taste-test organic content. Polished studio ads will fail here.
                            </p>
                        </div>

                        {/* Directive 3 */}
                        <div>
                            <h4 className="text-xl font-serif text-gold mb-3">3. Measure Loops, Not Just Trial</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                A spike in Instagram ad conversions for the Wah Vanilla is useless if it sits in their pantry unused. Push post-purchase CRM flows that teach the user exactly *when* to drink it (e.g., "Add a shot to your oatmeal tomorrow at 8 AM"). You are not selling powder; you are selling an 8 AM habit.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-8 border-t border-foreground/10 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold flex items-center">System Status: <span className="text-green-500 ml-3 flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Growth Engine Engaged</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
