"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  live: string; // external url or "#contact"
  details: string; // anchor on page
  image?: string; // "/projects/tichu.jpg"
  video?: string; // "/projects/demo.mp4"
};

export default function Home() {
  const courseUrl = "https://example.com/course"; // ჩაანაცვლე

  // ✅ hydration-safe year
  const year = useMemo(() => new Date().getFullYear(), []);

  // ✅ keep stable data (no SSR diff)
  const projects: Project[] = useMemo(
    () => [
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
    ],
    []
  );

  const [active, setActive] = useState<Project | null>(null);

  // ESC closes modal
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // lock body scroll when modal open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <main className="min-h-screen bg-grid text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="container-max flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-slate-700/60">
              <Image
                src="/profile.jpg"
                alt="Ludvigi Khukhunaishvili"
                fill
                className="object-cover"
                priority
                sizes="36px"
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold">Ludvigi Khukhunaishvili</div>
              <div className="text-xs text-slate-400">Senior Full-Stack Web Developer</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#case-studies">Case Studies</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#work"
              className="md:hidden rounded-xl border border-slate-800/80 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/40"
            >
              View work
            </a>

            <a
              href="#contact"
              className="hidden rounded-xl border border-slate-800/80 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/40 sm:inline-flex"
            >
              Free consultation
            </a>

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

      {/* Hero */}
      <section className="container-max pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/40 px-3 py-1 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for projects & collaboration
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Senior Full-Stack Web Developer{" "}
              <span className="block text-slate-300/90 md:inline">& Program Director</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              I build fast, scalable web platforms using React, Vue, WordPress and modern backend tools — with a strong
              focus on performance, UX and maintainability.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-800/80 bg-slate-900/30 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900/60"
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/mrludvigi"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-800/80 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900/40"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-300">
              {["React", "Vue", "WordPress", "Node.js", "PHP", "MySQL", "Performance", "Mentoring"].map((t) => (
                <span key={t} className="rounded-full border border-slate-800/70 bg-slate-900/30 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-slate-800/20 to-slate-700/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/30 p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-slate-700/60">
                <Image
                  src="/profile.jpg"
                  alt="Ludvigi Khukhunaishvili"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              </div>

              <div className="mt-3 flex items-center justify-between">
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
          <MetricCard label="Students trained" value="200+" hint="Digital literacy & frontend mentoring" />
          <MetricCard label="Performance-first" value="Core" hint="Speed, SEO, maintainability" />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container-max py-12 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Selected Work</h2>
            <p className="mt-2 text-sm text-slate-400">Click a project to view a preview in a modal.</p>
          </div>

          <a
            href="#contact"
            className="hidden rounded-xl border border-slate-800/80 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/40 md:inline-flex"
          >
            Request a quote
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container-max py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">About</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
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

      {/* Skills */}
      <section id="skills" className="container-max py-12 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <SkillCard title="Frontend" items={["React", "Vue", "JavaScript", "TypeScript", "Tailwind"]} />
          <SkillCard title="Backend / CMS" items={["Node.js", "PHP", "MySQL", "WordPress", "REST APIs"]} />
          <SkillCard title="Delivery" items={["Performance", "SEO", "UX/UI", "Agile", "Mentoring"]} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-max py-12 md:py-20">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/30 p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Contact</h2>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            If you need a reliable developer or a technical mentor — let’s talk.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
              href="mailto:Mr.ludvigikhukhunaishvili@gmail.com"
            >
              Email me
            </a>
            <a
              className="rounded-xl border border-slate-800/80 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900/40"
              href="https://www.linkedin.com/in/mrludvigi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="py-10 text-center text-xs text-slate-500">© {year} Ludvigi Khukhunaishvili.</footer>
      </section>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}

/* -----------------------
   Components
------------------------ */

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/30 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/50 hover:shadow-xl hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-slate-600"
    >
      <div className="relative aspect-[16/10] w-full border-b border-slate-800/70 bg-slate-950/20">
        {project.video ? (
          <video className="h-full w-full object-cover" src={project.video} muted playsInline preload="metadata" />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">Add preview media</div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-slate-800/70 bg-slate-950/20 px-3 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
          Open preview <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  const isExternal = project.live.startsWith("http");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950 shadow-2xl h-[92vh] md:h-auto md:max-h-[85vh]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800/70 px-4 py-4 md:px-5">
          <div className="min-w-0">
            <p className="text-sm font-semibold">{project.title}</p>
            <p className="mt-1 text-xs text-slate-400">{project.desc}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-xl border border-slate-800/80 bg-slate-900/40 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-900/70"
          >
            Close ✕
          </button>
        </div>

        {/* Body scroll */}
        <div className="h-full overflow-y-auto">
          {/* Media */}
          <div className="relative w-full bg-black aspect-[16/10] md:aspect-[16/9]">
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

          {/* Footer (sticky on mobile so buttons never disappear) */}
          <div className="sticky bottom-0 border-t border-slate-800/70 bg-slate-950/95 backdrop-blur px-4 py-4 md:px-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-800/70 bg-slate-900/40 px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap">
                {/* ✅ ALWAYS visible + same behavior on mobile/desktop */}
                <a
                  href={project.live}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
                  onClick={(e) => {
                    // თუ internal anchor არის (#contact) — ჯერ დახურე და მერე დაასკროლე
                    if (!isExternal) {
                      e.preventDefault();
                      onClose();
                      const id = project.live.replace("#", "");
                      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
                    }
                  }}
                >
                  {isExternal ? "Open live" : "Message me"}
                </a>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-800/80 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/40"
                  onClick={() => {
                    onClose();
                    setTimeout(() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" }), 50);
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-5 transition-all duration-300 hover:bg-slate-900/50">
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
        {items.map((t) => (
          <span key={t} className="rounded-full border border-slate-800/70 bg-slate-950/20 px-3 py-1">
            {t}
          </span>
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
