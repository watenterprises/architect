"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Commercial", "Interior"];

export function ProjectGrid() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <div className="space-y-12">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={cn(
                            "text-sm uppercase tracking-widest px-4 py-2 border transition-all duration-300",
                            filter === category
                                ? "border-charcoal-900 bg-charcoal-900 text-white"
                                : "border-stone-200 text-stone-500 hover:border-charcoal-900 hover:text-charcoal-900"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {filteredProjects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="group block">
                        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 mb-6">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>
                        <div className="flex justify-between items-baseline">
                            <div className="space-y-2">
                                <span className="text-xs font-bold tracking-widest uppercase text-stone-500">{project.category}</span>
                                <h3 className="text-2xl font-serif text-charcoal-900 group-hover:text-stone-600 transition-colors">{project.title}</h3>
                            </div>
                            <span className="text-sm text-stone-400 group-hover:text-charcoal-900 transition-colors">{project.year}</span>
                        </div>
                        <p className="mt-2 text-stone-600 line-clamp-2">{project.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
