import React from 'react';
import { ingredientTechnicalProfiles } from '../../../data/manufacturing';

export const IngredientBehaviorLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Technical Formulations</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">Ingredient Behavioral Matrix</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light leading-relaxed">
                    How ingredients react under extreme heat, high shear, and pressure determines the ultimate sensory experience of the product.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ingredientTechnicalProfiles.map(profile => (
                    <div key={profile.id} className="group relative p-8 bg-graphite/10 border border-foreground/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500">
                        {/* Thematic Glow */}
                        <div 
                            className="absolute -top-12 -right-12 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none"
                            style={{ backgroundColor: profile.themeColor }}
                        />
                        
                        <div className="relative z-10 space-y-6">
                            <span className="text-[9px] uppercase tracking-widest font-bold text-gold/60">{profile.category}</span>
                            
                            <div>
                                <h4 className="text-sm uppercase tracking-wider font-bold text-foreground/40 mb-3">Reaction Under Process</h4>
                                <p className="text-sm font-medium text-foreground/90 leading-relaxed">{profile.behavior}</p>
                            </div>

                            <div className="pt-4 border-t border-foreground/5">
                                <h4 className="text-[10px] uppercase tracking-widest font-bold text-red-500/40 mb-2">Production Risk</h4>
                                <p className="text-xs font-light text-foreground/50 leading-relaxed italic">"{profile.manufacturingRisk}"</p>
                            </div>

                            <div className="pt-4 border-t border-foreground/5">
                                <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-400/40 mb-2">Stability Logic</h4>
                                <p className="text-xs font-light text-foreground/50 leading-relaxed">{profile.stabilityLogic}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
