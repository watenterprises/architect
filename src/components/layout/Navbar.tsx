"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Work", href: "/projects" },
    { name: "Studio", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Check if mobile orientation changes or resized to desktop, we auto close
            const handleResize = () => {
                if (window.innerWidth >= 768) setIsOpen(false);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
                <Container className="flex h-20 items-center justify-between">
                    <Link href="/" className="font-serif text-2xl font-bold tracking-tighter text-charcoal-900">
                        ARCHITECT
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" size="sm" href="/contact">
                            Get in Touch
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden p-2 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:ring-offset-2 rounded-sm"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </Container>
            </header>

            {/* Mobile Menu Fullscreen Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-white w-full h-[100dvh] flex flex-col transition-transform duration-300 ease-in-out md:hidden",
                    isOpen ? "translate-x-0" : "-translate-y-full opacity-0"
                )}
                aria-hidden={!isOpen}
            >
                <div className="flex-none h-20 w-full border-b border-stone-200 flex items-center bg-white">
                    <Container className="flex w-full items-center justify-between">
                        <Link 
                            href="/" 
                            onClick={() => setIsOpen(false)} 
                            className="font-serif text-2xl font-bold tracking-tighter text-charcoal-900"
                        >
                            ARCHITECT
                        </Link>
                        <button
                            className="p-2 -mr-2 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:ring-offset-2 rounded-sm"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </Container>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center p-6 overflow-y-auto bg-white">
                    <nav className="flex flex-col gap-8 items-center text-center w-full max-w-sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-serif text-charcoal-900 hover:text-stone-600 transition-colors w-full py-4 border-b border-stone-100"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8 w-full">
                            <Button 
                                variant="primary" 
                                size="lg" 
                                href="/contact" 
                                className="w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                Get in Touch
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
