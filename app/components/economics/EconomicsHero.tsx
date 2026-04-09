import React from 'react';

export const EconomicsHero: React.FC = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center py-32 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* Harsh, instrument-like glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-red-900/[0.04] blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-[10px] font-mono font-bold text-red-500/80 px-2 py-0.5 border border-red-500/30 rounded bg-red-500/5">
                        Step 02
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-red-500/70 inline-block py-2 px-6 border border-red-500/20 rounded-full bg-red-500/5 backdrop-blur-md">
                        Operating System // Viability Lens
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
                    A good product can still <span className="italic text-red-500/80">fail</span> its economics.
                </h1>
                
                <div className="pt-8 max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed text-balance">
                        Premium protein brands often look healthy while bleeding underneath. 
                        Survival is determined by packaging burdens, channel margins, logistics drag, and discount fragility.
                    </p>
                </div>
            </div>
        </section>
    );
};
