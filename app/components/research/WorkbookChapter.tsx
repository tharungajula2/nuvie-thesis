'use client';

import React from 'react';
import { WorkbookChapter as ChapterType } from '../../data/research-wip-data';

interface WorkbookChapterProps {
  chapter: ChapterType;
  note: string;
  onNoteChange: (val: string) => void;
}

export const WorkbookChapter: React.FC<WorkbookChapterProps> = ({ 
  chapter, 
  note, 
  onNoteChange 
}) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Chapter header */}
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-8 bg-accent/30" />
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent/60 italic">{chapter.eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">{chapter.title}</h2>
        <p className="text-sm text-foreground/40 font-light leading-relaxed italic max-w-3xl">
          "{chapter.summary}"
        </p>
      </header>

      {/* Chapter blocks */}
      <div className="space-y-12">
        {chapter.blocks.map((block) => (
          <div 
            key={block.id} 
            className={`p-8 md:p-10 rounded-[2rem] border transition-all duration-500 hover:shadow-sm ${
              block.type === 'question' ? 'bg-background border-accent/20 border-l-4 border-l-accent' :
              block.type === 'hypothesis' ? 'bg-graphite/5 border-foreground/5 italic' :
              block.type === 'risk' ? 'bg-red-500/[0.02] border-red-500/10' :
              'bg-background border-foreground/5'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-[8px] uppercase tracking-[0.4em] font-bold px-3 py-1 rounded bg-background border ${
                block.type === 'question' ? 'text-accent border-accent/20' :
                block.type === 'hypothesis' ? 'text-accent border-accent/10' :
                block.type === 'risk' ? 'text-red-500 border-red-500/20' :
                'text-foreground/30 border-foreground/10'
              }`}>
                {block.type}
              </span>
              <h4 className="text-sm uppercase tracking-widest font-bold text-foreground/90">{block.title}</h4>
            </div>
            <p className="text-sm text-foreground/40 font-light leading-relaxed italic">
              {block.body}
            </p>
          </div>
        ))}

        {/* Notes workspace */}
        <div className="mt-20 pt-16 border-t border-foreground/5">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/20 block mb-2">Workspace</span>
            <h3 className="text-2xl font-serif">My Study Notes</h3>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-focus-within:opacity-100 transition duration-500 rounded-[2rem] blur" />
            <textarea
              value={note}
              onChange={(e) => onNoteChange(e.target.value)}
              placeholder={`Add findings or unresolved tensions for ${chapter.id}...`}
              className="relative w-full h-64 bg-background border border-foreground/20 rounded-[2rem] p-8 text-foreground/90 focus:border-accent/60 outline-none transition-all duration-300 resize-none font-light leading-relaxed text-lg placeholder:italic placeholder:opacity-30"
            />
          </div>
          <div className="mt-4 flex justify-between items-center text-[9px] uppercase tracking-widest font-bold text-foreground/15">
            <span>Locked to local storage.</span>
            <span>Study Session active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
