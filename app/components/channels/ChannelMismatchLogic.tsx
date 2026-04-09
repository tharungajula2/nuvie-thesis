import React from 'react';

const mismatches = [
    { title: 'Premium Discovery in Utility Channels', context: 'Placing a highly-stylized, new protein flavor next to generic milk in an office fridge.', failure: 'Nobody pays the premium price in an environment where they expect utility. The product expires.' },
    { title: 'Bulk Liquid RTD in Quick Commerce', context: 'Listing a 12-pack of shakes on an impulse delivery app.', failure: 'The heavy weight actively deters impulse couriers, and the high cart value breaks the instant-gratification psychology.' },
    { title: 'Single-Serve D2C Marketing', context: 'Running heavy Instagram ads pushing a user to a website to buy one single protein bar.', failure: 'The friction of shipping costs + the massive CPA makes the transaction mathematically impossible from day one.' },
];

export const ChannelMismatchLogic: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-500/60 inline-block mb-4">Structural Failures</span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">The Geometry of Mismatch</h2>
                <p className="mt-4 text-foreground/50 text-lg font-light max-w-2xl mx-auto">
                    A great product in the wrong channel does not just underperform—it actively destroys brand equity by training the consumer to ignore it.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mismatches.map((issue, i) => (
                    <div key={i} className="bg-graphite/5 border border-red-500/10 p-8 rounded-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent rounded-t-2xl" />
                        <h4 className="text-xl font-serif text-foreground mb-4">{issue.title}</h4>
                        <div className="mb-6">
                            <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mb-1">The Setup:</span>
                            <p className="text-sm font-light text-foreground/60">{issue.context}</p>
                        </div>
                        <div>
                            <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block mb-1">The Failure:</span>
                            <p className="text-sm font-light text-red-500/70">{issue.failure}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
