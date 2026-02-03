import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-stone-200 bg-stone-50 py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-serif text-2xl font-bold tracking-tighter text-charcoal-900">
                            ARCHITECT
                        </Link>
                        <p className="mt-6 max-w-sm text-stone-600 text-sm leading-relaxed">
                            We design spaces that inspire and endure. Our approach combines timeless aesthetics with modern functionality, creating environments that elevate the human experience.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-charcoal-900 mb-6 uppercase tracking-widest text-xs">Explore</h4>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li><Link href="/projects" className="hover:text-charcoal-900 transition-colors">Projects</Link></li>
                            <li><Link href="/about" className="hover:text-charcoal-900 transition-colors">Studio</Link></li>
                            <li><Link href="/services" className="hover:text-charcoal-900 transition-colors">Services</Link></li>
                            <li><Link href="/process" className="hover:text-charcoal-900 transition-colors">Process</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-charcoal-900 mb-6 uppercase tracking-widest text-xs">Connect</h4>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li><a href="mailto:hello@architect.com" className="hover:text-charcoal-900 transition-colors">hello@architect.com</a></li>
                            <li><a href="tel:+15550000000" className="hover:text-charcoal-900 transition-colors">+1 (555) 000-0000</a></li>
                            <li><Link href="/contact" className="hover:text-charcoal-900 transition-colors">Book Consultation</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Architect Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-charcoal-900">Privacy</Link>
                        <Link href="#" className="hover:text-charcoal-900">Terms</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
