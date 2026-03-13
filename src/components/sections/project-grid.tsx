"use client";

import { ProjectCard } from "@/components/sections/project-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/lib/types";

type ProjectGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
};

export function ProjectGrid({ eyebrow, title, description, projects }: ProjectGridProps) {
  return (
    <Section id="work">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
