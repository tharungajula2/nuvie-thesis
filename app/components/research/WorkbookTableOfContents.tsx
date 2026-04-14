'use client';

import React, { useState } from 'react';
import { WorkbookChapter } from '../../data/research-wip-data';

interface WorkbookTableOfContentsProps {
  chapters: WorkbookChapter[];
  activeId: string;
  onSelect: (id: string) => void;
  onLock: () => void;
}

export const WorkbookTableOfContents: React.FC<WorkbookTableOfContentsProps> = ({ 
  chapters, 
  activeId, 
  onSelect,
  onLock
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleSelect = (id: string) => {
    onSelect(id);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Mobile Drawer Trigger (Sticky at bottom for accessibility) */}
      <div className="lg:hidden fixed bottom-8 left-6 right-6 z-[60]">
        <button
          onClick={toggleDrawer}
          className="w-full bg-espresso text-cream py-4 rounded-full shadow-2xl flex items-center justify-center space-x-3 border border-cream/10 active:scale-95 transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Contents</span>
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      <div 
        className={`lg:hidden fixed inset-0 z-[70] transition-all duration-500 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-espresso/60 backdrop-blur-sm" onClick={toggleDrawer} />
        <div 
          className={`absolute inset-x-0 bottom-0 bg-background rounded-t-[3rem] p-8 pb-12 transition-transform duration-500 max-h-[85vh] overflow-y-auto ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="w-12 h-1 bg-foreground/10 rounded-full mx-auto mb-8" />
          <nav className="space-y-2">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="space-y-1">
              <button
                onClick={() => handleSelect(chapter.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${activeId === chapter.id ? 'bg-graphite/10 text-accent font-medium' : 'text-foreground/40'}`}
              >
                <span className="text-xs uppercase tracking-widest block mb-1 opacity-70 italic">{chapter.eyebrow}</span>
                <span className="text-xl font-serif">{chapter.title}</span>
              </button>
              
              {/* Sub-navigation for Editorial Sections (Mobile) */}
              {activeId === chapter.id && chapter.sections && (
                <div className="pl-6 space-y-3 mt-2 mb-6 border-l border-foreground/5 ml-4">
                  {chapter.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.anchorId}`}
                      onClick={() => setIsDrawerOpen(false)}
                      className="block text-sm text-foreground/40 hover:text-accent transition-colors py-1"
                    >
                      {section.tocLabel || section.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <button
          onClick={onLock}
          className="w-full mt-10 p-5 rounded-2xl border border-foreground/10 text-[9px] uppercase tracking-[0.4em] font-bold text-foreground/30 hover:text-red-500/60 transition-colors"
        >
          Lock Archive
        </button>
      </div>
    </div>

    {/* Desktop Sidebar TOC */}
    <div className="hidden lg:flex flex-col h-full bg-graphite/5 rounded-[2.5rem] border border-foreground/5 p-8 relative overflow-hidden">
      <div className="mb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40 block mb-2">Workbook</span>
        <h3 className="text-2xl font-serif">Table of Contents</h3>
      </div>

      <nav className="space-y-1 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="mb-2">
            <button
              onClick={() => onSelect(chapter.id)}
              className={`w-full text-left px-5 py-3 rounded-xl transition-all duration-300 group border ${activeId === chapter.id ? 'bg-background border-accent/20 text-accent font-semibold shadow-sm' : 'bg-transparent border-transparent hover:bg-background/50 text-foreground/40 hover:text-foreground'}`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-mono transition-colors ${activeId === chapter.id ? 'text-accent' : 'text-foreground/40'}`}>
                  {chapters.indexOf(chapter) < 10 ? `0${chapters.indexOf(chapter)}` : chapters.indexOf(chapter)}
                </span>
                <span className={`text-base tracking-tight transition-all ${activeId === chapter.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                  {chapter.title}
                </span>
              </div>
            </button>

            {/* Sub-navigation for Editorial Sections (Desktop) */}
            {activeId === chapter.id && chapter.sections && (
              <div className="mt-3 ml-12 pl-4 border-l border-foreground/5 space-y-2 animate-in fade-in slide-in-from-left-2 duration-500">
                {chapter.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.anchorId}`}
                    className="block text-[13px] font-sans text-foreground/40 hover:text-accent hover:underline decoration-accent/30 underline-offset-4 transition-all py-1"
                  >
                    {section.tocLabel || section.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

        <div className="mt-8 pt-6 border-t border-foreground/5">
          <button
            onClick={onLock}
            className="w-full text-left px-5 py-2 text-[8px] uppercase tracking-[0.4em] font-bold text-foreground/40 hover:text-red-500/80 transition-colors flex items-center gap-3"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Lock Archive
          </button>
        </div>
      </div>
    </>
  );
};
