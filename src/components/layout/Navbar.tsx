"use client";

import Link from "next/link";
import { useState } from "react";
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

    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <Container className="flex h-20 items-center justify-between">
                <Link href="/" className="font-serif text-2xl font-bold tracking-tighter text-charcoal-900 z-50">
                    ARCHITECT
                </Link>
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
                <button
                    className="md:hidden z-50 p-2 text-charcoal-900"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 top-0 z-40 bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="flex flex-col gap-8 items-center text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif text-charcoal-900 hover:text-stone-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="lg" href="/contact" className="mt-4" onClick={() => setIsOpen(false)}>
                        Get in Touch
                    </Button>
                </nav>
            </div>
        </header>
    );
}
