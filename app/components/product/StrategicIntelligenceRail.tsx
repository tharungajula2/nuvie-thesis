import React from 'react';
import { Product } from '../../types';

interface StrategicIntelligenceRailProps {
    product: Product;
}

export const StrategicIntelligenceRail: React.FC<StrategicIntelligenceRailProps> = ({ product }) => {
    return (
        <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto border-t border-foreground/5">
            
            {/* Section B: Product Thesis */}
            <div className="mb-24">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold/60 block mb-6">
                    Core Thesis
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-balance leading-relaxed">
                    {product.productThesis}
                </h2>
            </div>

            <div className="space-y-16">
                
                {/* Job to be Done & Occasion Frame */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-graphite/10 p-8 md:p-12 rounded-3xl border border-foreground/5">
                    <div>
                        <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/30 block mb-4">Consumer Objective</span>
                        <p className="text-xl font-serif italic text-foreground/80 leading-relaxed">
                            "{product.consumerJobToBeDone}"
                        </p>
                    </div>
                     <div>
                        <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/30 block mb-4">Target Occasion Frame</span>
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.accentColor }} />
                            <span className="text-xl font-serif text-foreground/90">{product.primaryOccasion}</span>
                        </div>
                    </div>
                </div>

                {/* Repeat Logic Matrix */}
                <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gold block mb-8 border-b border-foreground/5 pb-4">
                        Repeat Generation Logic
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {product.repeatTriggers.map((trigger, idx) => (
                            <div key={idx} className="p-6 bg-background border border-foreground/5 rounded-xl hover:border-gold/20 transition-colors">
                                <span className="text-[9px] uppercase tracking-wider text-foreground/20 font-bold block mb-4">Loop {idx + 1}</span>
                                <span className="text-sm text-foreground/80 font-medium">{trigger}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Channel & Portfolio Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                    <div className="space-y-6">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 block border-b border-foreground/5 pb-4">
                            Channel Edge
                        </span>
                        <div className="flex flex-wrap gap-2">
                           {product.channelFit.map(channel => (
                               <span key={channel} className="text-xs uppercase tracking-widest font-bold px-4 py-2 bg-foreground/5 rounded-md text-foreground/60">
                                   {channel}
                               </span>
                           ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 block border-b border-foreground/5 pb-4">
                            Portfolio Interaction
                        </span>
                         <p className="text-foreground/60 text-lg font-light leading-relaxed">
                             Operates strictly as the <strong className="text-foreground font-medium">{product.strategicRole}</strong> within the OS architecture.
                        </p>
                    </div>
                </div>

                {/* Section G: Operator Note */}
                <div className="mt-24 bg-gold/5 p-8 md:p-12 flex flex-col md:flex-row gap-8 rounded-3xl border border-gold/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--color-gold)">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                        </svg>
                    </div>
                    <div className="md:w-1/3 z-10">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold block mb-2">Internal Memo</span>
                        <h4 className="text-2xl font-serif text-foreground">Operator Note</h4>
                    </div>
                    <div className="md:w-2/3 z-10">
                        <p className="text-lg text-foreground/70 font-serif italic leading-relaxed text-balance">
                            {product.operatorNote}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
