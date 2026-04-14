'use client';

import React, { useEffect, useRef } from 'react';
import { WorkbookChapter as ChapterType, EditorialContentBlock } from '../../types';
import { ImageSlot } from './ImageSlot';
import { EditorialTable } from './EditorialTable';
import { EditorialCallout } from './EditorialCallout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EditorialChapterProps {
  chapter: ChapterType;
  note: string;
  onNoteChange: (val: string) => void;
}

export const EditorialChapter: React.FC<EditorialChapterProps> = ({ 
  chapter, 
  note, 
  onNoteChange 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in sections on scroll
      const sections = containerRef.current?.querySelectorAll('.editorial-section');
      sections?.forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderBlock = (block: EditorialContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p 
            key={index} 
            className={`text-xl md:text-2xl font-light leading-relaxed mb-8 text-foreground/80 text-balance 
              ${block.italic ? 'italic' : ''} 
              ${block.bold ? 'font-medium' : ''}
              ${block.variant === 'muted' ? 'text-foreground/40 text-lg md:text-xl' : ''}
              ${block.variant === 'accented' ? 'border-l-4 border-accent/30 pl-8 md:pl-10 text-foreground/90 italic' : ''}
              ${block.variant === 'insight' ? 'text-accent font-medium italic' : ''}
            `}
          >
            {block.text}
          </p>
        );
      
      case 'sub-section':
        return (
          <div key={index} className="mt-16 mb-8 group">
            <h4 className="text-2xl md:text-3xl font-serif mb-4 text-foreground/90 group-hover:text-accent transition-colors duration-500">
              {block.title}
            </h4>
            {block.body && (
              <p className="text-lg text-foreground/60 font-light leading-relaxed mb-6 italic">
                {block.body}
              </p>
            )}
          </div>
        );

      case 'list':
        return (
          <div key={index} className="my-8 pl-6 md:pl-10 space-y-4">
            {block.items.map((item, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <span className="text-accent/40 font-serif text-lg mt-0.5">
                  {block.listType === 'numbered' ? `${i + 1}.` : '—'}
                </span>
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/75 group-hover:text-foreground transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        );

      case 'comparison':
        return (
          <div key={index} className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {block.entries.map((entry, i) => (
              <div key={i} className="py-8 border-t border-foreground/5">
                <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4 block">
                  {entry.title}
                </h5>
                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        );

      case 'image-slot':
        return (
          <ImageSlot 
            key={index}
            description={block.description}
            label={block.label}
            imagePath={block.imagePath}
          />
        );

      case 'callout':
        return (
          <EditorialCallout 
            key={index}
            title={block.title}
            body={block.body}
            highlight={block.highlight}
          />
        );

      case 'table':
        return (
          <EditorialTable 
            key={index}
            headers={block.headers}
            rows={block.rows}
            footnote={block.footnote}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="editorial-root max-w-5xl mx-auto">
      {/* Chapter header */}
      <header className="mb-24 pt-8 border-l border-accent/20 pl-8 md:pl-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent italic">
            Module {chapter.id.split('-')[0]}
          </span>
          <span className="h-px w-12 bg-accent/20" />
          <span className="text-[10px] text-foreground/30 italic font-light tracking-widest uppercase">
            Live study. Incomplete by design.
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 leading-[1] text-balance tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-2xl md:text-3xl text-foreground/40 font-light leading-relaxed italic max-w-3xl">
          "{chapter.summary}"
        </p>
      </header>

      {/* Hero Image (if provided in chapter) */}
      {chapter.imagePlaceholder && (
        <ImageSlot 
          description={chapter.imagePlaceholder.description}
          label={chapter.imagePlaceholder.label}
          imagePath={chapter.imagePlaceholder.imagePath}
          className="mb-32"
        />
      )}

      {/* Content sections */}
      <div className="space-y-32">
        {chapter.sections?.map((section) => (
          <section 
            key={section.id} 
            id={section.anchorId}
            className="editorial-section relative"
          >
            {/* Section number/indicator */}
            {section.title && (
              <div className="mb-16">
                <h3 className="text-4xl md:text-5xl font-serif border-b border-foreground/5 pb-8 mb-4">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="text-xl text-foreground/40 italic font-light">
                    {section.subtitle}
                  </p>
                )}
              </div>
            )}
            
            <div className="editorial-content">
              {section.content.map((block, i) => renderBlock(block, i))}
            </div>
          </section>
        ))}
      </div>

      {/* Notes workspace (REMARKS) - Keeping the existing persistence logic but styled editorially */}
      <div className="mt-48 pt-32 border-t border-foreground/10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-accent/40 text-[11px] uppercase tracking-[0.5em] font-bold block mb-4 italic">The Builder's Log</span>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Internal Remarks</h3>
          <p className="text-lg text-foreground/40 font-light leading-relaxed">
            Record findings, unresolved tensions, or growth hypotheses for this module. This workspace persists locally.
          </p>
        </div>
        
        <div className="relative group max-w-4xl mx-auto">
           <div className="absolute inset-0 bg-accent/2 blur-[80px] rounded-full pointer-events-none group-focus-within:bg-accent/5 transition-colors duration-700" />
           <textarea
             value={note}
             onChange={(e) => onNoteChange(e.target.value)}
             placeholder="Add your notes here..."
             className="relative w-full h-[400px] bg-graphite/5 border border-foreground/5 rounded-[3rem] p-12 text-foreground/90 focus:border-accent/20 focus:ring-0 outline-none transition-all duration-500 resize-none font-light leading-relaxed text-2xl placeholder:italic placeholder:opacity-20"
           />
        </div>
        
        <div className="mt-8 flex justify-center items-center text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/20 italic">
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Persistence Active</span>
            <span className="opacity-30">•</span>
            <span>Module-{chapter.id.split('-')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
