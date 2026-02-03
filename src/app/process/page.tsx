import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We begin by listening. We define the brief, understand the site, and explore the constraints and opportunities. This is the foundation of our partnership."
    },
    {
        number: "02",
        title: "Concept Design",
        description: "Translating ideas into form. We produce sketches, models, and initial layouts to visualize the potential of the space and refine the aesthetic direction."
    },
    {
        number: "03",
        title: "Design Development",
        description: "Refining the details. We select materials, integrate systems, and finalize the structural elements. The vision becomes a constructible reality."
    },
    {
        number: "04",
        title: "Construction Documentation",
        description: "Precision planning. We create comprehensive technical drawings and specifications to guide the build, ensuring every millimeter is accounted for."
    },
    {
        number: "05",
        title: "Construction Administration",
        description: "On-site oversight. We work closely with builders and craftsmen to ensure the execution matches the vision, solving problems as they arise."
    }
];

export default function ProcessPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-stone-50 pt-32 pb-16 md:pt-48 md:pb-24">
                <Container>
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 mb-8">
                            The Process
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed">
                            Architecture is a journey. Our structured approach ensures transparency, collaboration, and excellence at every step.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => (
                            <FadeIn key={step.number} delay={index * 0.1}>
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
                                    <div className="md:col-span-2">
                                        <span className="text-6xl font-serif text-stone-200 group-hover:text-charcoal-900 transition-colors duration-500">{step.number}</span>
                                    </div>
                                    <div className="md:col-span-10 border-t border-stone-200 pt-8">
                                        <h3 className="text-3xl font-serif text-charcoal-900 mb-4">{step.title}</h3>
                                        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">{step.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <FadeIn>
                            <h3 className="text-2xl font-serif text-charcoal-900 mb-6">Ready to begin your journey?</h3>
                            <Button href="/contact" variant="primary" size="lg">Start a Conversation</Button>
                        </FadeIn>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
