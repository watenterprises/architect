import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            {/* Hero Image */}
            <div className="relative h-[60vh] md:h-[80vh] w-full bg-stone-200">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <Container className="relative h-full flex items-end pb-12 md:pb-24">
                    <FadeIn>
                        <h1 className="text-5xl md:text-8xl font-serif text-white">{project.title}</h1>
                    </FadeIn>
                </Container>
            </div>

            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4 space-y-8 border-t border-charcoal-900 pt-8">
                            <FadeIn delay={0.2}>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="block text-stone-500 uppercase tracking-widest text-xs mb-1">Location</span>
                                        <span className="text-charcoal-900 font-medium">{project.location}</span>
                                    </div>
                                    <div>
                                        <span className="block text-stone-500 uppercase tracking-widest text-xs mb-1">Year</span>
                                        <span className="text-charcoal-900 font-medium">{project.year}</span>
                                    </div>
                                    <div>
                                        <span className="block text-stone-500 uppercase tracking-widest text-xs mb-1">Category</span>
                                        <span className="text-charcoal-900 font-medium">{project.category}</span>
                                    </div>
                                    <div>
                                        <span className="block text-stone-500 uppercase tracking-widest text-xs mb-1">Client</span>
                                        <span className="text-charcoal-900 font-medium">Private</span>
                                    </div>
                                </div>
                                <Button href="/contact" variant="primary" className="w-full mt-6">Start Your Project</Button>
                            </FadeIn>
                        </div>

                        <div className="md:col-span-8 space-y-6">
                            <FadeIn>
                                <h2 className="text-3xl font-serif text-charcoal-900">The Concept</h2>
                                <p className="text-lg text-stone-600 leading-relaxed">
                                    {project.description}
                                </p>
                                <p className="text-lg text-stone-600 leading-relaxed">
                                    More detailed description about the project would go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </FadeIn>

                            {/* Mock Gallery Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-12">
                                <div className="aspect-square bg-stone-100 relative">
                                    <FadeIn delay={0.2}>
                                        <Image src={project.image} alt="Detail 1" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
                                    </FadeIn>
                                </div>
                                <div className="aspect-square bg-stone-100 relative">
                                    <FadeIn delay={0.4}>
                                        <Image src={project.image} alt="Detail 2" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 pt-12 border-t border-stone-200">
                        <Link href="/projects" className="inline-flex items-center text-charcoal-900 hover:text-stone-500 transition-colors gap-2 font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back to Projects
                        </Link>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
