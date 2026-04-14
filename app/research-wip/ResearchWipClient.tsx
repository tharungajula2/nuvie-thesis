'use client';

import React, { useState, useEffect } from 'react';
import { researchWipData } from '../data/research-wip-data';
import { WorkbookTableOfContents } from '../components/research/WorkbookTableOfContents';
import { WorkbookChapter as StudyChapter } from '../components/research/WorkbookChapter';
import { EditorialChapter } from '../components/research/EditorialChapter';

export default function ResearchWipClient() {
  const [activeChapterId, setActiveChapterId] = useState(researchWipData[0].id);
  const [userNotes, setUserNotes] = useState<Record<string, string>>({});
  const [isMounted, setIsMounted] = useState(false);

  // Persistence: Notes
  useEffect(() => {
    setIsMounted(true);
    const savedNotes = localStorage.getItem('nuvie_research_notes');
    if (savedNotes) {
      try {
        setUserNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error('Failed to parse notes', e);
      }
    }
  }, []);

  const updateNote = (chapterId: string, note: string) => {
    const newNotes = { ...userNotes, [chapterId]: note };
    setUserNotes(newNotes);
    localStorage.setItem('nuvie_research_notes', JSON.stringify(newNotes));
  };

  if (!isMounted) return null;

  const activeChapter = researchWipData.find(c => c.id === activeChapterId) || researchWipData[0];

  return (
    <div className="min-h-screen bg-background pt-24 lg:pt-28">
      {/* Workbook Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* TOC - Left (Desktop Sidebar) */}
          <aside className="lg:w-1/4 lg:sticky lg:top-32 lg:h-[calc(100vh-160px)] z-10">
            <WorkbookTableOfContents 
              chapters={researchWipData} 
              activeId={activeChapterId} 
              onSelect={setActiveChapterId}
            />
          </aside>

          {/* Content - Right */}
          <main className="lg:w-3/4 pb-32">
            {activeChapter.type === 'editorial' ? (
              <EditorialChapter 
                chapter={activeChapter} 
                note={userNotes[activeChapter.id] || ''}
                onNoteChange={(val) => updateNote(activeChapter.id, val)}
              />
            ) : (
              <StudyChapter 
                chapter={activeChapter} 
                note={userNotes[activeChapter.id] || ''}
                onNoteChange={(val) => updateNote(activeChapter.id, val)}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
