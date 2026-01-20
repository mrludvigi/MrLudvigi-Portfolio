"use client";

import Image from "next/image";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";

/* -----------------------
   Types + Data
------------------------ */
type Project = {
  title: string;
  desc: string;
  tags: string[];
  live: string; // external url or "#contact"
  details: string; // anchor on page
  image?: string; // "/projects/tichu.jpg"
  video?: string; // "/projects/demo.mp4"
};

const PROJECTS: Project[] = [
  {
    title: "tichu.ge",
    desc: "WordPress redesign + performance & stability optimization.",
    tags: ["WordPress", "Performance", "SEO"],
    live: "https://tichu.ge",
    details: "#case-studies",
    image: "/projects/tichu.jpg",
  },
  {
    title: "portal.weaedu.ge",
    desc: "Educational dashboard with quizzes, leaderboards, progress tracking.",
    tags: ["React", "PHP", "MySQL"],
    live: "https://portal.weaedu.ge",
    details: "#case-studies",
    image: "/projects/portal.jpg",
  },
  {
    title: "WEA Official Site",
    desc: "Institutional website with dynamic content management and program pages.",
    tags: ["Full-Stack", "CMS", "UX"],
    live: "https://weaedu.ge",
    details: "#case-studies",
    image: "/projects/wea.jpg",
  },
  {
    title: "Academy Platform",
    desc: "Gamified learning platform: lessons, quizzes, resources, points & leaderboard.",
    tags: ["React", "Vue", "Tailwind"],
    live: "#contact",
    details: "#case-studies",
    image: "/projects/academy-platform.jpg",
  },
  {
    title: "FilmBox UI Concept",
    desc: "Streaming UI concept with dark UX, recommendations, filters, and profile screen.",
    tags: ["UI", "React", "Figma"],
    live: "#contact",
    details: "#case-studies",
    image: "/projects/filmbox.jpg",
  },
  {
    title: "Fintech Landing UI",
    desc: "SaaS landing concept with pricing, testimonials, dashboard preview and conversion structure.",
    tags: ["React", "Landing", "UI"],
    live: "#contact",
    details: "#case-studies",
    image: "/projects/fintech.jpg",
  },
];

export default function Home() {
  const courseUrl = "https://example.com/course"; // ჩაანაცვლე

  const projects = useMemo(() => PROJECTS, []);
  const [active, setActive] = useState<Project | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // hydration-safe year (avoid mismatch)
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  // esc closes any modal
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActive(null);
        setMobileNavOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // lock body scroll if any modal open
  useLockBodyScroll(Boolean(active || mobileNavOpen));

  return (
    <main className="min-h-screen bg-grid text-slate-100">
      {/* Header */}
      <Header
        courseUrl={courseUrl}
        onOpenMobileNav={() => setMobileNavOpen(true)}
      />

      {/* Mobile nav modal */}
      <MobileNavModal open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Hero */}
      <section className="container-max pb-10 pt-10 sm:pt-14 md:pb-16 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <PillStatus />

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Senior Full-Stack Web Developer{" "}
              <span className="block text-slate-300/90 md:inline">
                & Program Director
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              I build fast, scalable web platforms using React, Vue, WordPress and modern backend tools — with a strong
              focus on performance, UX and maintainability.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="#work">View selected work</PrimaryButton>
              <SecondaryButton href="#contact">Contact</SecondaryButton>
              <GhostButton
                href="https://www.linkedin.com/in/mrludvigi"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </GhostButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-300">
              {["React", "Vue", "WordPress", "Node.js", "PHP", "MySQL", "Performance", "Mentoring"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MiniCard title="Speed & SEO" desc="Core Web Vitals focused" />
              <MiniCard title="Scalable systems" desc="Clean architecture" />
              <MiniCard title="Education" desc="Mentoring & leadership" />
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-slate-800/25 to-slate-700/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/30 p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-slate-700/60">
                <Image
                  src="/profile.jpg"
                  alt="Ludvigi Khukhunaishvili"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs text-slate-400">Tbilisi, Georgia</p>
                <p className="text-xs text-slate-400">React • Vue • WordPress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container-max pb-6">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard label="Projects shipped" value="60+" hint="Websites, dashboards, portals" />
          <MetricCard label="Students trained" value="200+" hint="Digital literacy & mentoring" />
          <MetricCard label="Performance-first" value="Core" hint="Speed, SEO, maintainability" />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container-max py-10 sm:py-14 md:py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Tap any project to open a premium preview in a modal (optimized for mobile & desktop).
            </p>
          </div>

          <GhostButton href="#contact" className="hidden md:inline-flex">
            Request a quote
          </GhostButton>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container-max py-10 sm:py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">About</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              I’m a Full-Stack Web Developer and Program Director focused on building modern, high-performance websites
              and educational platforms. I help teams transform slow or hard-to-manage systems into clean, scalable
              products — optimized for UX, speed, and maintainability.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold text-slate-200">What clients get</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Clean architecture and maintainable code</li>
                <li>• Speed and SEO improvements that move the needle</li>
                <li>• Production-ready delivery with clear communication</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6">
            <h3 className="text-sm font-semibold text-slate-200">What I focus on</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Frontend architecture (React / Vue)</li>
              <li>• Performance, SEO & scalability</li>
              <li>• WordPress at scale (security + speed)</li>
              <li>• Dashboards, portals, LMS solutions</li>
              <li>• Mentorship & technical leadership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience  */}
      <section id="experience" className="container-max py-10 sm:py-14 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Experience</h2>
        <p className="mt-2 text-sm text-slate-400">
          Leadership, delivery, and real-world systems — across education and production environments.
        </p>

        <div className="mt-8 space-y-6">
          <TimelineItem
            title="Program Director & Mentor — Junior Frontend Bootcamp (React)"
            org="WEA — World Education Academy · Full-time · Baghdati Municipality, Georgia (Hybrid)"
            time="Apr 2025 — Present"
            bullets={[
              "Designed and led a 13-week training program for junior frontend developers.",
              "Translated national curriculum standards into a dynamic bootcamp format.",
              "Built an educational platform with quizzes, leaderboards, and resource libraries.",
              "Mentored students via modern web technologies and real projects.",
            ]}
          />
          <TimelineItem
            title="Full Stack Developer"
            org="WEA — World Education Academy · Full-time"
            time="Jun 2024 — Present"
            bullets={[
              "Built and maintained WEA’s official website with modular development and dynamic content workflows.",
              "Designed responsive UI aligned with brand and educational mission.",
              "Integrated backend systems and databases for news, programs, gallery, and contact.",
              "Optimized performance and scalability for future growth.",
            ]}
          />
          <TimelineItem
            title="Information Technology Specialist"
            org="WEA — World Education Academy · Full-time"
            time="Jun 2024 — Sep 2025"
            bullets={[
              "Delivered Digital Literacy training to 200+ students (90% completion rate).",
              "Implemented live/recorded teaching workflows improving learning quality by ~30%.",
              "Managed IT infrastructure: networks, surveillance, and hardware.",
              "Aligned technical operations with academic objectives.",
            ]}
          />
          <TimelineItem
            title="Full Stack Developer (Retraining Program)"
            org="Novatori · Tbilisi, Georgia (Hybrid)"
            time="Oct 2024 — Present"
            bullets={[
              "Completed full-stack retraining using JavaScript, React, Node.js, MySQL, and Express.",
              "Built real projects with Git, REST APIs, and responsive UI practices.",
              "Strengthened frontend/backend integration and deployment workflows.",
            ]}
          />
          <TimelineItem
            title="IT Specialist"
            org="NNLE Erosi Manjgaladze · Samtredia, Georgia (Hybrid)"
            time="Aug 2017 — Present"
            bullets={[
              "Led digital transformation and launched the institution’s official website.",
              "Built Excel automation tools for finance and reporting.",
              "Maintained internal networks and provided full-cycle technical support & staff training.",
            ]}
          />
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="container-max py-10 sm:py-14 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Case Studies</h2>
        <p className="mt-2 text-sm text-slate-400">
          Outcome-driven summaries — expand each one later with screenshots, metrics, and process.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <CaseCard
            title="tichu.ge — Performance & Redesign"
            outcome="Stability improved, near-instant feel, cleaner UX, easier maintenance"
            points={[
              "Conducted a full technical audit: bottlenecks, outdated plugins, design issues.",
              "Removed unnecessary plugins/themes and improved security posture.",
              "Rebuilt broken layouts with clean responsive HTML/CSS fixes.",
            ]}
          />
          <CaseCard
            title="WEA — Academy Official Website"
            outcome="Modern, scalable institutional site with dynamic programs & content workflow"
            points={[
              "Built program pages, publishing workflow for news/updates, gallery and contact sections.",
              "Implemented structured content and maintainable UI blocks.",
              "Optimized cross-device UX and performance for future growth.",
            ]}
          />
          <CaseCard
            title="Academy Platform — Gamified Learning Portal"
            outcome="Higher engagement through gamification and clear progress visibility"
            points={[
              "Lessons, resources and presentations for structured learning.",
              "Quizzes + assignments grant points; leaderboard shows ranking and progress.",
              "Designed for motivation and consistent learning habits.",
            ]}
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container-max py-10 sm:py-14 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <SkillCard title="Frontend" items={["React", "Vue", "JavaScript", "TypeScript", "Tailwind"]} />
          <SkillCard title="Backend / CMS" items={["Node.js", "PHP", "MySQL", "WordPress", "REST APIs"]} />
          <SkillCard title="Delivery" items={["Performance", "SEO", "UX/UI", "Agile", "Mentoring"]} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-max py-10 sm:py-14 md:py-20">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/30 p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Contact</h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            If you need a reliable developer or a technical mentor for your product, team or platform — let’s talk.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Custom websites & dashboards</li>
            <li>• WordPress optimization (speed, SEO, security)</li>
            <li>• Educational platforms + mentoring</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="mailto:Mr.ludvigikhukhunaishvili@gmail.com">Email me</PrimaryButton>
            <GhostButton href="https://www.linkedin.com/in/mrludvigi" target="_blank" rel="noreferrer">
              LinkedIn
            </GhostButton>
          </div>
        </div>

        <footer className="py-10 text-center text-xs text-slate-500">
          © {year} Ludvigi Khukhunaishvili. All rights reserved.
        </footer>
      </section>

      {/* Project Modal (premium + mobile-safe buttons) */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}

/* -----------------------
   Header + Mobile Nav
------------------------ */

function Header({
  courseUrl,
  onOpenMobileNav,
}: {
  courseUrl: string;
  onOpenMobileNav: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-slate-700/60">
            <Image
              src="/profile.jpg"
              alt="Ludvigi Khukhunaishvili"
              fill
              className="object-cover"
              priority={false}
              sizes="36px"
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold">Ludvigi Khukhunaishvili</div>
            <div className="text-xs text-slate-400">Senior Full-Stack Web Developer</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Case Studies", "#case-studies"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} className="hover:text-white" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile menu */}
          <button
            type="button"
            onClick={onOpenMobileNav}
            className="inline-flex items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/30 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/60 lg:hidden"
            aria-label="Open navigation"
          >
            ☰
          </button>

          <GhostButton href="#contact" className="hidden sm:inline-flex">
            Free consultation
          </GhostButton>

          <a
            href={courseUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Learning approach
          </a>
        </div>
      </div>
    </header>
  );
}

function MobileNavModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();

  if (!open) return null;

  return (
    <ModalShell titleId={titleId} onClose={onClose}>
      <div className="p-5">
        <p id={titleId} className="text-sm font-semibold text-slate-200">
          Navigation
        </p>

        <div className="mt-4 grid gap-2">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Case Studies", "#case-studies"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="rounded-xl border border-slate-800/70 bg-slate-900/30 px-4 py-3 text-sm text-slate-200 hover:bg-slate-900/60"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl border border-slate-800/80 bg-slate-900/40 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900/70"
        >
          Close
        </button>
      </div>
    </ModalShell>
  );
}

/* -----------------------
   Project Card + Modal
------------------------ */

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  // NOTE: className always string literal -> avoids hydration "string vs {}" mismatch warnings
  const cardClass =
    "group w-full overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/30 text-left " +
    "transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/50 hover:shadow-xl hover:shadow-black/20 " +
    "focus:outline-none focus:ring-2 focus:ring-slate-600";

  return (
    <button type="button" onClick={onOpen} className={cardClass}>
      <div className="relative aspect-[16/10] w-full border-b border-slate-800/70 bg-slate-950/20">
        {project.video ? (
          <video className="h-full w-full object-cover" src={project.video} muted playsInline preload="metadata" />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">Add preview media</div>
        )}

        <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-slate-800/70 bg-slate-950/50 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          Preview
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
          Open preview
          <span className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (project) {
      // focus close button for accessibility
      setTimeout(() => closeRef.current?.focus(), 0);
    }
  }, [project]);

  if (!project) return null;

  const isExternal = project.live.startsWith("http");

  return (
    <ModalShell titleId={titleId} onClose={onClose}>
      <div className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800/70 px-5 py-4">
          <div className="min-w-0">
            <p id={titleId} className="text-sm font-semibold text-slate-100">
              {project.title}
            </p>
            <p className="mt-1 text-xs text-slate-400">{project.desc}</p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-xl border border-slate-800/80 bg-slate-900/40 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-900/70"
          >
            Close ✕
          </button>
        </div>

        {/* Scroll area */}
        <div className="min-h-0 flex-1 overflow-auto">
          {/* Media */}
          <div className="relative aspect-[16/9] w-full bg-black">
            {project.video ? (
              <video className="h-full w-full object-contain" src={project.video} autoPlay muted loop controls playsInline />
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-slate-300">
                No media yet. Add image/video in /public/projects
              </div>
            )}
          </div>

          <div className="p-5">
            <p className="text-sm font-semibold text-slate-200">Stack</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky footer (ეს აგვარებს შენს პრობლემას: მობაილზე ღილაკები „ქრება/გადის“) */}
        <div className="sticky bottom-0 border-t border-slate-800/70 bg-slate-950/90 px-5 py-4 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="hidden sm:flex flex-wrap gap-2 text-xs text-slate-300">
              {project.tags.slice(0, 4).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {/* Buttons: mobile -> full width, desktop -> inline */}
            <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-end">
              <a
                href={project.live}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="w-full rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-slate-200 sm:w-auto"
                onClick={() => {
                  // if internal anchor, close first
                  if (!isExternal) onClose();
                }}
              >
                {isExternal ? "Open live" : "Contact"}
              </a>

              <a
                href={project.details}
                className="w-full rounded-xl border border-slate-800/80 bg-transparent px-4 py-3 text-center text-sm font-semibold text-slate-200 hover:bg-slate-900/40 sm:w-auto"
                onClick={onClose}
              >
                Details
              </a>
            </div>
          </div>

          {/* safe-area padding for iPhone */}
          <div className="h-[env(safe-area-inset-bottom)]" />
        </div>
      </div>
    </ModalShell>
  );
}

/* -----------------------
   Generic Modal Shell
------------------------ */
function ModalShell({
  titleId,
  onClose,
  children,
}: {
  titleId: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Panel wrapper */}
      <div className="relative w-full mx-auto flex justify-center">
        {children}
      </div>
    </div>
  );
}


/* -----------------------
   UI Bits
------------------------ */
function PillStatus() {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/40 px-3 py-1 text-xs text-slate-300">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      Available for projects & collaboration
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-slate-800/70 bg-slate-900/30 px-3 py-1">{children}</span>;
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/20 p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-slate-400">{desc}</p>
    </div>
  );
}

function PrimaryButton(props: React.ComponentProps<"a">) {
  const { className, ...rest } = props;
  return (
    <a
      {...rest}
      className={
        "rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 " +
        (className ?? "")
      }
    />
  );
}

function SecondaryButton(props: React.ComponentProps<"a">) {
  const { className, ...rest } = props;
  return (
    <a
      {...rest}
      className={
        "rounded-xl border border-slate-800/80 bg-slate-900/30 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900/60 " +
        (className ?? "")
      }
    />
  );
}

function GhostButton(props: React.ComponentProps<"a"> & { className?: string }) {
  const { className, ...rest } = props;
  return (
    <a
      {...rest}
      className={
        "inline-flex items-center justify-center rounded-xl border border-slate-800/80 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/40 " +
        (className ?? "")
      }
    />
  );
}

function TimelineItem(props: { title: string; org: string; time: string; bullets: string[] }) {
  const { title, org, time, bullets } = props;

  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 transition-all duration-300 hover:bg-slate-900/50">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-snug">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{org}</p>
        </div>
        <p className="text-sm text-slate-400">{time}</p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseCard({ title, points, outcome }: { title: string; points: string[]; outcome: string }) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 transition-all duration-300 hover:bg-slate-900/50">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">
        <span className="font-semibold text-slate-200">Outcome:</span> {outcome}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-5 transition-all duration-300 hover:bg-slate-900/50">
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
        {items.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 transition-all duration-300 hover:bg-slate-900/50">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{hint}</p>
    </div>
  );
}

/* -----------------------
   Hooks
------------------------ */
function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
