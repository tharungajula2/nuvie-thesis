'use client';

import React from 'react';
import type { WorkbookChapter as ChapterType, StickyNote } from '../../types/index';

interface StickyNotesChapterProps {
  chapter: ChapterType;
}

export const StickyNotesChapter: React.FC<StickyNotesChapterProps> = ({ chapter }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Chapter header */}
      <header className="mb-16 pt-8 border-l border-amber-200 pl-8 md:pl-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-amber-600/60 italic">
            {chapter.eyebrow}
          </span>
          <span className="h-px w-12 bg-amber-200" />
          <span className="text-[10px] text-foreground/30 italic font-light tracking-widest uppercase">
            Internal Scratchpad
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1] text-balance tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-xl md:text-2xl text-foreground/50 font-light leading-relaxed italic max-w-3xl mb-8">
          "{chapter.summary}"
        </p>
        
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <p className="text-[11px] font-sans text-amber-800/60 uppercase tracking-widest font-medium italic">
            These are rough working notes. Not conclusions.
          </p>
        </div>
      </header>

      {/* Sticky Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {chapter.stickyNotes?.map((note) => (
          <div 
            key={note.id}
            className="group relative bg-[#fdfbf7] border border-amber-100/50 p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            {/* Status Tag */}
            <div className="absolute top-8 right-8">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-[9px] font-bold tracking-[0.2em] text-amber-700 uppercase">
                {note.status}
              </span>
            </div>

            {/* Note Content */}
            <div className="pt-2">
              <h4 className="text-xl font-serif mb-6 text-foreground/90 pr-12 leading-snug">
                {note.title}
              </h4>
              <div className="h-px w-12 bg-amber-200/50 mb-6" />
              <p className="text-lg text-foreground/60 font-light leading-relaxed font-sans">
                {note.body}
              </p>
            </div>

            {/* Aesthetic scratchpad lines / texture */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200/20 via-transparent to-amber-200/20" />
          </div>
        ))}
      </div>

      {/* Footer marker */}
      <div className="mt-24 pt-12 border-t border-amber-50 flex justify-center">
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-900/10 italic">
          --- End of Raw Observations ---
        </div>
      </div>
    </div>
  );
};
