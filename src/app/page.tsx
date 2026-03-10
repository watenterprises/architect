import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects, reviews } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
            alt="Hero Architecture"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <Container className="relative z-10 text-white">
          <FadeIn>
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white">
                Designing Spaces for <br />
                <span className="italic font-light">The Human Spirit</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-100 max-w-lg font-light leading-relaxed">
                We create timeless, sustainable, and inspiring environments that redefine the way you live and work.
              </p>
              <div className="pt-4 flex gap-4">
                <Button variant="primary" size="lg" href="/projects" className="bg-white text-charcoal-900 hover:bg-stone-200">
                  View Projects
                </Button>
                <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white/10 hover:border-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Featured Projects */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">Selected Works</h2>
                <h3 className="text-4xl font-serif text-charcoal-900">Featured Projects</h3>
              </div>
              <Button variant="link" href="/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.slice(0, 2).map((project, index) => (
              <FadeIn delay={index * 0.2} key={project.id}>
                <Link href={`/projects/${project.id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-stone-500">{project.category}</span>
                    <h4 className="text-2xl font-serif text-charcoal-900 group-hover:text-stone-600 transition-colors">{project.title}</h4>
                    <p className="text-stone-600">{project.location}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <FadeIn delay={0.2}>
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm group">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                    alt="Philosophy Room Interior"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-700 group-hover:bg-black/40" />
                </div>
              </FadeIn>
            </div>
            <div className="md:col-span-7 space-y-8">
              <FadeIn>
                <h2 className="text-sm font-bold tracking-widest uppercase text-stone-500">Our Philosophy</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
                  Architecture is not just about buildings. It means life.
                </h3>
                <p className="text-lg text-stone-600 leading-relaxed text-balance">
                  We believe that good design is invisible. It supports your daily rituals, enhances your well-being, and connects you to the natural world. Our studio approaches every project with a deep respect for context, material, and light.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 group text-charcoal-900 font-medium hover:text-stone-600 transition-colors">
                  Read our story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-stone-900 text-stone-100">
        <Container className="max-w-4xl text-center">
          <FadeIn>
            <Star className="w-8 h-8 mx-auto mb-8 text-beige-400 fill-current" />
            <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed mb-8">
              "{reviews[0].text}"
            </blockquote>
            <cite className="not-italic text-sm font-bold tracking-widest uppercase text-stone-400">
              — {reviews[0].name}, {reviews[0].role}
            </cite>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
