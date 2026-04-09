import React from 'react';

const claims = [
    { claim: 'No Added Sugar', intent: 'Communicates that it is a healthy option without making it sound like diet food.', perception: 'Many casual consumers read this as "still contains sugar naturally." If they want a Keto-friendly option, they bounce.' },
    { claim: 'Sugar-Free', intent: 'Attracts strict dieters and keto-optimizers.', perception: 'Immediately triggers the "Chemical Sweetener Warning" in the brain. They assume it tastes like battery acid.' },
    { claim: 'Premium Isolate', intent: 'Proves high quality and justifies the high price point.', perception: 'If it doesn\'t explicitly say "Lactose-Free", many lactose-sensitive users still will not risk it.' },
];

export const ClaimsClaritySection: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                 <div className="md:w-1/3">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 inline-block mb-4">Semantic Risk</span>
                     <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Language vs Literacy</h2>
                     <p className="text-foreground/50 text-lg font-light leading-relaxed">
                         What you say is rarely what they read. Regulatory compliance does not equal consumer clarity.
                     </p>
                 </div>

                 <div className="md:w-2/3 grid grid-cols-1 gap-6">
                     {claims.map((item, i) => (
                         <div key={i} className="flex flex-col md:flex-row bg-graphite/5 border border-foreground/5 rounded-xl overflow-hidden group">
                             <div className="md:w-1/3 bg-background/50 border-r border-foreground/5 p-6 flex items-center justify-center">
                                 <span className="font-serif text-xl tracking-tight text-foreground group-hover:text-gold transition-colors">"{item.claim}"</span>
                             </div>
                             <div className="md:w-2/3 p-6 space-y-4">
                                 <div>
                                     <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">Brand Intent:</span>
                                     <p className="text-sm font-light text-foreground/60">{item.intent}</p>
                                 </div>
                                 <div className="border-t border-foreground/5 pt-4">
                                     <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block mb-1">Consumer Translation:</span>
                                     <p className="text-sm font-light text-foreground">{item.perception}</p>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};
