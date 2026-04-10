import React from 'react';
import { rdHypotheses } from '../../../data/rd';

export const BenchmarkingLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
                <div className="lg:w-1/2">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Strategic Auditing</span>
                    <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Deconstruction before <span className="italic text-gold">creation.</span></h3>
                    <p className="text-foreground/50 text-lg font-light leading-relaxed mb-10">
                        Strong R&D begins with a technical audit of the current market winners. By decomposing a benchmark shake—tasting it cold, tasting it warm, and mapping its sweetness drift—you define the "Sensory Gap" you intend to fill.
                    </p>
                    
                    <div className="p-10 bg-graphite/10 border border-foreground/5 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-[80px] rounded-full pointer-events-none" />
                        <h4 className="text-xl font-serif mb-8 text-foreground">The Benchmark Hypothesis</h4>
                        <div className="space-y-8">
                             {rdHypotheses.map(hypo => (
                                 <div key={hypo.id} className="space-y-3 relative z-10">
                                     <div className="flex justify-between items-center">
                                         <span className="text-[9px] uppercase tracking-widest font-bold text-fuchsia-400 opacity-60">Hypothesis // {hypo.status}</span>
                                         <div className={`w-2 h-2 rounded-full ${hypo.status === 'Validated' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-foreground/10'}`} />
                                     </div>
                                     <p className="text-sm font-medium text-foreground/90">{hypo.question}</p>
                                     <p className="text-xs text-foreground/40 font-light leading-relaxed italic">Benchmark: {hypo.benchmarkContext}</p>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 lg:pt-0">
                    <div className="p-8 bg-background border border-foreground/5 rounded-2xl space-y-4 hover:border-gold/20 transition-all duration-500">
                         <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold text-xs font-bold">01</div>
                         <h4 className="text-lg font-serif">Decompose</h4>
                         <p className="text-xs text-foreground/40 leading-relaxed">Map the benchmark's flavor payload, sweetness curve, and texture thickness under room temperature vs cold.</p>
                    </div>
                    <div className="p-8 bg-background border border-foreground/5 rounded-2xl space-y-4 hover:border-gold/20 transition-all duration-500">
                         <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold text-xs font-bold">02</div>
                         <h4 className="text-lg font-serif">Isolate Faults</h4>
                         <p className="text-xs text-foreground/40 leading-relaxed">Identify the chemical aftertaste, graininess, or sweetness fatigue that kills their repeat rate.</p>
                    </div>
                    <div className="p-8 bg-background border border-foreground/5 rounded-2xl space-y-4 hover:border-gold/20 transition-all duration-500">
                         <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold text-xs font-bold">03</div>
                         <h4 className="text-lg font-serif">Fix the Gap</h4>
                         <p className="text-xs text-foreground/40 leading-relaxed">Design your ingredient system (protein + fats + stabilizers) to resolve the identified faults.</p>
                    </div>
                    <div className="p-8 bg-background border border-foreground/5 rounded-2xl space-y-4 hover:border-gold/20 transition-all duration-500">
                         <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold text-xs font-bold">04</div>
                         <h4 className="text-lg font-serif">Validate Blind</h4>
                         <p className="text-xs text-foreground/40 leading-relaxed">Test the side-by-side. If the consumer cannot clearly pick your version, the R&D has failed.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
