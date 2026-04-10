import React from 'react';

const principles = [
    { title: 'Benchmark Filtering', desc: 'R&D begins by understanding what already works. Decompose the market leaders to find the formulation gaps and sensory benchmarks.' },
    { title: 'Hypothesis Discipline', desc: 'Never iterate without a question. "Does this taste better?" is a weak hypothesis. "Does 5% more fat mask the isolate chalkiness?" is a strategic one.' },
    { title: 'Sensory Objectivity', desc: 'The founder\'s palate is the biggest risk. Use blind panels and repeat-tasting cycles to validate whether a recipe actually builds a habit.' },
    { title: 'Manufacturability First', desc: 'A recipe that only works in a kitchen is a liability. R&D must bake in the constraints of homogenization and heat from day one.' }
];

export const RDPrinciples: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">Innovation Logic</span>
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">Disciplined Creation</h2>
                    <p className="text-foreground/50 text-lg font-light leading-relaxed">
                        Product innovation is a systems problem. The goal is not just a "good recipe," but a validated, repeatable, and scalable product architecture.
                    </p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {principles.map((p, i) => (
                        <div key={i} className="group p-8 bg-graphite/10 border border-foreground/5 rounded-2xl hover:border-fuchsia-500/20 transition-all duration-300">
                            <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-fuchsia-400 transition-colors">{p.title}</h4>
                            <p className="text-sm font-light text-foreground/60 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
