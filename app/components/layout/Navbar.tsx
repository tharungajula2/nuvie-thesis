'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '../../data/navigation';
import { CtaButton } from '../ui/CtaButton';

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-[100] border-b border-foreground/5 bg-background/60 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-serif tracking-tight font-semibold hover:text-gold transition-colors">
                    PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
                </Link>
                
                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-10">
                    {mainNavigation.map((item) => {
                        // Check exact match or path starts with (for /products/slug or /labs/flavor)
                        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                        
                        if (item.children) {
                            return (
                                <div key={item.name} className="relative group p-4 -m-4"> {/* Increased hover target area */}
                                    <span className={`text-[10px] uppercase tracking-[0.25em] font-bold cursor-pointer transition-all duration-300 ${isActive ? 'text-gold' : 'text-foreground/40 group-hover:text-gold'}`}>
                                        {item.name}
                                    </span>
                                    {/* Dropdown */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-[#050505] border border-foreground/10 rounded-xl shadow-2xl overflow-hidden py-2 backdrop-blur-xl">
                                            {item.children.map(child => {
                                                const childActive = pathname === child.href;
                                                return (
                                                    <Link 
                                                        key={child.name} 
                                                        href={child.href} 
                                                        className={`block px-6 py-3 text-[9px] uppercase tracking-[0.2em] font-bold transition-colors ${childActive ? 'text-gold bg-graphite/40' : 'text-foreground/40 hover:bg-graphite/40 hover:text-gold'}`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${isActive ? 'text-gold' : 'text-foreground/40 hover:text-gold'}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden lg:block">
                    <Link href="/strategy">
                        <CtaButton size="md" variant="outline" className="text-[10px] tracking-[0.2em] uppercase px-6">
                            Access Strategy Core
                        </CtaButton>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden text-foreground/70 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                        {mobileMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-20 bg-background border-t border-foreground/5 z-[90] overflow-y-auto">
                    <div className="flex flex-col p-6 space-y-2">
                        {mainNavigation.map((item) => (
                            <div key={item.name} className="py-2 border-b border-foreground/5">
                                {item.children ? (
                                    <div className="space-y-4 py-2">
                                        <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-foreground/40">{item.name}</span>
                                        <div className="flex flex-col space-y-4 pl-4 border-l border-foreground/10">
                                            {item.children.map(child => (
                                                <Link 
                                                    key={child.name} 
                                                    href={child.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`text-[10px] uppercase tracking-widest font-bold ${pathname === child.href ? 'text-gold' : 'text-foreground/60'}`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link 
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-[11px] uppercase tracking-[0.25em] font-bold block py-2 ${pathname === item.href ? 'text-gold' : 'text-foreground/80'}`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-8 pb-12">
                            <CtaButton size="lg" className="w-full text-[10px] tracking-[0.25em] uppercase">
                                Access System
                            </CtaButton>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
