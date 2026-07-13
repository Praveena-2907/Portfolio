import { BadgeCheck } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./motion-primitives";
import { resume } from "@/data/resume";

export function Certifications() {
  if (!resume.certifications.length) return null;
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {resume.certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.08}>
            <div className="glass card-hover flex h-full items-start gap-4 rounded-2xl p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {cert.note && (
                  <span className="mt-3 inline-block rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-primary-foreground">
                    {cert.note}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
