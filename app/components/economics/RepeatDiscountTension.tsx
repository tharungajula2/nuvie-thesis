import React from 'react';

export const RepeatDiscountTension: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border border-foreground/10 bg-graphite/5 rounded-[2.5rem] p-10 md:p-20 overflow-hidden text-center group">
                {/* Tension Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/[0.05] blur-[100px] group-hover:bg-red-500/[0.1] transition-colors duration-1000" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/[0.05] blur-[100px] group-hover:bg-gold/[0.1] transition-colors duration-1000" />
                
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 border border-foreground/10 px-4 py-2 rounded-full mb-12">
                        The Primary Thesis
                    </span>

                    <h3 className="text-4xl md:text-6xl font-serif text-balance leading-tight mb-8">
                        When repeat is weak, <span className="italic text-red-400">discounting</span> starts pretending to be growth.
                    </h3>

                    <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl text-balance leading-relaxed">
                        A brand cannot discount its way to loyalty in the premium protein space. Every 10% slashed off the MSRP to force a trial creates an artificial LTV curve that fractures the moment the discount is removed.
                    </p>
                </div>
            </div>
        </section>
    );
};
