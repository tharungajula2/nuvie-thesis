import React from 'react';

const failures = [
    { title: 'The Indulgence Churn', condition: 'A sweet-craving seeker is acquired via a glossy chocolate-pouring ad, but the product has a distinct whey aftertaste.', result: 'Instant Churn. The product broke the core promise. They will cancel the subscription immediately.' },
    { title: 'The Ritual Mismatch', condition: 'A busy professional is sold a "morning coffee replacement", but the powder clumps and requires a severe shaker ball workout to dissolve.', result: 'Friction Churn. The ritual was too hard to execute while tired. They revert to Starbucks in 3 days.' },
    { title: 'The Archetype Confusion', condition: 'Running a "muscle optimization" ad pushing the Wah Vanilla into a female demographic seeking low-calorie satiation.', result: 'Acquisition Failure. The user fundamentally does not align with the identity being projected.' },
];

export const FailureStateBreakdown: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-500/60 inline-block mb-4">Behavioral Tension</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">Where Growth Breaks</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    Growth fractures when the message writes a check the product experience cannot cash.
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
