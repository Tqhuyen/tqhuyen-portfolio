import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { ProjectGrid } from "@/components/project-grid";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  awards,
  certifications,
  education,
  experience,
  leadership,
  profile,
  projects,
  publications,
  skills,
  studentResearch,
  type Publication,
} from "@/content/profile";

const NAV = [
  ["experience", "Experience"],
  ["research", "Research"],
  ["projects", "Projects"],
  ["awards", "Awards"],
  ["contact", "Contact"],
] as const;

/** How Huyên's name appears in author lists; it is bolded there. */
const AUTHOR_NAME = "Huyen Quang Tran";

function Section({ id, index, title, intro, children }: { id: string; index: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{index}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

function PaperRow({ paper }: { paper: Publication }) {
  const [before, after] = paper.authors.split(AUTHOR_NAME);
  return (
    <>
      <h3>{paper.title}</h3>
      <p className="authors">
        {after === undefined ? (
          paper.authors
        ) : (
          <>
            {before}
            <strong>{AUTHOR_NAME}</strong>
            {after}
          </>
        )}
      </p>
      <p className="venue">
        {paper.venue} · {paper.year}
      </p>
    </>
  );
}

export default function Home() {
  const awardCount = awards.reduce((n, year) => n + year.items.length, 0);
  const stats = [
    { value: "4+ yrs", label: "industry AI experience at Everfit and Hekate" },
    { value: String(publications.length), label: "first-author IEEE papers in 2025" },
    { value: "3.7", label: "M.Sc. GPA out of 4.0, Distinction" },
    { value: String(awardCount), label: `awards and honours since ${awards[awards.length - 1].year}` },
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            <span aria-hidden>~/</span>tqhuyen
          </a>
          <nav aria-label="Sections">
            <ul>
              {NAV.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-name">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">$ whoami</p>
              <h1 id="hero-name">{profile.name}</h1>
              <p className="hero-role">
                {profile.role}
                <span className="hero-place">
                  <MapPin aria-hidden size={16} />
                  {profile.location}
                </span>
              </p>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a className="button primary" href={`mailto:${profile.email}`}>
                  <Mail aria-hidden size={18} />
                  Email me
                </a>
                {profile.links.map((l) => (
                  <a key={l.href} className="button" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                    <ArrowUpRight aria-hidden size={16} />
                  </a>
                ))}
              </div>
            </div>
            <ul className="stats" aria-label="At a glance">
              {stats.map((s) => (
                <li key={s.label} className="card stat">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="container">
            <ul className="tags interests" aria-label="Research interests">
              {profile.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="experience" index="01" title="Experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.org} className="card job">
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="org">
                      {job.org}
                      {job.place ? ` · ${job.place}` : ""}
                    </p>
                  </div>
                  <p className="period">{job.period}</p>
                </div>
                <ul className="points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Technologies">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="research"
          index="02"
          title="Research"
          intro="Peer-reviewed papers, then the student research conference work that led to them."
        >
          <ul className="papers">
            {publications.map((paper) => (
              <li key={paper.title} className="card paper">
                <p className="badge">First author · IEEE</p>
                <PaperRow paper={paper} />
                <div className="links">
                  {paper.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                      <ArrowUpRight aria-hidden size={14} />
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <h3 className="subhead">Student research conference</h3>
          <ul className="student-research">
            {studentResearch.map((paper) => (
              <li key={paper.title}>
                <PaperRow paper={paper} />
                {paper.note ? <p className="prize">{paper.note}</p> : null}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="projects"
          index="03"
          title="Projects"
          intro="Research, product work at Everfit and Hekate, and things I built on my own. Linked ones have public code or a live demo."
        >
          <ProjectGrid projects={projects} />
        </Section>

        <Section id="education" index="04" title="Education">
          <ul className="two-col">
            {education.map((e) => (
              <li key={e.degree} className="card">
                <p className="period">{e.period}</p>
                <h3>{e.degree}</h3>
                <p className="org">{e.school}</p>
                <ul className="points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="awards" index="05" title="Awards & honours">
          <ol className="years">
            {awards.map((y) => (
              <li key={y.year}>
                <p className="year">{y.year}</p>
                <ul>
                  {y.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="teaching" index="06" title="Teaching & leadership">
          <ul className="two-col">
            {leadership.map((r) => (
              <li key={r.title + r.period} className="card">
                <p className="period">{r.period}</p>
                <h3>{r.title}</h3>
                <p className="org">{r.org}</p>
                <p>{r.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" index="07" title="Skills & certifications">
          <div className="skills">
            {skills.map((g) => (
              <div key={g.title} className="card">
                <h3>{g.title}</h3>
                <ul className="tags">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="card certs">
              <h3>Certifications</h3>
              <ul className="points">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container">
            <div className="card contact">
              <p className="eyebrow">08</p>
              <h2 id="contact-title">Get in touch</h2>
              <p>Questions, collaborations or opportunities: email is the fastest way to reach me.</p>
              <div className="hero-actions">
                <a className="button primary" href={`mailto:${profile.email}`}>
                  <Mail aria-hidden size={18} />
                  {profile.email}
                </a>
                {profile.links.map((l) => (
                  <a key={l.href} className="button" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                    <ArrowUpRight aria-hidden size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © {profile.name} · Built with Next.js, hosted on Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
