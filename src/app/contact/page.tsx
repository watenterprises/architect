import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-charcoal-900 text-white pt-32 pb-16 md:pt-48 md:pb-24">
                <Container>
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8">
                            Contact Us
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-stone-400 leading-relaxed">
                            Let's discuss your vision. We are currently accepting new projects for 2025.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <FadeIn delay={0.1}>
                                    <h3 className="text-2xl font-serif text-charcoal-900 mb-6">Studio</h3>
                                    <ul className="space-y-6">
                                        <li className="flex gap-4 items-start">
                                            <MapPin className="w-6 h-6 text-charcoal-900 mt-1" />
                                            <span className="text-stone-600 text-lg">123 Design Avenue,<br />Creative District, NY 10012</span>
                                        </li>
                                        <li className="flex gap-4 items-center">
                                            <Mail className="w-6 h-6 text-charcoal-900" />
                                            <a href="mailto:hello@architect.com" className="text-stone-600 text-lg hover:text-charcoal-900 transition-colors">hello@architect.com</a>
                                        </li>
                                        <li className="flex gap-4 items-center">
                                            <Phone className="w-6 h-6 text-charcoal-900" />
                                            <a href="tel:+15550000000" className="text-stone-600 text-lg hover:text-charcoal-900 transition-colors">+1 (555) 000-0000</a>
                                        </li>
                                    </ul>
                                </FadeIn>
                            </div>

                            <FadeIn delay={0.2} className="h-full">
                                <div className="h-64 w-full bg-stone-100 relative grayscale rounded-sm overflow-hidden">
                                    {/* Map Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-stone-200">
                                        <span className="text-stone-500 font-bold tracking-widest uppercase">Google Map Placeholder</span>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Form */}
                        <div className="bg-stone-50 p-8 md:p-12 rounded-sm">
                            <FadeIn delay={0.3}>
                                <h3 className="text-2xl font-serif text-charcoal-900 mb-8">Send a Message</h3>
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-stone-500">Name</label>
                                        <input type="text" id="name" className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-charcoal-900 transition-colors" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-stone-500">Email</label>
                                        <input type="email" id="email" className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-charcoal-900 transition-colors" placeholder="your@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-stone-500">Message</label>
                                        <textarea id="message" rows={6} className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-charcoal-900 transition-colors" placeholder="Tell us about your project..." />
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full">Send Message</Button>
                                </form>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
