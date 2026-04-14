'use client';

import React from 'react';

interface EditorialCalloutProps {
  title: string;
  body: string;
  highlight?: string;
  className?: string;
}

export const EditorialCallout: React.FC<EditorialCalloutProps> = ({ 
  title, 
  body, 
  highlight,
  className = '' 
}) => {
  return (
    <div className={`my-16 relative py-12 px-8 md:px-12 bg-graphite/5 rounded-3xl border border-foreground/5 overflow-hidden group ${className}`}>
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/40" />
      
      {highlight && (
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">
          {highlight}
        </span>
      )}
      
      <h3 className="text-2xl md:text-3xl font-serif mb-6 text-foreground leading-tight">
        {title}
      </h3>
      
      <div className="text-lg text-foreground/70 font-light leading-relaxed space-y-4 max-w-4xl">
        {body.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      
      {/* Background atmosphere */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-1000" />
    </div>
  );
};
