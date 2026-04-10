import React from 'react';
import { manufacturingRoadmapItems } from '../../../data/manufacturing';

export const ManufacturingRoadmap: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Educational Sequence</span>
                <h3 className="text-3xl md:text-5xl font-serif">A Production Masterclass</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {manufacturingRoadmapItems.map((item, idx) => (
                    <div key={item.id} className="relative group p-8 bg-graphite/5 border border-foreground/5 rounded-3xl hover:bg-graphite/10 transition-all duration-500">
                        <div className="absolute -top-6 left-8 bg-background border border-foreground/10 px-4 py-2 rounded-xl text-[10px] font-mono font-bold text-gold shadow-2xl">
                             Phase 0{idx + 1} // {item.level}
                        </div>
                        
                        <div className="mt-6 space-y-6">
                            <h4 className="text-2xl font-serif text-foreground/90">{item.title}</h4>
                            <p className="text-sm font-light text-foreground/50 leading-relaxed">{item.description}</p>
                            
                            <div className="pt-6 border-t border-foreground/5 bg-gradient-to-tr from-gold/[0.03] to-transparent p-4 rounded-xl">
                                <span className="text-[9px] uppercase tracking-widest font-bold text-gold/60 block mb-2">Key Learning Vector</span>
                                <p className="text-[11px] font-medium text-foreground/70 italic">"{item.keyLearning}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
