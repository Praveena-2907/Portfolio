import { motion } from "motion/react";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./motion-primitives";
import { resume } from "@/data/resume";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="Selected projects spanning full-stack development, algorithms, and AI-assisted problem solving."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {resume.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="glass group relative h-full overflow-hidden rounded-2xl p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <FolderGit2 className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <h3 className="text-xl font-semibold">{project.name}</h3>
              {project.subtitle && (
                <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
              )}

              <ul className="mt-4 space-y-2">
                {project.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Currently building more projects — check back soon.
        </p>
      </Reveal>
    </Section>
  );
}
