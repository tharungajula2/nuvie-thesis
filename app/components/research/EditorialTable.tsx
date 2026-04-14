'use client';

import React from 'react';

interface EditorialTableProps {
  headers: string[];
  rows: string[][];
  footnote?: string;
  className?: string;
}

export const EditorialTable: React.FC<EditorialTableProps> = ({ 
  headers, 
  rows, 
  footnote,
  className = '' 
}) => {
  return (
    <div className={`my-12 ${className}`}>
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-foreground/10">
              {headers.map((header, i) => (
                <th key={i} className="py-4 px-4 text-[11px] uppercase tracking-widest font-bold text-foreground/40">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {rows.map((row, i) => (
              <tr key={i} className="group hover:bg-graphite/5 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="py-5 px-4 text-[15px] font-light leading-relaxed text-foreground/80">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p className="mt-4 text-[11px] text-foreground/30 italic font-light px-4">
          * {footnote}
        </p>
      )}
    </div>
  );
};
