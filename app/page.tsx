import { FiArrowUpRight, FiFileText, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

import { CONTACT_INFO } from "@/utils/Contact";
import { EXPERIENCES, VOLUNTEERING, type Experience } from "@/utils/Experience";
import { HOMELAB } from "@/utils/Homelab";
import { TAG_ICONS } from "@/utils/icons";

const pill =
  "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-fg hover:text-fg";

function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ul className="border-y border-line">
      {items.map((exp) => (
        <li
          key={`${exp.company}-${exp.period}`}
          className="group -mx-3 flex gap-4 rounded-lg px-3 py-5 transition-colors hover:bg-fg/4 not-last:border-b not-last:border-line"
        >
          <div aria-hidden className="mt-0.5 flex size-9 shrink-0 overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={exp.logo}
              alt=""
              className={exp.logoContain ? "size-full bg-white object-contain p-1.5" : "size-full object-cover"}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 group-hover:underline"
              >
                {exp.company}
              </a>
              <span className="shrink-0 font-mono text-sm text-muted">{exp.period}</span>
            </div>
            <p className="text-muted">{exp.role}</p>
            <p className="mt-2 text-pretty text-muted">{exp.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:max-h-20 sm:group-hover:opacity-100 sm:group-focus-within:max-h-20 sm:group-focus-within:opacity-100">
              {exp.tags.map((tag) => {
                const TagIcon = TAG_ICONS[tag];
                return (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {TagIcon && <TagIcon aria-hidden className="size-3" />}
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-173 px-6 py-16 sm:py-32">
      <header className="reveal mb-8" style={{ ["--i" as string]: 0 }}>
        <h1 className="font-medium">Sirasith Ruengsilapavilai</h1>
        <p className="flex items-center gap-2 font-medium text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Application Developer at IBM
        </p>
      </header>

      <section className="reveal space-y-6 text-pretty text-muted" style={{ ["--i" as string]: 1 }}>
        <p className="hidden">
          I&apos;m a full-time application developer who spends most of the day in the
          DevOps lane: pipelines, containers, and the dashboards that tell you when something
          breaks.
        </p>
        <p className="">
          My name is Game, Nice to meet you! :)
        </p>
        <p>I like the unglamorous work that makes a release boring, in the good way.</p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className={`${pill} hover:border-line hover:text-muted`}>
            <FiMapPin aria-hidden /> Bangkok
          </span>
          <a href={`mailto:${CONTACT_INFO.email}`} className={pill}>
            <FiMail aria-hidden /> Email
          </a>
          <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className={pill}>
            <SiGithub aria-hidden /> GitHub
          </a>
          <a
            href="/CV_sirasith_ruengsilapavilai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={pill}
          >
            <FiFileText aria-hidden /> CV
          </a>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="reveal mt-16 sm:mt-24"
        style={{ ["--i" as string]: 2 }}
      >
        <h2 id="experience-heading" className="mb-5 font-medium">
          Experience
        </h2>
        <ExperienceList items={EXPERIENCES} />
      </section>

      <section
        aria-labelledby="volunteering-heading"
        className="reveal mt-16 sm:mt-24"
        style={{ ["--i" as string]: 3 }}
      >
        <h2 id="volunteering-heading" className="mb-5 font-medium">
          Volunteering
        </h2>
        <ExperienceList items={VOLUNTEERING} />
      </section>

      <section
        aria-labelledby="homelab-heading"
        className="reveal mt-16 sm:mt-24"
        style={{ ["--i" as string]: 4 }}
      >
        <h2 id="homelab-heading" className="mb-5 font-medium">
          Homelab
        </h2>
        <div className="border-y border-line py-5">
          <p className="text-pretty text-muted">{HOMELAB.summary}</p>
          <ul className="mt-4 space-y-1 text-muted">
            {HOMELAB.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden className="text-muted">
                  –
                </span>
                {h}
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {HOMELAB.tags.map((tag) => {
              const TagIcon = TAG_ICONS[tag];
              return (
                <li
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {TagIcon && <TagIcon aria-hidden className="size-3" />}
                  {tag}
                </li>
              );
            })}
          </ul>
          <a
            href={HOMELAB.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pill} mt-5`}
          >
            View the architecture <FiArrowUpRight aria-hidden />
          </a>
        </div>
      </section>
    </main>
  );
}
