'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '../../data/navigation';
import { CtaButton } from '../ui/CtaButton';

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [strategyOpen, setStrategyOpen] = useState(false);

    const foundationItems = mainNavigation.filter(i => i.isFoundation);
    const stepItems = mainNavigation.filter(i => !i.isFoundation);

    return (
        <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-background/80 backdrop-blur-2xl">
            <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between relative">
                {/* LOGO - Forced Breathing Room */}
                <Link href="/" className="flex-shrink-0 text-lg md:text-xl font-serif tracking-tighter font-semibold hover:text-gold transition-all duration-500 mr-8 lg:mr-12">
                    PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
                </Link>
                
                {/* Desktop Nav - Clean & Restrained */}
                <div className="hidden lg:flex items-center space-x-8">
                    {/* FOUNDATION GROUP */}
                    <div className="flex items-center space-x-6 pr-6 border-r border-white/5">
                        {foundationItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className={`text-[8.5px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${isActive ? 'text-gold' : 'text-foreground/30 hover:text-gold'}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* STRATEGIC HUB - DROPDOWN */}
                    <div 
                        className="relative group py-2"
                        onMouseEnter={() => setStrategyOpen(true)}
                        onMouseLeave={() => setStrategyOpen(false)}
                    >
                        <button className={`flex items-center space-x-2 text-[8.5px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${stepItems.some(i => pathname === i.href) ? 'text-gold' : 'text-foreground/30 hover:text-gold'}`}>
                            <span>Strategy OS</span>
                            <svg className={`w-3 h-3 transition-transform duration-300 ${strategyOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full -left-4 w-64 pt-4 transition-all duration-300 ${strategyOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                            <div className="bg-[#0c0c0b] border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-3xl">
                                <div className="space-y-1">
                                    {stepItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link 
                                                key={item.name} 
                                                href={item.href} 
                                                className={`block px-4 py-3 text-[8px] uppercase tracking-[0.2em] font-bold rounded-lg transition-all ${isActive ? 'bg-gold/10 text-gold' : 'text-foreground/40 hover:bg-white/5 hover:text-gold'}`}
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right CTA */}
                <div className="hidden lg:block ml-auto">
                    <Link href="/strategy">
                        <CtaButton size="md" variant="outline" className="text-[8.5px] tracking-[0.25em] uppercase px-6 py-2.5 border-white/10 hover:border-gold/50">
                            Access System
                        </CtaButton>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden text-foreground/70 p-2 ml-auto"
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

            {/* Mobile Nav Overlay - Redesigned for Visibility */}
            <div className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-3xl transition-all duration-500 z-[90] ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-full pt-32 px-10 pb-20 justify-between">
                    <div className="space-y-6">
                        {/* Foundation Items */}
                        <div className="space-y-4 mb-4 pb-8 border-b border-white/5">
                            <span className="text-[10px] uppercase tracking-widest text-foreground/20 font-bold block mb-4">Foundation</span>
                            {foundationItems.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-[12px] uppercase tracking-[0.4em] font-bold block ${pathname === item.href ? 'text-gold' : 'text-foreground/60'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Step Items */}
                        <div className="space-y-4">
                            <span className="text-[10px] uppercase tracking-widest text-foreground/20 font-bold block mb-4">Strategic Sequence</span>
                            <div className="grid grid-cols-1 gap-4">
                                {stepItems.map((item) => (
                                    <Link 
                                        key={item.name} 
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-[11px] uppercase tracking-[0.3em] font-bold block ${pathname === item.href ? 'text-gold' : 'text-foreground/40'}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <CtaButton size="lg" className="w-full text-[10px] tracking-[0.3em] uppercase py-6">
                            Access Strategy Core
                        </CtaButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};
