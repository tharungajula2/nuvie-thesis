import React from 'react';
import { modules } from '../../data/modules';
import { ModulePreviewSurface } from './ModulePreviewSurface';
import { SectionHeader } from './SectionHeader';

export const SystemModules: React.FC = () => {
    return (
        <section className="py-32 md:py-48 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="mb-20">
                <SectionHeader 
                    alignment="left"
                    eyebrow="The Architecture"
                    title="Operating Systems"
                    subtitle="Now that you understand the moments, here are the systems that execute the strategy."
                    badge="Intelligence Previews"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                    <ModulePreviewSurface key={module.id} module={module} />
                ))}
            </div>
            
            <div className="mt-16 text-center text-foreground/30 text-xs uppercase tracking-widest font-bold">
                <p>System expansion blocks loading...</p>
            </div>
        </section>
    );
};
