'use client';

import React, { useState } from 'react';
import { growthMessageFits } from '../../data/growth';
import { GrowthMessageFit } from '../../types';

export const MessageOccasionConsole: React.FC = () => {
    const [activeFrame, setActiveFrame] = useState<GrowthMessageFit>(growthMessageFits[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Message Framing</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4 text-balance leading-tight">Different moments require different framing.</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light leading-relaxed">
                    A shake or bar does not win on formula alone. It wins when the framing matches the moment: indulgence, utility, or ritual replacement.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Pane: Selector */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    {growthMessageFits.map(frame => {
                        const isActive = activeFrame.id === frame.id;
                        return (
                            <button
                                key={frame.id}
                                onClick={() => setActiveFrame(frame)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${isActive ? 'bg-graphite/40 border-accent/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <span className={`text-[9px] uppercase tracking-[0.2em] font-bold block mb-2 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground/30'}`}>
                                    {isActive ? 'Active Framing' : 'Inspect Framing'}
                                </span>
                                <span className={`text-xl font-serif block ${isActive ? 'text-foreground' : 'text-foreground/50'}`}>
                                    {frame.framingName}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Pane: Intel Form */}
                <div className="lg:w-2/3 bg-graphite/10 border border-foreground/10 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
                    
                    <div className="relative z-10 flex flex-col h-full space-y-10">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent inline-block mb-3 px-3 py-1 rounded bg-accent/5 border border-accent/20">The Primary Hook</span>
                            <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">{activeFrame.primaryHook}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-6 border-t border-foreground/5">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Where it fits best</span>
                                <p className="text-sm font-medium text-foreground">{activeFrame.bestOccasionId}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Repeat trigger</span>
                                <p className="text-sm font-light text-foreground/80 leading-relaxed">{activeFrame.repeatTrigger}</p>
                            </div>
                        </div>

                        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">What it needs</span>
                                <p className="text-sm font-light text-foreground/80 leading-relaxed">{activeFrame.trustRequirement}</p>
                            </div>
                            <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80 block mb-3">Failure mode</span>
                                <p className="text-sm font-light text-foreground/70 leading-relaxed">{activeFrame.failureMode}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
