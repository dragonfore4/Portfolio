import Image from "next/image";
import {
  FiArrowDownRight as ArrowDownRight,
  FiArrowUpRight as ArrowUpRight,
  FiDownload as Download,
  FiGithub as Github,
  FiMail as Mail,
  FiMapPin as MapPin,
} from "react-icons/fi";
import { CONTACT_INFO } from "@/utils/Contact";

const projects = [
  {
    title: "Gear Up",
    description: "An outdoor e-commerce platform with a containerized backend.",
    stack: "Next.js / Spring Boot / Docker",
  },
  {
    title: "Travel log",
    description: "A space to discover destinations, share posts, and upload moments.",
    stack: "Next.js / Supabase",
  },
  {
    title: "Looterz online",
    description: "A browser adaptation of a board game, built collaboratively.",
    stack: "Next.js / Go / MySQL",
  },
  {
    title: "Carbon market",
    description: "A transparent marketplace connecting carbon-credit buyers and sellers.",
    stack: "Next.js / Express / MySQL",
  },
];

const experience = [
  {
    period: "2026",
    company: "ttb",
    role: "DevOps Engineer Intern",
    detail: "Standardized delivery pipelines, strengthened container security, and built observability tooling for production services.",
  },
  {
    period: "2025",
    company: "IBM",
    role: "Platform Engineer Intern",
    detail: "Delivered platform proof-of-concepts with Terraform, Instana, and watsonx Orchestrate for client teams.",
  },
  {
    period: "2024",
    company: "SAP",
    role: "ASEAN DSE Master Trainer",
    detail: "Led practical data and low-code workshops for underserved youth across ASEAN.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Sirasith home">
            SR<span>.</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-email" href={`mailto:${CONTACT_INFO.email}`}>
            Let&apos;s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Available for opportunities</p>
            <h1>Building useful things for the web.</h1>
            <p className="intro">
              I&apos;m <strong>Sirasith Ruengsilapavilai</strong>, a Computer Science student in Bangkok who enjoys shipping reliable products and the systems behind them.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See selected work <ArrowDownRight aria-hidden="true" /></a>
              <a className="button button-quiet" href="/CV_sirasith_ruengsilapavilai.pdf" download>Download CV <Download aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="profile-card">
            <div className="profile-image"><Image src="/pictures/boys.jpg" alt="Illustrated portrait of Sirasith" fill priority sizes="(max-width: 700px) 100vw, 360px" /></div>
            <div className="profile-caption"><span>Based in</span><strong>Bangkok, Thailand</strong></div>
          </aside>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading"><p className="eyebrow">01 / Selected work</p><h2>A few things I&apos;ve made.</h2></div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <div><h3>{project.title}</h3><p>{project.description}</p></div>
                <p className="stack">{project.stack}</p>
                <ArrowUpRight className="project-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading"><p className="eyebrow">02 / Experience</p><h2>Learning by doing.</h2></div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience" key={item.company}>
                <p className="period">{item.period}</p>
                <div><h3>{item.company}</h3><p className="role">{item.role}</p></div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">03 / Contact</p>
          <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
          <a className="contact-email" href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email} <ArrowUpRight aria-hidden="true" /></a>
          <div className="contact-meta">
            <span><MapPin aria-hidden="true" /> {CONTACT_INFO.location}</span>
            <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <a href={`mailto:${CONTACT_INFO.email}`}><Mail aria-hidden="true" /> Email</a>
          </div>
        </section>
        <footer><span>© {new Date().getFullYear()} Sirasith Ruengsilapavilai</span><span>Designed & built with care.</span></footer>
      </div>
    </main>
  );
}
