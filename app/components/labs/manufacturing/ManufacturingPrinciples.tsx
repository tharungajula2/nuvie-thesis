import React from 'react';

const principles = [
    { title: 'Ingredient Behavior', desc: 'Proteins are dynamic. They react to pH, salt, and heat. A formula that tastes good in a cold blender may coagulate in a 135°C UHT line.' },
    { title: 'Shear & Pressure', desc: 'Mouthfeel is a result of particle size. Homogenization at 2000-3000 PSI is what separates a gritty powder mix from a silk-smooth RTD shake.' },
    { title: 'Thermal Stress', desc: 'Heat sterilizes product for safety (shelf stability) but also "cooks" the flavor. Success is balancing safety with sensory preservation.' },
    { title: 'Filling Integrity', desc: 'The most dangerous part of the line. Oxygen headspace and seal quality determine whether your product lasts 2 weeks or 12 months.' }
];

export const ManufacturingPrinciples: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">First Principles</span>
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">The Foundations of Scale</h2>
                    <p className="text-foreground/50 text-lg font-light leading-relaxed">
                        Manufacturing is not just a logistics step—it is a chemical and mechanical validation of your brand's promise.
                    </p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {principles.map((p, i) => (
                        <div key={i} className="group p-8 bg-graphite/10 border border-foreground/5 rounded-2xl hover:border-blue-500/20 transition-all duration-300">
                            <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-blue-400 transition-colors">{p.title}</h4>
                            <p className="text-sm font-light text-foreground/60 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
