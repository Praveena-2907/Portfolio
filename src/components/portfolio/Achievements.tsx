import { Trophy, HeartHandshake } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./motion-primitives";
import { resume } from "@/data/resume";

export function Achievements() {
  if (!resume.achievements.length && !resume.activities.length) return null;
  return (
    <Section id="achievements" eyebrow="Achievements" title="Achievements & activities">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-2xl p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Trophy className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {resume.achievements.map((a) => (
                <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass h-full rounded-2xl p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold">Extra-curricular</h3>
            </div>
            <ul className="space-y-3">
              {resume.activities.map((a) => (
                <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
