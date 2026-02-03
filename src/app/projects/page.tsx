import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-stone-50 pt-32 pb-16 md:pt-48 md:pb-24">
                <Container>
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 mb-8">
                            Selected Works
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed">
                            A curation of projects that embody our commitment to silence, space, and materiality.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            <section className="bg-white py-16 md:py-24">
                <Container>
                    <FadeIn delay={0.2}>
                        <ProjectGrid />
                    </FadeIn>
                </Container>
            </section>
        </div>
    );
}
