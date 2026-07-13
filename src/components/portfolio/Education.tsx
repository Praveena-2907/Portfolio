import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./motion-primitives";
import { resume } from "@/data/resume";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="My academic journey">
      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <div className="flex flex-col gap-6">
          {resume.education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[29px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-brand ring-4 ring-background" />
                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <GraduationCap className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-gradient">{edu.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
