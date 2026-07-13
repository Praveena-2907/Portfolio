import { motion } from "motion/react";
import { Code2, Braces, Globe, Database, Wrench } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./motion-primitives";
import { resume } from "@/data/resume";

const icons = [Code2, Braces, Globe, Database, Wrench];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      subtitle="A snapshot of the languages, frameworks, and tools I use to build software."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {resume.skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold">{group.category}</h3>
                </div>

                <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full rounded-full bg-gradient-brand"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
