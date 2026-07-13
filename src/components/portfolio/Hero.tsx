import { motion } from "motion/react";
import { Download, Mail, ArrowDown } from "lucide-react";
import { resume } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-5 pt-28 sm:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          {resume.title} · B.Tech IT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">{resume.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {resume.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={resume.resumeUrl}
            download
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105 sm:w-auto"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors hover:bg-primary/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
