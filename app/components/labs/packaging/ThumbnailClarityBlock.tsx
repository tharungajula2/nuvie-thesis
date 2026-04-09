import React from 'react';

export const ThumbnailClarityBlock: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border-4 border-amber-500/20 bg-[#161205] p-10 md:p-20 overflow-hidden group shadow-[0_0_50px_rgba(245,158,11,0.05)]">
                
                {/* Harsh Grid to simulate pixel restriction */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b11_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b11_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500/80 mb-6 flex items-center gap-3 bg-amber-500/10 px-4 py-2 rounded">
                        <span className="w-2 h-2 rounded-sm bg-amber-500 animate-pulse" /> 150x150px Constraint
                    </span>

                    <h3 className="text-4xl md:text-5xl font-serif text-amber-100 mb-8 leading-tight max-w-2xl text-balance">
                        When premium design becomes <span className="italic text-amber-500 border-b-2 border-amber-500/30">invisible.</span>
                    </h3>

                    <p className="text-xl text-amber-100/60 font-light max-w-3xl leading-relaxed mb-12">
                        On a shelf, negative space is a luxury. On a 3-inch Quick Commerce thumbnail, negative space is a failure to communicate. If the macros and the flavor cue are not legible at a 2-second glance, the user skips your product.
                    </p>

                    <div className="w-full flex justify-center pt-8 border-t border-amber-900/40">
                         {/* Simulation boxes */}
                        <div className="flex gap-12 items-center">
                             {/* Bad Design */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 bg-[#0a0a09] border border-amber-900/40 shadow-inner flex flex-col items-center justify-center p-2 relative overflow-hidden">
                                     <div className="text-[4px] text-amber-100/30 mt-6 tracking-widest">W A H</div>
                                     <div className="text-[2px] text-amber-100/20 mt-1">Premium Isolate</div>
                                     <div className="text-[3px] text-amber-100/40 absolute bottom-2">Vanilla Bean - 25g</div>
                                </div>
                                <span className="text-[9px] uppercase tracking-widest text-red-500/80 font-bold">Failed: Illegible</span>
                            </div>
                            
                            <div className="text-amber-500/30 text-2xl font-serif">vs</div>

                            {/* Good Design */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 bg-[#0a0a09] border-2 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] flex flex-col items-center justify-center p-2">
                                     <div className="text-[12px] font-bold text-amber-100 tracking-tight leading-none">25G</div>
                                     <div className="text-[8px] font-serif text-amber-200 mt-1">VANILLA</div>
                                </div>
                                <span className="text-[9px] uppercase tracking-widest text-green-500/80 font-bold">Pass: Immediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
