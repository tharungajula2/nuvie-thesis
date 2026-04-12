import React from 'react';

export const HabitLoopEngine: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border border-foreground/10 bg-white/45 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-20 overflow-hidden text-center group">
                {/* Tension Glows - Returning to severe OS styling */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] blur-[120px] group-hover:bg-accent/[0.05] transition-colors duration-1000 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[120px] group-hover:bg-blue-500/[0.04] transition-colors duration-1000 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 border border-foreground/10 px-4 py-2 rounded-full mb-12 bg-background/50 backdrop-blur-md">
                        The Core Logic
                    </span>

                    <h3 className="text-4xl md:text-6xl font-serif text-balance leading-tight mb-8">
                        Awareness matters.<br/><span className="italic text-accent">Routine matters more.</span>
                    </h3>

                    <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl text-balance leading-relaxed mb-12">
                        Trial can be bought. Repeat has to be earned. A product becomes durable only when it fits a specific moment well enough to be reordered without persuasion.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                         <span className="text-xs uppercase tracking-widest font-bold px-4 py-2 border border-foreground/10 rounded bg-background/50 text-foreground/60">Daily Ritual</span>
                         <span className="text-xs uppercase tracking-widest font-bold px-4 py-2 border border-foreground/10 rounded bg-background/50 text-foreground/60">Afternoon Slump Link</span>
                         <span className="text-xs uppercase tracking-widest font-bold px-4 py-2 border border-foreground/10 rounded bg-background/50 text-foreground/60">Desk Drawer Loop</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
