import React from 'react';
import { digestibilityProfiles } from '../../../data/trust';

export const DigestibilityComfortLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
            
            <div className="text-center mb-20 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400/60 inline-block mb-4">Somatic Expectation</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">Digestibility & Comfort</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    A beautiful wrapper cannot save a product that makes the user anxious about their stomach. Trust here requires medical-grade clarity without losing the premium aesthetic.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {digestibilityProfiles.map((profile, i) => (
                    <div key={i} className="bg-[#050608] border border-blue-900/20 p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                        
                        <h4 className="text-xl font-serif text-blue-100 mb-6">{profile.concern}</h4>
                        
                        <div className="space-y-6">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-blue-400/60 block mb-2">The Consumer Fear</span>
                                <p className="text-sm font-light text-blue-100/60 leading-relaxed italic border-l-2 border-blue-900/50 pl-3">
                                    {profile.consumerFear}
                                </p>
                            </div>
                            
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-green-400/60 block mb-2">Resolution Signal</span>
                                <p className="text-sm font-light text-blue-100/80 leading-relaxed">
                                    {profile.resolutionSignal}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-blue-900/30">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80 block mb-2">Failure Impact</span>
                                <p className="text-xs font-semibold text-red-400/80 leading-relaxed">
                                    {profile.failureImpact}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};
