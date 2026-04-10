import React from 'react';
import { experimentationStages } from '../../../data/rd';

export const ExperimentationFunnel: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Filtering Logic</span>
                <h3 className="text-3xl md:text-5xl font-serif">The Kill-or-Scale Funnel</h3>
                <p className="text-foreground/50 max-w-2xl mx-auto text-lg font-light leading-relaxed mt-4 text-balance">
                    Recipes must earn their right to survive. Most should be killed early to protect commercial resources.
                </p>
            </div>

            <div className="relative">
                 {/* Visual Funnel Line */}
                 <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent -z-0 hidden lg:block" />
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {experimentationStages.map((stage, idx) => (
                        <div key={idx} className="group flex flex-col items-center text-center space-y-8 p-10 bg-graphite/10 border border-foreground/5 rounded-[2.5rem] hover:border-fuchsia-500/30 transition-all duration-500">
                             <div className="w-16 h-16 rounded-full bg-background border border-foreground/10 flex items-center justify-center relative overflow-hidden">
                                  <div className="absolute inset-0 bg-fuchsia-500/5 group-hover:bg-fuchsia-500/10 transition-colors duration-500" />
                                  <span className="text-xl font-serif text-foreground/80 group-hover:text-fuchsia-400 transition-colors duration-500">0{idx + 1}</span>
                             </div>

                             <div className="space-y-4">
                                  <h4 className="text-xl font-serif text-foreground italic">{stage.title}</h4>
                                  <div className="space-y-1">
                                       <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block">Gatekeeper</span>
                                       <p className="text-xs font-bold text-foreground/70">{stage.gatekeeper}</p>
                                  </div>
                             </div>

                             <div className="pt-6 border-t border-foreground/5 w-full space-y-4">
                                  <div>
                                       <span className="text-[9px] uppercase tracking-widest font-bold text-green-500/60 block mb-1">Pass Metric</span>
                                       <p className="text-[11px] font-light text-foreground/60 leading-relaxed italic">"{stage.successMetric}"</p>
                                  </div>
                                  <div>
                                       <span className="text-[9px] uppercase tracking-widest font-bold text-red-500/60 block mb-1">Fail Action</span>
                                       <p className="text-[11px] font-bold text-red-500/40 uppercase tracking-tighter">{stage.failureAction}</p>
                                  </div>
                             </div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};
