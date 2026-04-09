import React from 'react';

export const StrategyHero: React.FC = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center py-32 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                {/* Cinematic glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-gold/[0.03] blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-[10px] font-mono font-bold text-gold/80 px-2 py-0.5 border border-gold/30 rounded bg-gold/5">
                        Step 01
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold inline-block py-2 px-6 border border-gold/20 rounded-full bg-gold/5 backdrop-blur-md">
                        Operating System // Portfolio Control
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
                    Portfolio design is where protein brands either focus or <span className="italic text-foreground/50">fragment.</span>
                </h1>
                
                <div className="pt-8 max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed text-balance">
                        SKU count is not strategy; <strong className="text-foreground font-medium">role clarity is strategy</strong>. 
                        Every product must earn its place through occasion logic, repeat potential, and channel fit.
                    </p>
                </div>
            </div>
        </section>
    );
};
