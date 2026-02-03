import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";
import { Building, Armchair, Map, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap = {
    "Building": Building,
    "Armchair": Armchair,
    "Map": Map
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-stone-900 text-stone-100 pt-32 pb-16 md:pt-48 md:pb-24">
                <Container>
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8">
                            Our Expertise
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-stone-400 leading-relaxed">
                            Comprehensive design solutions tailored to your unique vision. We guide you through every stage, from initial concept to final handover.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Main Services */}
            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon as keyof typeof iconMap] || Building;
                            return (
                                <FadeIn key={service.title} delay={index * 0.1}>
                                    <div className="group space-y-6">
                                        <div className="w-16 h-16 bg-stone-100 flex items-center justify-center rounded-sm group-hover:bg-charcoal-900 transition-colors duration-500">
                                            <Icon className="w-8 h-8 text-charcoal-900 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                                        </div>
                                        <h3 className="text-2xl font-serif text-charcoal-900">{service.title}</h3>
                                        <p className="text-stone-600 leading-relaxed">{service.description}</p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* Turnkey Projects */}
            <Section className="bg-stone-50">
                <Container>
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2 space-y-8">
                            <FadeIn>
                                <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500">Holistic Approach</h2>
                                <h3 className="text-4xl font-serif text-charcoal-900">Turnkey Projects</h3>
                                <p className="text-lg text-stone-600 leading-relaxed">
                                    For clients seeking a seamless experience, we offer end-to-end project management. We handle everything: design, permitting, construction management, and interior styling.
                                </p>
                                <div className="space-y-4">
                                    {["Single point of responsibility", "Streamlined timeline", "Cost certainty", "Uncompromised quality control"].map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-stone-400" />
                                            <span className="text-charcoal-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button href="/contact" variant="primary" className="mt-4">Inquire About Turnkey</Button>
                            </FadeIn>
                        </div>
                        <div className="md:w-1/2 relative h-[500px] w-full bg-stone-200">
                            <FadeIn delay={0.2} className="h-full w-full">
                                {/* Abstract geometric composition or construction detail */}
                                <div className="absolute inset-4 border border-stone-400/30" />
                                <div className="absolute inset-0 flex items-center justify-center bg-stone-200 text-stone-400">
                                    <Building className="w-24 h-24 opacity-20" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
