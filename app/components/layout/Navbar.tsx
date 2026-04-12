'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '../../data/navigation';
import { CtaButton } from '../ui/CtaButton';

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* ─── Top Navigation Bar — Cream Frosted Glass ─── */}
            <nav className="fixed top-0 w-full z-[100] border-b border-foreground/8" style={{ backgroundColor: 'rgba(245, 236, 215, 0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between relative">
                    {/* LOGO */}
                    <Link href="/" className="flex-shrink-0 text-lg md:text-xl font-serif tracking-tighter font-semibold hover:text-accent transition-all duration-500 mr-8 lg:mr-12">
                        NUVIE<span className="text-accent ml-1 italic font-light">THESIS</span>
                    </Link>
                    
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-12">
                        <div className="flex items-center space-x-8">
                            {mainNavigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link 
                                        key={item.name} 
                                        href={item.href} 
                                        className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${isActive ? 'text-accent-strong underline decoration-accent/30 underline-offset-8' : 'text-foreground/40 hover:text-accent'}`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right CTA */}
                    <div className="hidden lg:block ml-auto">
                        <Link href="/how-i-can-help">
                            <CtaButton size="md" variant="outline">
                                Work With Me
                            </CtaButton>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className="lg:hidden text-foreground/70 p-2 ml-auto"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav-panel"
                        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            {mobileMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 8h16M4 16h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* ─── Mobile Nav: Backdrop ─── */}
            <div
                className={`lg:hidden fixed inset-0 z-[150] transition-opacity duration-400 ${
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                style={{ backgroundColor: 'rgba(44, 24, 16, 0.25)' }}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            {/* ─── Mobile Nav: Panel — Cream Opaque ─── */}
            <div
                id="mobile-nav-panel"
                role="dialog"
                aria-label="Navigation menu"
                aria-modal="true"
                className={`lg:hidden fixed top-[72px] inset-x-0 bottom-0 z-[200] transition-all duration-500 ease-out ${
                    mobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
                style={{ backgroundColor: 'rgba(245, 236, 215, 0.98)', paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}
            >
                {/* Scrollable content container */}
                <div className="flex flex-col h-full overflow-y-auto overscroll-contain">
                    <div className="flex-1 px-8 pt-10 pb-6">
                        <div className="space-y-6">
                            {mainNavigation.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`text-[10px] uppercase tracking-[0.3em] font-bold block transition-colors duration-300 ${
                                        pathname === item.href ? 'text-accent' : 'text-foreground/50 active:text-accent'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="px-8 py-6 border-t border-foreground/8">
                        <Link href="/how-i-can-help" onClick={closeMobileMenu}>
                            <CtaButton size="lg" className="w-full">
                                Work With Me
                            </CtaButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
