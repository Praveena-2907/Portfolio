import { Linkedin, Github, Mail } from "lucide-react";
import { resume } from "@/data/resume";

export function Footer() {
  const socials = [
    { icon: Linkedin, href: resume.contact.linkedin.url, label: "LinkedIn" },
    { icon: Github, href: resume.contact.github.url, label: "GitHub" },
    { icon: Mail, href: `mailto:${resume.contact.email}`, label: "Email" },
  ];
  return (
    <footer className="border-t border-border/60 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {resume.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
