import React from 'react';

const frameworks = [
    { title: 'Trust Transferability', point: 'Can the trust you built in Product A map perfectly to Product B? If you make a great protein shake, the consumer trusts you to make a great coffee. They do NOT trust you to make a great savory bag of chips.' },
    { title: 'Format Capital Expenditure', point: 'Changing formats (from liquid to baked goods, or powder to extruded bars) means spinning up entirely new supply chains. Are the margins of the new category worth the immediate cash drain?' },
    { title: 'Cannibalization Risk', point: 'Does the new product acquire a new customer, or does it simply convince your existing customer to buy a lower-margin item instead of their usual high-margin subscription?' },
    { title: 'Occasion Extension', point: 'The strongest adjacencies solve a different time-of-day problem for the identical archetype. They drink your shake at 8 AM. What do they eat at 3 PM?' }
];

export const AdjacencyFramework: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                 
                 <div className="md:w-1/3 sticky top-32">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-600/60 inline-block mb-4">
                         Structural Logic
                     </span>
                     <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6 mt-2">
                         The Adjacency Filter
                     </h2>
                     <p className="text-foreground/50 text-lg font-light leading-relaxed">
                         Founders often confuse "interesting products" with "expandable businesses." Use this filter to kill ideas before they kill the P&L.
                     </p>
                 </div>

                 <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                     {frameworks.map((block, i) => (
                         <div key={i} className="group p-8 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-graphite/10 to-transparent border border-foreground/5 hover:border-teal-900/30 rounded-2xl transition-all duration-300 relative overflow-hidden">
                             <div className="text-[10px] uppercase tracking-widest text-teal-600/30 font-bold mb-6 italic">
                                 Principle 0{i + 1}
                             </div>
                             <h4 className="text-xl font-serif text-foreground mb-4 group-hover:text-teal-400/80 transition-colors">{block.title}</h4>
                             <p className="text-sm font-light text-foreground/60 leading-relaxed">
                                 {block.point}
                             </p>
                         </div>
                     ))}
                 </div>

             </div>
        </section>
    );
};
