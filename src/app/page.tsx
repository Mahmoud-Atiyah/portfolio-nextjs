"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { projects, skills } from "./data";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const heroTags = ["Full-stack Web", "Automation Pipelines", "Game Prototypes"];
const heroStats = [
  { value: "30+", label: "Projects shipped" },
  { value: "8+", label: "Stacks across code & no-code" },
  { value: "24h", label: "Avg. response time" },
];

function useTypedText(words: string[], typing = 90, backspace = 50, pause = 1200) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let delay = isDeleting ? backspace : typing;
    if (!isDeleting && charIndex === currentWord.length) delay = pause;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, pause, typing, backspace, words, wordIndex]);

  const currentWord = words[wordIndex % words.length];
  return currentWord.slice(0, charIndex);
}

export default function PortfolioPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isSticky, setIsSticky] = useState(false);
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [showPreloader, setShowPreloader] = useState(true);
  const typed = useTypedText(
    ["Frontend Developer", "Backend Developer", "Game Developer"],
    80,
    45,
    1200
  );

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealables = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    revealables.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Avoid hydration mismatch by hiding the preloader right after mount
    const timer = setTimeout(() => setShowPreloader(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const toggleProject = (index: number) => {
    setOpenProject((prev) => (prev === index ? null : index));
  };

  const handleNavClick = (id: string) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {showPreloader && (
        <div className="fixed inset-0 z-[999] grid place-items-center bg-slate-950">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/15 border-t-teal-300" />
        </div>
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[4vw] py-4 transition ${
          isSticky ? "backdrop-blur-md bg-slate-950/70 shadow-[0_10px_50px_rgba(15,118,110,0.25)]" : ""
        }`}
      >
        <button
          onClick={() => handleNavClick("home")}
          className="text-xl font-extrabold tracking-tight text-white"
        >
          Portfolio<span className="text-teal-300">.</span>
        </button>

        <div className="flex items-center gap-4">
          <nav
            className={`${
              navOpen ? "flex" : "hidden"
            } absolute left-[4vw] right-[4vw] top-full flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-3 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            id="site-nav"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === link.id
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            id="menu-icon"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            className="bx bx-menu text-3xl text-white md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          />
        </div>
      </header>

      <main className="pt-24 space-y-28">
        <section
          id="home"
          className="relative mx-auto grid min-h-screen w-[min(1200px,92vw)] items-center gap-10 md:grid-cols-[1.1fr,0.9fr]"
          aria-label="Home"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(125,249,255,0.12),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(167,85,247,0.12),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(125,249,255,0.08),transparent_25%)] blur-3xl" />

          <div className="space-y-6" data-reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-teal-200/80">Hello, I&apos;m</p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Mahmoud Atiyah
            </h1>
            <p className="text-2xl font-semibold text-slate-200">
              And I&apos;m a{" "}
              <span className="text-teal-300">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
            </p>
            <p className="max-w-2xl text-base text-slate-300 md:text-lg">
              Welcome to my portfolio! I build digital experiences that blend code, no-code, and
              creativity. From modern web applications and automated workflows to immersive game
              prototypes, this space reflects my journey of learning, building, and experimenting
              across different technologies.
            </p>

            <div className="flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,240,255,0.12)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/mahmoud-a-b01a89188/"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
                >
                  <i className="bx bxl-linkedin" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  href="https://github.com/Mahmoud-Atiyah"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
                >
                  <i className="bx bxl-github" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/assets/resume.pdf"
                  download
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_15px_40px_rgba(124,240,255,0.35)] transition hover:-translate-y-0.5"
                >
                  Download Resume
                </Link>
                <button
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-teal-300 hover:text-teal-300"
                  onClick={() => handleNavClick("projects")}
                >
                  View Projects
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-black/20 p-3 text-center">
                  <div className="text-2xl font-extrabold text-teal-300">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center" data-reveal>
            <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,rgba(124,240,255,0.25),transparent_60%)] blur-3xl" />
            <div className="absolute inset-6 -z-10 scale-100 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2),transparent_60%)] blur-3xl" />
            <Image
              src="/images/img1.png"
              alt="Portrait photo of Mahmoud Atiyah"
              width={520}
              height={520}
              priority
              className="rounded-3xl border border-white/10 shadow-[0_25px_80px_rgba(124,240,255,0.25)]"
            />
          </div>
        </section>

        <section
          id="about"
          aria-label="About Me"
          className="mx-auto grid w-[min(1100px,92vw)] items-center gap-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:grid-cols-[0.95fr,1.05fr] md:p-12"
        >
          <div className="relative" data-reveal>
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-teal-400/40 via-transparent to-purple-500/30 blur-2xl" />
            <Image
              src="/images/img2.png"
              alt="Mahmoud Atiyah portrait"
              width={520}
              height={660}
              className="w-full rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            />
          </div>

          <div className="space-y-5" data-reveal>
            <h2 className="text-4xl font-black text-white">
              About <span className="text-teal-300">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold text-white">Developer | Designer | Innovator</h3>
            <p className="text-base text-slate-300">
              Hi! I&apos;m Mahmoud Atiyah, a multi-disciplinary developer with experience across
              coding, no-code tools, and creative design. I&apos;ve built projects with{" "}
              <strong>C++, Python, HTML, CSS, JavaScript, React</strong>, and I&apos;m expanding into{" "}
              <strong>Flask and SQL</strong>. On the no-code side, I work with{" "}
              <strong>WordPress Elementor, GoHighLevel, and Zapier</strong> to create business
              solutions and automate workflows.
            </p>
            <p className="text-base text-slate-300">
              I also have designing experience in <strong>Photoshop and Canva</strong>, and I
              architect <strong>WordPress</strong> builds with <strong>ACF/CPT UI</strong> and Theme
              Builder patterns. On the operations side, I connect websites to{" "}
              <strong>automation pipelines</strong> (Zapier -&gt; <strong>GoHighLevel</strong> CRM)
              and apply <strong>local SEO + structured data</strong> so projects rank and convert.
              On the code front, I work with <strong>Flask + MySQL</strong> for REST APIs and data
              models, and I explore interactive builds in <strong>Unity</strong> and{" "}
              <strong>Unreal Engine 5</strong>.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                My <span className="text-teal-300">Skills</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-center transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_15px_40px_rgba(124,240,255,0.22)]"
                  >
                    {skill.icon && (
                      <i
                        className={`bx ${skill.icon} text-5xl`}
                        style={skill.color ? { color: skill.color } : undefined}
                      />
                    )}
                    {skill.image && (
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        width={64}
                        height={64}
                        sizes="80px"
                        className="h-16 w-16 object-contain"
                      />
                    )}
                    <span className="text-sm font-semibold text-white">{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          aria-label="Projects"
          className="mx-auto w-[min(1200px,92vw)] space-y-8"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-black text-white">
                My <span className="text-teal-300">Projects</span>
              </h2>
              <p className="text-slate-300">
                Case studies across web, automation, and interactive builds.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const isOpen = openProject === index;
              return (
                <article
                  key={project.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  data-reveal
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1280}
                      height={720}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={index < 2}
                      className="h-52 w-full object-cover transition duration-500 hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/70" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
                          {project.subtitle}
                        </p>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        {project.href && (
                          <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
                          >
                            <i className="bx bx-link-external text-xl" />
                          </Link>
                        )}
                        <button
                          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
                          onClick={() => toggleProject(index)}
                          aria-expanded={isOpen}
                          aria-controls={`project-desc-${index}`}
                        >
                          <i className={`bx ${isOpen ? "bx-x" : "bx-book-content"} text-xl`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3">
                    <p className="text-sm text-slate-300">{project.summary}</p>
                    <div
                      id={`project-desc-${index}`}
                      className={`overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out ${
                        isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pt-3 text-sm text-slate-300">{project.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="contact"
          aria-label="Contact"
          className="mx-auto w-[min(900px,92vw)] rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <h2 className="text-4xl font-black text-white">
            Contact <span className="text-teal-300">Me</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg text-slate-200">
            <p>
              <i className="bx bxs-envelope mr-2 text-teal-300" aria-hidden="true" />
              <strong>Email:</strong>{" "}
              <Link href="mailto:mahmoudatiyah99@gmail.com" className="text-teal-300">
                mahmoudatiyah99@gmail.com
              </Link>
            </p>
            <p>
              <i className="bx bxs-phone mr-2 text-teal-300" aria-hidden="true" />
              <strong>Phone:</strong>{" "}
              <Link href="tel:+17137756193" className="text-teal-300">
                +1 (713) 775-6193
              </Link>
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="https://github.com/Mahmoud-Atiyah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
            >
              <i className="bx bxl-github text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mahmoud-a-b01a89188/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
            >
              <i className="bx bxl-linkedin text-xl" />
            </Link>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/assets/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_15px_40px_rgba(124,240,255,0.35)] transition hover:-translate-y-0.5"
              aria-label="Download Resume"
            >
              Download Resume
            </Link>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-[min(1200px,92vw)] items-center justify-between gap-4 px-4 pb-12 pt-6 text-slate-300">
        <p className="text-sm">Copyright (c) {year} by Mahmoud Atiyah | All Rights Reserved.</p>
        <button
          onClick={() => handleNavClick("home")}
          className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-950 shadow-[0_12px_30px_rgba(124,240,255,0.35)] transition hover:-translate-y-1"
          aria-label="Back to top"
        >
          <i className="bx bx-up-arrow-alt text-xl" />
        </button>
      </footer>
    </>
  );
}


