'use client';

import React from 'react';

interface ChapterIndicatorProps {
  chapters: { id: string; eyebrow: string }[];
  activeIndex: number;
}

export const ChapterIndicator: React.FC<ChapterIndicatorProps> = ({ chapters, activeIndex }) => {
  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5 pointer-events-none">
      {chapters.map((chapter, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={chapter.id}
            className="flex items-center gap-4 transition-all duration-500"
          >
            {/* Label — visible only when active */}
            <span
              className="text-[9px] uppercase tracking-[0.3em] font-bold transition-all duration-500 whitespace-nowrap"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateX(0)' : 'translateX(10px)',
                color: 'var(--accent-strong)',
              }}
            >
              {chapter.eyebrow}
            </span>

            {/* Functional Marker — Pistachio */}
            <div
              className="rounded-full transition-all duration-700 flex-shrink-0"
              style={{
                width: isActive ? 12 : 5,
                height: 5,
                borderRadius: isActive ? '4px' : '50%',
                backgroundColor: isActive ? 'var(--accent)' : 'rgba(43, 26, 21, 0.15)',
                boxShadow: isActive ? '0 0 16px rgba(111, 134, 97, 0.2)' : 'none',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
