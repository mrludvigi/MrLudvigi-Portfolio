"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const courseUrl = "https://example.com/course"; // ჩაანაცვლე შენს პლატფორმის ლინკით

  const projects: Project[] = [
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

  const [active, setActive] = useState<Project | null>(null);
  const [year, setYear] = useState<number>(2026); // hydration-safe default

  // set year on client (prevents hydration mismatch)
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

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
              <div className="text-sm font-semibold">
                Ludvigi Khukhunaishvili
              </div>
              <div className="text-xs text-slate-400">
                Senior Full-Stack Web Developer
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#work">
              Work
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#case-studies">
              Case Studies
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
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
              <span className="block text-slate-300/90 md:inline">
                & Program Director
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              I build fast, scalable web platforms using React, Vue, WordPress and
              modern backend tools — with a strong focus on performance, UX and
              maintainability.
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
              {[
                "React",
                "Vue",
                "WordPress",
                "Node.js",
                "PHP",
                "MySQL",
                "Performance",
                "Mentoring",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-800/70 bg-slate-900/30 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Photo (premium look) */}
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
                <p className="text-xs text-slate-400">
                  React • Vue • WordPress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container-max pb-6">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            label="Projects shipped"
            value="10+"
            hint="Websites, dashboards, portals"
          />
          <MetricCard
            label="Students trained"
            value="200+"
            hint="Digital literacy & frontend mentoring"
          />
          <MetricCard
            label="Performance-first"
            value="Core"
            hint="Speed, SEO, maintainability"
          />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container-max py-12 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Selected Work
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Click a project to view a quick preview (image/video) in a modal.
            </p>
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
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              About
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              I’m a Full-Stack Web Developer and Program Director focused on
              building modern, high-performance websites and educational
              platforms. I help teams transform slow or hard-to-manage systems
              into clean, scalable products — optimized for UX, speed, and
              maintainability.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold text-slate-200">
                What clients get
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Clean architecture and maintainable code</li>
                <li>• Speed and SEO improvements that move the needle</li>
                <li>• Production-ready delivery with clear communication</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6">
            <h3 className="text-sm font-semibold text-slate-200">
              What I focus on
            </h3>
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

      {/* Experience */}
      <section id="experience" className="container-max py-12 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Experience
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Leadership, delivery, and real-world systems — across education and
          production environments.
        </p>

        <div className="mt-8 space-y-6">
          <TimelineItem
            title="Program Director & Mentor — Junior Frontend Bootcamp (React)"
            org="WEA — World Education Academy · Full-time · Baghdati Municipality, Georgia (Hybrid)"
            time="Apr 2025 — Present"
            bullets={[
              "Designed and led a 13-week training program for junior frontend developers.",
              "Translated national curriculum standards into a dynamic bootcamp format.",
              "Built a React + Vue educational platform with progress tracking, quizzes, leaderboards, and resource libraries.",
              "Mentored students via online learning using modern web technologies.",
            ]}
          />
          <TimelineItem
            title="Full Stack Developer"
            org="WEA — World Education Academy · Full-time"
            time="Jun 2024 — Present"
            bullets={[
              "Spearheaded the creation of WEA’s official full-stack website with modular development and dynamic content management.",
              "Designed and developed a responsive website aligned with WEA’s brand identity and educational mission.",
              "Built backend systems and integrated databases (MongoDB/MySQL) for news, program pages, team profiles, gallery, and contact.",
              "Enabled staff to manage and update content independently; optimized performance for scalability.",
            ]}
          />
          <TimelineItem
            title="Information Technology Specialist"
            org="WEA — World Education Academy · Full-time"
            time="Jun 2024 — Sep 2025"
            bullets={[
              "Delivered ‘Digital Literacy’ training to 200+ students, achieving 90% successful completion rate.",
              "Implemented live/recorded online teaching system improving learning process quality by ~30%.",
              "Managed IT infrastructure: networks, surveillance, and technical hardware.",
              "Aligned technical leadership with academic objectives to enhance digital learning outcomes.",
            ]}
          />
          <TimelineItem
            title="Full Stack Developer"
            org="Novatori — Full-time · Tbilisi, Georgia (Hybrid)"
            time="Sep 2024 — Present"
            bullets={[
              "Completed full-stack development retraining program using JavaScript, React, Node.js, MySQL, and Express.",
              "Participated in real project development using Git, RESTful APIs, and responsive UI techniques.",
              "Strengthened frontend/backend integration and built fully functional full-stack apps.",
            ]}
          />
          <TimelineItem
            title="IT Specialist"
            org="NNLE Erosi Manjgaladze · Full-time · Samtredia, Georgia (Hybrid)"
            time="Aug 2017 — Present"
            bullets={[
              "Led digital transformation efforts and launched the institution’s official website.",
              "Built Excel automation tools for finance and reporting.",
              "Maintained internal networks and delivered full-cycle technical support and staff training.",
            ]}
          />
          <TimelineItem
            title="Technical Support Technician"
            org="ცესკო · Full-time · Samtredia Municipality, Imereti, Georgia"
            time="Sep 2025 — Oct 2025"
            bullets={[
              "Provided on-site technical support during Georgia’s national elections.",
              "Assembled, configured, and troubleshooted Smartmatic voting equipment.",
              "Verified readiness and resolved live technical issues under pressure.",
            ]}
          />
          <TimelineItem
            title="Technical Support Technician"
            org="ცესკო · Full-time · Samtredia Municipality, Imereti, Georgia"
            time="Sep 2024 — Oct 2024"
            bullets={[
              "Provided on-site technical support during Georgia’s national elections.",
              "Assembled, configured, and troubleshooted Smartmatic voting equipment.",
              "Verified readiness and resolved live technical issues under pressure.",
            ]}
          />
          <TimelineItem
            title="Finance Manager"
            org="LLC Tavtavi 2016 · Full-time · Samtredia Municipality, Imereti, Georgia"
            time="Mar 2017 — Jan 2020"
            bullets={[
              "Oversaw financial operations, optimized reporting workflows, and supported decisions with data-driven insights.",
              "Created Excel tools to automate balance sheets and tracking.",
              "Improved speed and accuracy of financial reports; ensured compliance with standards.",
            ]}
          />
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="container-max py-12 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Case Studies
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Outcome-driven summaries — expand each one later with screenshots,
          metrics, and process.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <CaseCard
            title="tichu.ge — Performance & Redesign"
            outcome="Stability improved, near-instant feel, cleaner UX, easier maintenance"
            points={[
              "Conducted a full technical audit: bottlenecks, outdated plugins, design issues.",
              "Removed ~20 unnecessary plugins, 10 unused themes, and insecure/unofficial add-ons.",
              "Rebuilt broken layouts with clean HTML/CSS and responsive fixes.",
            ]}
          />
          <CaseCard
            title="WEA — Academy Official Website"
            outcome="Modern, scalable institutional site with dynamic programs & content workflow"
            points={[
              "Built program pages, publishing flow for news/updates, gallery and contact sections.",
              "Implemented registration forms and structured content for maintainability.",
              "Optimized cross-device UX and performance for future growth.",
            ]}
          />
          <CaseCard
            title="Academy Platform — Gamified Learning Portal"
            outcome="Higher engagement through gamification and clear progress visibility"
            points={[
              "Lessons, resources and presentation slides for structured learning.",
              "Quizzes + assignments grant points; leaderboard shows ranking and progress.",
              "Designed for motivation and consistent learning habits.",
            ]}
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container-max py-12 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Skills
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <SkillCard
            title="Frontend"
            items={["React", "Vue", "JavaScript", "TypeScript", "Tailwind"]}
          />
          <SkillCard
            title="Backend / CMS"
            items={["Node.js", "PHP", "MySQL", "WordPress", "REST APIs"]}
          />
          <SkillCard
            title="Delivery"
            items={["Performance", "SEO", "UX/UI", "Agile", "Mentoring"]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-max py-12 md:py-20">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/30 p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            If you need a reliable developer or a technical mentor for your
            product, team or platform — let’s talk.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Custom websites & dashboards</li>
            <li>• WordPress optimization (speed, SEO, security)</li>
            <li>• Educational platforms + mentoring</li>
          </ul>

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

        <footer className="py-10 text-center text-xs text-slate-500">
          © {year} Ludvigi Khukhunaishvili. All rights reserved.
        </footer>
      </section>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}

/* -----------------------
   Components
------------------------ */

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/30 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/50 hover:shadow-xl hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-slate-600"
    >
      <div className="relative aspect-[16/10] w-full border-b border-slate-800/70 bg-slate-950/20">
        {project.video ? (
          <video
            className="h-full w-full object-cover"
            src={project.video}
            muted
            playsInline
            preload="metadata"
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
            Add preview media
          </div>
        )}

        <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-slate-800/70 bg-slate-950/40 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          Preview
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-800/70 bg-slate-950/20 px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
          Open preview
          <span className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  const isExternal = project.live.startsWith("http");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Project preview"
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        aria-label="Close modal"
      />

      {/* Panel */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950 shadow-2xl max-h-[88vh] md:max-h-[85vh]">
        <div className="flex items-start justify-between gap-4 border-b border-slate-800/70 px-5 py-4">
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

        <div className="overflow-auto">
          {/* Media */}
          <div className="relative aspect-[16/9] w-full bg-black">
            {project.video ? (
              <video
                className="h-full w-full object-contain"
                src={project.video}
                autoPlay
                muted
                loop
                controls
                playsInline
              />
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

          {/* Footer */}
          <div className="flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-800/70 bg-slate-900/40 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.live}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
                onClick={() => {
                  if (!isExternal) onClose();
                }}
              >
                {isExternal ? "Open live" : "Contact"}
              </a>
              <a
                href={project.details}
                className="rounded-xl border border-slate-800/80 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/40"
                onClick={() => onClose()}
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem(props: {
  title: string;
  org: string;
  time: string;
  bullets: string[];
}) {
  const { title, org, time, bullets } = props;

  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 transition-all duration-300 hover:bg-slate-900/50">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
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

function CaseCard({
  title,
  points,
  outcome,
}: {
  title: string;
  points: string[];
  outcome: string;
}) {
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
          <span
            key={t}
            className="rounded-full border border-slate-800/70 bg-slate-950/20 px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 transition-all duration-300 hover:bg-slate-900/50">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{hint}</p>
    </div>
  );
}
