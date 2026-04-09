import React from 'react';

const failures = [
    { title: 'The E-Commerce Black Hole', condition: 'Using a hyper-minimalist, gorgeous matte beige label on an RTD format.', result: 'The product looks stunning in hand, but on a digital checkout screen, it looks like a generic unbranded test bottle. Conversion plummets.' },
    { title: 'The Health-Taste Paradox', condition: 'Plastering the bottle with "0g Carb, 0g Sugar, 0g Fat".', result: 'The brain instantly assumes it tastes horrible. You have sacrificed the indulgence archetype entirely to win a small fraction of keto dieters.' },
    { title: 'The Gym-Bro Alienation', condition: 'Using aggressive metallic fonts and words like "HARDCORE" or "MASS" on a product format meant for Office Pantries.', result: 'Instant rejection by the casual professional. The product is deemed "not for me."' },
];

export const TrustBreakdown: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-500/60 inline-block mb-4">Aesthetic Tension</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">Where Trust Fractures</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    Design choices that win awards often fail at the register.
                </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
                {failures.map((issue, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-graphite/5 border border-red-500/10 rounded-2xl relative group">
                        <div className="w-1.5 h-full absolute left-0 top-0 bg-red-800/40 rounded-l-2xl group-hover:bg-red-500/80 transition-colors" />
                        
                        <div className="md:w-1/3">
                            <h4 className="font-serif text-lg text-foreground mb-2">{issue.title}</h4>
                            <span className="text-[9px] uppercase tracking-widest text-red-500/80 font-bold">Failure State</span>
                        </div>
                        
                        <div className="md:w-2/3 space-y-4">
                            <div>
                                <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">Trigger Condition:</span>
                                <p className="text-sm font-light text-foreground/70">{issue.condition}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block mb-1">Behavioral Result:</span>
                                <p className="text-sm font-medium text-red-400/80">{issue.result}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
