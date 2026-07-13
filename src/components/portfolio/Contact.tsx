import { useState, type FormEvent } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./motion-primitives";
import { resume } from "@/data/resume";

const details = [
  { icon: Mail, label: "Email", value: resume.contact.email, href: `mailto:${resume.contact.email}` },
  { icon: Phone, label: "Phone", value: resume.contact.phone, href: `tel:${resume.contact.phone}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: resume.contact.linkedin.label,
    href: resume.contact.linkedin.url,
  },
  {
    icon: Github,
    label: "GitHub",
    value: resume.contact.github.label,
    href: resume.contact.github.url,
  },
  { icon: MapPin, label: "Location", value: resume.contact.location, href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      subtitle="Have an opportunity or just want to say hi? Feel free to reach out."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass flex h-full flex-col gap-3 rounded-2xl p-7">
            {details.map((d) => {
              const content = (
                <div className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-primary/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{d.label}</p>
                    <p className="truncate text-sm font-medium">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={d.label}>{content}</div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="glass flex h-full flex-col gap-4 rounded-2xl p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </Field>
            </div>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-input bg-secondary/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              />
            </Field>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message ready
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
            {sent && (
              <p className="text-center text-xs text-muted-foreground">
                Thanks! This is a demo form — please reach out via email for now.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
