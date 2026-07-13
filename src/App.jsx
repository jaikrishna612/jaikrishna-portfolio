import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Terminal,
  Cpu,
  Database,
  Boxes,
  ScanLine,
  GraduationCap,
  Download,
} from "lucide-react";
import jaikrishnaResume from "./files/Jaikrishna_Resume_portfolio.pdf"

/* ---------------------------------------------------------
   DATA — sourced from Jai Krishna's resume
--------------------------------------------------------- */
const PROFILE = {
  name: "Kothapally Jai Krishna Reddy",
  role: "Full Stack Developer",
  tagline:
    "Full-stack engineer with 2 years building production systems across React and Python — including AI-driven data extraction pipelines that turn unstructured documents into structured, trustworthy records.",
  location: "Hyderabad, IN",
  email: "jaikrishnareddy2002@gmail.com",
  phone: "+91-9121738303",
  github: "https://github.com/jaikrishna612",
  linkedin: "https://linkedin.com/in/jai-krishna-88ba28201",
  resume: jaikrishnaResume,
};

const EXPERIENCE = [
  {
    company: "Thinqor Solutions Pvt. Ltd.",
    role: "Software Engineer",
    period: "May 2024 — Present",
    location: "Hyderabad",
    system: "ThinqHire — Enterprise ATS",
    points: [
      "Built a LangChain-based AI agent that extracts structured candidate data from unstructured resumes, with a human-in-the-loop validation step before data is committed.",
      "Developed an LLM-driven pipeline that parses job descriptions into structured requirement records linked to the correct client, using prompt engineering to raise extraction accuracy.",
      "Designed RESTful APIs in Flask with JWT auth and role-based access control, integrating a React frontend across four distinct user roles.",
      "Cut average API response time from ~800ms to under 200ms by resolving a lazy-loading issue and adding targeted SQL indexing and query caching.",
      "Contributed to migrating the platform from single-tenant to secure multi-tenant architecture with strict data isolation across client organizations.",
      "Containerized services with Docker, deployed with Kubernetes, and worked Agile/Git with product and engineering stakeholders.",
    ],
  },
  {
    company: "Thinqor Solutions Pvt. Ltd.",
    role: "Software Engineer",
    period: "May 2024 — Present",
    location: "Hyderabad",
    system: "HRMS Portal — Internal HR Management",
    points: [
      "Built backend services in Flask and MySQL for an internal HR portal covering leave, payroll, and attendance.",
      "Optimized aggregation queries to improve report generation speed by 35% and reduce manual effort by roughly 50%.",
    ],
  },
];

const PROJECTS = [
  {
    id: "news",
    tag: "PERSONAL PROJECT",
    title: "Personalized News Aggregator",
    stack: ["Flask", "NLP", "BeautifulSoup", "TF-IDF"],
    description:
      "A Flask + NLP platform that scrapes multi-source articles and classifies them with TF-IDF, serving results through server-side pagination with sub-300ms API response times.",
    metric: "< 300ms",
    metricLabel: "API response",
  },
  {
    id: "chest",
    tag: "PERSONAL PROJECT",
    title: "Chest Disease Segmentation",
    stack: ["TensorFlow", "Keras", "UNet", "Medical Imaging"],
    description:
      "A deep-learning medical imaging pipeline for chest X-ray classification across COVID-19, pneumonia, and normal cases, producing interpretable overlay masks alongside each diagnosis.",
    metric: "98.6%",
    metricLabel: "accuracy",
    scanline: true,
  },
];

const SKILLS = [
  {
    group: "Frontend",
    icon: Boxes,
    items: ["React.js", "Redux", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3"],
  },
  {
    group: "Backend",
    icon: Terminal,
    items: ["Python", "Flask", "FastAPI", "REST APIs", "Microservices", "JWT / RBAC"],
  },
  {
    group: "Data & Pipelines",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Query Optimization", "Indexing"],
  },
  {
    group: "AI / LLMs",
    icon: Cpu,
    items: ["LangChain", "LLM Agents", "RAG", "Prompt Engineering", "Vector DBs"],
  },
];

const CERTS = [
  "AWS Certified Cloud Practitioner — In Progress (Exp. Jul 2026)",
  "C++ Programming: From Beginner to Beyond",
  "Smart India Hackathon (SIH) 2022 — Internal Round Cleared",
  "VNRVJIET Convergence Hackathon — Top 10 Finalist",
];

/* ---------------------------------------------------------
   PRIMITIVES
--------------------------------------------------------- */
function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-mint uppercase mb-4">
      <span className="h-px w-8 bg-mint/60" />
      {children}
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BracketFrame({ className = "" }) {
  const corner =
    "absolute w-4 h-4 border-mint/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300";
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}

/* ---------------------------------------------------------
   NAV
--------------------------------------------------------- */
function Nav() {
  const links = ["About", "Experience", "Projects", "Stack", "Contact"];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-void/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-ink">
          JK<span className="text-mint">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-mint transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/jaikrishna612/jaikrishna-portfolio"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-mint border border-mint/30 rounded-full px-4 py-1.5 hover:bg-mint/10 transition-colors"
        >
          View Code
        </a>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------
   HERO
--------------------------------------------------------- */
function Hero() {
  const [lines, setLines] = useState([]);
  const bootLines = [
    "> initializing profile...",
    "> role: full_stack_developer.exe",
    "> stack: react · flask · langchain · mysql",
    "> status: online",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, bootLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void bg-grid bg-grid px-5 sm:px-6"
    >
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)] bg-grid bg-grid opacity-40" />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint to-transparent shadow-glow"
        initial={{ top: "0%" }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-6xl mx-auto w-full pt-28 sm:pt-24">
        <div className="font-mono text-[11px] sm:text-xs text-mint/80 h-28 sm:h-24 mb-6 space-y-1 break-words">
          {lines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          <span className="inline-block w-2 h-3 bg-mint animate-blink align-middle" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-ink leading-[1.1] sm:leading-[1.05]"
        >
          Kothapally
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-violet">
            Jai Krishna Reddy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.7 }}
          className="mt-6 max-w-xl text-muted text-lg leading-relaxed"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.9 }}
          className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-mint text-void font-medium px-6 py-3.5 sm:py-3 rounded-full hover:shadow-glow transition-shadow"
          >
            View Projects <ChevronRight size={16} />
          </a>
          <a
            href={PROFILE.resume}
            download
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-violet/50 text-violet px-6 py-3.5 sm:py-3 rounded-full hover:bg-violet/10 transition-colors"
          >
            <Download size={16} /> Resume
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 sm:py-3 rounded-full hover:border-mint/60 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 sm:py-3 rounded-full hover:border-violet/60 transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-16 flex items-center gap-2 font-mono text-xs text-muted"
        >
          <MapPin size={14} className="text-mint" /> {PROFILE.location}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   ABOUT
--------------------------------------------------------- */
function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-14">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            Systems that turn
            <br /> unstructured input into
            <br /> <span className="text-mint">structured trust.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-muted text-lg leading-relaxed">
            Two years in production, mostly at the intersection of full-stack engineering and applied AI —
            building the pipelines that read resumes, job descriptions, and medical scans and turn them into
            something a system, or a person, can act on. Strong in REST API design, SQL databases, and
            containerized deployment, with a growing focus on applying LLMs to enterprise workflows.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 font-mono text-sm">
            <div className="flex items-center gap-3 text-ink">
              <GraduationCap size={18} className="text-violet shrink-0" />
              <div>
                <div className="text-ink">B.Tech, Information Technology</div>
                <div className="text-muted text-xs">VNR Vignana Jyothi IET · 2020–2024 · CGPA 8.44</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-ink">
              <GraduationCap size={18} className="text-violet shrink-0" />
              <div>
                <div className="text-ink">Intermediate (MPC)</div>
                <div className="text-muted text-xs">Sri Chaitanya IIT Academy · 97.10%</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   EXPERIENCE
--------------------------------------------------------- */
function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 px-5 sm:px-6 border-t border-white/5 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-14">
            Software Engineer @ Thinqor Solutions
          </h2>
        </Reveal>

        <div className="space-y-10">
          {EXPERIENCE.map((job, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-mint/40 transition-colors bg-void/40">
                <BracketFrame />
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                  <div>
                    <div className="font-mono text-xs text-violet uppercase tracking-widest mb-1">
                      {job.system}
                    </div>
                    <h3 className="font-display text-xl font-medium text-ink">{job.role}</h3>
                  </div>
                  <div className="font-mono text-xs text-muted">{job.period}</div>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted leading-relaxed">
                      <span className="text-mint mt-2 shrink-0">
                        <span className="block w-1.5 h-1.5 rounded-full bg-mint" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   PROJECTS
--------------------------------------------------------- */
function ProjectCard({ project, idx }) {
  return (
    <Reveal delay={idx * 0.15}>
      <div className="group relative border border-white/10 rounded-2xl overflow-hidden bg-void/40 hover:border-mint/40 transition-colors">
        <BracketFrame />

        {/* signature scan visual for the imaging project */}
        <div className="relative h-40 border-b border-white/10 overflow-hidden bg-gradient-to-br from-surface2 to-void flex items-center justify-center">
          {project.scanline ? (
            <>
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(79,242,196,0.25),transparent_60%)]" />
              <motion.div
                className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-mint/25 to-transparent"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
              <ScanLine className="text-mint/70" size={40} />
            </>
          ) : (
            <Terminal className="text-violet/60" size={40} />
          )}
        </div>

        <div className="p-5 sm:p-7">
          <div className="font-mono text-xs text-muted uppercase tracking-widest mb-2">{project.tag}</div>
          <h3 className="font-display text-xl font-medium text-ink mb-3">{project.title}</h3>
          <p className="text-muted leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] uppercase tracking-wide border border-white/10 rounded-full px-3 py-1 text-ink/80"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-end justify-between border-t border-white/10 pt-4">
            <div>
              <div className="font-display text-2xl text-mint">{project.metric}</div>
              <div className="font-mono text-[11px] text-muted uppercase tracking-widest">
                {project.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Eyebrow>Projects</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-14">
            Independent builds
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   SKILLS / STACK
--------------------------------------------------------- */
function Stack() {
  return (
    <section id="stack" className="relative py-20 sm:py-28 px-5 sm:px-6 border-t border-white/5 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Eyebrow>System Stack</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-14">
            What runs under the hood
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.group} delay={idx * 0.1}>
                <div className="group h-full border border-white/10 rounded-2xl p-6 hover:border-violet/40 transition-colors bg-void/40">
                  <Icon size={22} className="text-violet mb-4" />
                  <h3 className="font-display text-ink font-medium mb-4">{s.group}</h3>
                  <ul className="space-y-2 font-mono text-xs text-muted">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-mint/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="border border-white/10 rounded-2xl p-6 bg-void/40">
            <div className="font-mono text-xs text-mint uppercase tracking-widest mb-3">
              Certifications &amp; Achievements
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted text-sm">
              {CERTS.map((c) => (
                <div key={c} className="flex gap-2">
                  <span className="text-mint">›</span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   CONTACT / FOOTER
--------------------------------------------------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto">Contact</span>
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-6">
            Let's build something
            <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-violet">worth deploying.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted max-w-md mx-auto mb-10">
            Open to full-stack and AI engineering roles. Reach out directly or find the code on GitHub.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 px-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-mint text-void font-medium px-6 py-3.5 sm:py-3 rounded-full hover:shadow-glow transition-shadow"
            >
              <Mail size={16} /> {PROFILE.email}
            </a>
            <a
              href={PROFILE.resume}
              download
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-violet/50 text-violet px-6 py-3.5 sm:py-3 rounded-full hover:bg-violet/10 transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-mono text-xs text-muted px-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-white/15 px-5 py-3 sm:py-2.5 rounded-full hover:border-mint/60 hover:text-mint transition-colors"
            >
              <Github size={14} /> github.com/jaikrishna612/jaikrishna-portfolio
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-white/15 px-5 py-3 sm:py-2.5 rounded-full hover:border-violet/60 hover:text-violet transition-colors"
            >
              <Linkedin size={14} /> linkedin.com/in/jai-krishna-88ba28201
            </a>
            <span className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-white/15 px-5 py-3 sm:py-2.5 rounded-full">
              <Phone size={14} /> {PROFILE.phone}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted">
        <div>© {new Date().getFullYear()} {PROFILE.name}</div>
        <div>Built with React · Tailwind CSS · Framer Motion</div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   APP
--------------------------------------------------------- */
export default function App() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </div>
  );
}