import React from 'react';

const channels = [
    { name: 'D2C Single Unit', risk: 'Unviable', desc: 'Shipping a heavy liquid unit individually destroys the margin. Only used for extreme top-of-funnel discovery or paid trialing.' },
    { name: 'Quick Commerce', risk: 'High Pressure', desc: 'Provides unbeatable immediacy and impulse capture, but the platform takes massive margin. Only sustainable if it leads to D2C subscription conversion later.' },
    { name: 'D2C Subscription Frame', risk: 'Sustainable', desc: 'The holy grail of protein economics. The high AOV (Average Order Value) absorbs the shipping penalty, generating actual bottom-line cash flow.' },
    { name: 'Physical Retail Adjacency', risk: 'Variable', desc: 'Required for brand credibility. Superb discovery mechanism, but requires complex distribution networks that squeeze the middle margin.' }
];

export const ChannelMarginPressure: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
             <div className="flex flex-col md:flex-row gap-16 items-center">
                 <div className="md:w-1/2 space-y-6">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-500/80 inline-block mb-2">Margin Geography</span>
                     <h2 className="text-3xl md:text-5xl font-serif text-foreground">The Channel Squeeze</h2>
                     <p className="text-foreground/50 text-lg font-light leading-relaxed">
                         Where you sell matters as much as what you sell. The same SKU can be wildly profitable in a D2C monthly bundle, and a devastating loss-leader when ordered individually on an impulse 10-minute delivery app.
                     </p>
                 </div>

                 <div className="md:w-1/2 w-full space-y-4">
                     {channels.map((ch, i) => (
                         <div key={i} className="bg-graphite/10 border border-foreground/5 p-6 rounded-xl flex flex-col md:flex-row md:items-center gap-6 group hover:border-foreground/20 transition-colors">
                             <div className="w-32 shrink-0">
                                <span className={`text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm border ${ch.risk === 'Unviable' ? 'bg-red-500/10 text-red-500 border-red-500/20' : ch.risk === 'High Pressure' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : ch.risk === 'Variable' ? 'bg-foreground/10 text-foreground/60 border-foreground/20' : 'bg-green-500/10 text-green-500 border-green-500/20'}`}>
                                    {ch.risk}
                                </span>
                             </div>
                             <div>
                                 <h5 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors">{ch.name}</h5>
                                 <p className="text-sm font-light text-foreground/50 leading-relaxed">{ch.desc}</p>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};
