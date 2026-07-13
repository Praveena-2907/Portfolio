import { GraduationCap, Sparkles, Users } from "lucide-react";
import { Section } from "./Section";
import { Reveal, Stagger, StaggerItem } from "./motion-primitives";
import { resume } from "@/data/resume";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A little about me"
      subtitle="A second-year Information Technology student focused on strengthening core computer science fundamentals while building practical, real-world projects."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="glass h-full rounded-2xl p-8">
            <p className="text-base leading-relaxed text-muted-foreground">{resume.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I enjoy turning ideas into working software — from designing data structures and
              algorithms to building full-stack applications. I'm continuously learning and looking
              for opportunities to grow as an engineer.
            </p>
          </div>
        </Reveal>

        <Stagger className="flex flex-col gap-6">
          {[
            { icon: GraduationCap, label: "B.Tech IT", value: "CGPA 8.55 / 10" },
            { icon: Sparkles, label: "Focus", value: "DSA · Full-Stack" },
            { icon: Users, label: "Beyond code", value: "Design & Community" },
          ].map((c) => (
            <StaggerItem key={c.label}>
              <div className="glass card-hover flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
