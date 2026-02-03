import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { team } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-stone-100 pt-32 pb-16 md:pt-48 md:pb-24">
                <Container>
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 mb-8">
                            Cultivating <br />
                            <span className="italic text-stone-500">Silence & Space</span>
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed">
                            Founded in 2010, our studio operates at the intersection of art, architecture, and nature. We strip away the essential to reveal the essential.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Story & Philosophy */}
            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6 text-lg text-stone-600 leading-relaxed text-balance">
                            <FadeIn>
                                <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-4">Our Story</h2>
                                <p>
                                    We began with a simple premise: that the spaces we inhabit shape who we become. This belief drives us to create architecture that is not just visually striking, but deeply restorative.
                                </p>
                                <p>
                                    Our process is collaborative and rigorous. We listen deeply to the land and to our clients, seeking a harmony that feels inevitable. Every line drawn and every material chosen is a deliberate act of reduction, removing the noise to amplify the signal.
                                </p>
                            </FadeIn>
                        </div>
                        <div className="relative aspect-square md:aspect-[4/5] bg-stone-100">
                            <FadeIn delay={0.2}>
                                <Image
                                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200&auto=format&fit=crop"
                                    alt="Studio Workspace"
                                    fill
                                    className="object-cover"
                                />
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Values */}
            <Section className="bg-stone-900 text-stone-200">
                <Container>
                    <FadeIn>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-12">Core Values</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FadeIn delay={0.1}>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white">Timelessness</h3>
                                <p className="text-stone-400">We design for decades, not seasons. Our aesthetic is rooted in classical proportions and enduring materials that age with grace.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white">Sustainability</h3>
                                <p className="text-stone-400">Light, air, and thermal comfort are the primary building blocks. We prioritize passive design strategies to minimize ecological footprint.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white">Craftsmanship</h3>
                                <p className="text-stone-400">We honor the maker. From hand-troweled plaster to joinery details, we celebrate the human hand in the built environment.</p>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Team */}
            <Section className="bg-white">
                <Container>
                    <FadeIn>
                        <div className="mb-16">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-4">The Team</h2>
                            <h3 className="text-4xl font-serif text-charcoal-900">Meet the Architects</h3>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <FadeIn key={member.name} delay={index * 0.1}>
                                <div className="group">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                                        />
                                    </div>
                                    <h4 className="text-xl font-serif text-charcoal-900">{member.name}</h4>
                                    <p className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">{member.role}</p>
                                    <p className="text-sm text-stone-600">{member.bio}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
