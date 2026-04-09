import React from 'react';

const fitData = [
    { format: 'RTD Shake', d2c: 'Poor (Heavy)', quickcom: 'Excellent (Impulse)', retail: 'Good (Chilled)', pantry: 'Moderate (Fridge space limit)' },
    { format: 'Coffee Hybrid', d2c: 'Good (Ritual)', quickcom: 'Excellent (Morning)', retail: 'Excellent (RTD aisle)', pantry: 'Excellent (Desk staple)' },
    { format: 'Extruded Bar', d2c: 'Excellent (Light)', quickcom: 'Moderate (Low basket size)', retail: 'Good (Till impulse)', pantry: 'Excellent (Box format)' }
];

export const FormatFitMatrix: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-16">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 inline-block mb-4">Architecture Matrix</span>
                 <h3 className="text-3xl md:text-5xl font-serif">Format × Channel Fit</h3>
                 <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                     A product format is a logistical constraint. Not every format can survive the unit economics of every channel.
                 </p>
            </div>

            <div className="overflow-x-auto border border-foreground/10 rounded-2xl bg-graphite/5 pb-4">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-foreground/10">
                            <th className="p-6 font-serif text-lg text-foreground/40 w-1/5">Product Format</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">D2C Subscription</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">Quick Commerce</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">Modern Retail</th>
                            <th className="p-6 text-[10px] uppercase tracking-widest text-foreground/40 w-1/5">Office Pantry</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-foreground/5">
                        {fitData.map((row, i) => (
                            <tr key={i} className="group hover:bg-graphite/20 transition-colors">
                                <td className="p-6 font-serif text-lg text-foreground group-hover:text-gold transition-colors">{row.format}</td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.d2c} /></td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.quickcom} /></td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.retail} /></td>
                                <td className="p-6 text-sm font-light"><FitSignal value={row.pantry} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

const FitSignal: React.FC<{ value: string }> = ({ value }) => {
    const isExcellent = value.includes('Excellent');
    const isPoor = value.includes('Poor');
    const isModerate = value.includes('Moderate');
    
    let colorClass = 'text-foreground/60';
    let dotClass = 'bg-foreground/20';
    if(isExcellent) { colorClass = 'text-green-500'; dotClass = 'bg-green-500'; }
    if(isModerate) { colorClass = 'text-yellow-500'; dotClass = 'bg-yellow-500'; }
    if(isPoor) { colorClass = 'text-red-500'; dotClass = 'bg-red-500'; }

    return (
        <span className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full ${dotClass} flex-shrink-0`} />
            <span className={colorClass}>{value}</span>
        </span>
    );
};
