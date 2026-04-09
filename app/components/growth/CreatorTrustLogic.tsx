import React from 'react';

const trustSignals = [
    { title: 'The Indulgence Proof', logic: 'If the hook is "tastes like dessert", polished studio ads actively hurt conversion. The consumer assumes it is fake. You must use raw lo-fi UGC showing real humans reacting to the texture or blind taste-testing.' },
    { title: 'The Utility Proof', logic: 'If the hook is "Breakfast in 10 seconds", do not show it in a gym. Show it physically surviving a chaotic commute, a crowded laptop bag, or a crying child in the background.' },
    { title: 'The Performance Proof', logic: 'If the hook is "Zero Fillers", aesthetic lifestyle content creates cognitive dissonance. Trust is built through macro-panel close-ups, clinical ingredient breakdowns, and registered dietician endorsements.' },
];

export const CreatorTrustLogic: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                 <div className="md:w-1/3">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">Borrowed Trust</span>
                     <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">The Content Transfer</h2>
                     <p className="text-foreground/50 text-lg font-light leading-relaxed">
                         Growth in protein depends heavily on breaking the "chalky supplement" stigma. You cannot claim you are different; you must borrow trust from creators and contexts that prove it.
                     </p>
                 </div>

                 <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                     {trustSignals.map((signal, i) => (
                         <div key={i} className="bg-graphite/5 border border-foreground/5 p-8 rounded-xl opacity-90 hover:opacity-100 transition-opacity">
                             <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center mb-6">
                                <span className="w-3 h-3 bg-foreground/30 rounded-full" />
                             </div>
                             <h4 className="font-serif text-xl text-foreground mb-3">{signal.title}</h4>
                             <p className="text-sm font-light text-foreground/50 leading-relaxed pb-4">{signal.logic}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};
