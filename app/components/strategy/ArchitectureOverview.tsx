import React from 'react';

const roles = [
    {
        title: 'Hero SKU',
        description: 'The primary acquisition wedge. High visibility, high trial potential, but carries high expectation. Often occasion-led (e.g., Morning Coffee).',
        badgeColor: 'border-gold text-gold bg-gold/5'
    },
    {
        title: 'Repeat Pillar',
        description: 'The foundation of the LTV model. High familiarity, low fatigue. Usually a staple format integrated into daily household routines.',
        badgeColor: 'border-blue-500/50 text-blue-400 bg-blue-500/5'
    },
    {
        title: 'Support Wedge',
        description: 'Designed for specific logistical use-cases (e.g., travel, desk drawer). Captures lost consumption moments where core formats fail.',
        badgeColor: 'border-green-500/50 text-green-400 bg-green-500/5'
    },
    {
        title: 'Indulgence Variant',
        description: 'Pulls volume from confectionery by optimizing for immediate sensory reward and texture. Often acts as a trial-driver for the broader ecosystem.',
        badgeColor: 'border-red-500/50 text-red-500 bg-red-500/5'
    }
];

export const ArchitectureOverview: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col md:flex-row gap-16">
                
                <div className="md:w-1/3 space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block">
                        Portfolio Classifications
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                        The 4 Structural Pillars
                    </h2>
                    <p className="text-foreground/50 text-lg font-light leading-relaxed">
                        A disciplined portfolio is not a random collection of flavors. It is an engineered system where every SKU serves a distinct strategic purpose. If a new launch cannot be cleanly classified, it is likely bloat.
                    </p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {roles.map((role) => (
                        <div key={role.title} className="p-8 bg-graphite/10 border border-foreground/5 rounded-2xl hover:bg-graphite/20 transition-colors">
                            <span className={`px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold border mb-6 inline-block ${role.badgeColor}`}>
                                {role.title}
                            </span>
                            <p className="text-foreground/70 leading-relaxed text-sm">
                                {role.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
