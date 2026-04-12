import React from 'react';

export const QuickCommerceThesis: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border border-amber-900/10 bg-graphite/40 backdrop-blur-md rounded-[2.5rem] p-10 md:p-20 overflow-hidden group shadow-sm">
                {/* Tension Glows */}
                <div className="absolute top-0 right-0 w-full h-[500px] bg-amber-500/[0.04] blur-[100px] group-hover:bg-amber-500/[0.08] transition-colors duration-1000 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Channel Reality
                    </span>

                    <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                        Quick commerce is a <span className="italic text-accent">moment channel</span> before it is a brand channel.
                    </h3>

                    <p className="text-xl text-foreground/60 font-light max-w-3xl leading-relaxed mb-12">
                        People do not open 10-minute delivery apps to absorb a new brand story. They are usually trying to solve a need quickly. That changes what wins: obvious flavor cues, strong protein communication, and products that match the urgency of the moment.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-foreground/10 pt-12">
                        <div>
                            <h5 className="font-serif text-lg text-foreground mb-2">Thumbnail visibility</h5>
                            <p className="text-sm font-light text-foreground/50 leading-relaxed">
                                If “20g protein” and the flavor cue are not immediately legible, the user keeps scrolling. Visibility is the only prerequisite for trial.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-serif text-lg text-foreground mb-2">Moment fit</h5>
                            <p className="text-sm font-light text-foreground/50 leading-relaxed">
                                Quick commerce works best when the product solves an immediate situation: coffee, hunger, post-gym, or snack replacement.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-serif text-lg text-foreground mb-2">Trial vs repeat</h5>
                            <p className="text-sm font-light text-foreground/50 leading-relaxed">
                                Single-serve discovery can help, but durable economics require a path to repeat beyond platform dependency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
