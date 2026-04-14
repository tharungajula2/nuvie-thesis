'use client';

import React from 'react';

interface ImageSlotProps {
  description: string;
  imagePath?: string;
  label?: string;
  className?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({ 
  description, 
  imagePath,
  label = 'Image Placeholder', 
  className = '' 
}) => {
  return (
    <div className={`my-12 ${className}`}>
      <div className={`w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden ${!imagePath ? 'border border-dashed border-foreground/15 bg-graphite/5 flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-graphite/10 group' : ''}`}>
        {imagePath ? (
          <div className="relative w-full h-full group">
             <img 
               src={imagePath} 
               alt={description} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-foreground/60 shadow-xl border border-foreground/5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  {label}
                </span>
             </div>
          </div>
        ) : (
          <>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/20 mb-3 group-hover:text-accent/30 transition-colors">
              [ {label} ]
            </span>
            <span className="text-sm text-foreground/40 italic font-light max-w-md">
              {description}
            </span>
          </>
        )}
      </div>
      {imagePath && (
        <p className="mt-4 text-[11px] text-foreground/40 italic font-light px-2">
          {description}
        </p>
      )}
    </div>
  );
};
