import Link from 'next/link';
import { AnimatedReveal } from '@/components/animated-reveal';
import { Section } from '@/components/section';
import { SocialLinks } from '@/components/social-links';
import {
  aboutCopy,
  experience,
  leadership,
  projects,
  siteMeta,
  updates,
  writingPlaceholders
} from '@/data/site';

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="grid min-h-[78vh] gap-10 py-20 md:grid-cols-[1.25fr_0.75fr] md:items-end md:py-28">
        <AnimatedReveal>
          <div className="space-y-7">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Product · Strategy · Technology · Analytics</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">{siteMeta.name}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">{siteMeta.role}</p>
            <p className="max-w-3xl leading-relaxed text-[#353430]">{aboutCopy[0]} {heroTrimmed()}</p>
            <SocialLinks />
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <div
            className="h-64 rounded-sm border border-line bg-[#ece8df] md:h-80"
            aria-label="Profile image placeholder"
          >
            {/* Replace this block with next/image when a profile photo is available. */}
            <div className="flex h-full items-center justify-center text-sm text-muted">Profile image placeholder</div>
          </div>
        </AnimatedReveal>
      </section>

      <Section id="about" eyebrow="About" title="A grounded approach to product and strategy.">
        <div className="grid gap-6 md:max-w-4xl">
          {aboutCopy.map((paragraph, index) => (
            <AnimatedReveal key={paragraph} delay={index * 0.08}>
              <p className="leading-relaxed text-[#33322f]">{paragraph}</p>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Selected Experience" title="Roles across product, portfolio, and execution.">
        <div className="space-y-5">
          {experience.slice(0, 3).map((item, index) => (
            <AnimatedReveal key={item.company} delay={index * 0.07}>
              <article className="rounded-sm border border-line/90 bg-[#fcfbf8] p-6 transition hover:-translate-y-0.5 hover:border-[#c7c1b5] hover:shadow-subtle">
                <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row">
                  <h3 className="font-serif text-2xl">{item.company}</h3>
                  <p className="text-sm text-muted">{item.date}</p>
                </div>
                <p className="mb-3 text-sm uppercase tracking-[0.12em] text-muted">{item.title}</p>
                <p className="mb-4 leading-relaxed text-[#33322f]">{item.summary}</p>
                <ul className="space-y-2 text-sm leading-relaxed text-[#33322f]">
                  {item.points.slice(0, 3).map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            </AnimatedReveal>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/work" className="story-link text-sm">
            View full experience
          </Link>
        </div>
      </Section>

      <Section id="projects" eyebrow="Case Studies" title="Selected projects and analytical work.">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 0.08}>
              <article className="h-full rounded-sm border border-line/90 bg-[#fcfbf8] p-6">
                <h3 className="mb-2 font-serif text-2xl leading-tight">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{project.context}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#33322f]">{project.challenge}</p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section id="leadership" eyebrow="Leadership & Initiative" title="Ownership beyond formal roles.">
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item, index) => (
            <AnimatedReveal key={item.role} delay={index * 0.06}>
              <article className="rounded-sm border border-line/90 bg-[#fcfbf8] p-5">
                <h3 className="font-serif text-xl">{item.role}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#33322f]">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section id="writing" eyebrow="Writing & Notes" title="Working notes on product and strategy thinking.">
        <div className="grid gap-5 md:grid-cols-3">
          {writingPlaceholders.map((entry, index) => (
            <AnimatedReveal key={entry.title} delay={index * 0.06}>
              <article className="rounded-sm border border-dashed border-line bg-[#fbfaf7] p-5">
                <h3 className="font-serif text-xl">{entry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{entry.excerpt}</p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section id="updates" eyebrow="Updates" title="Recent milestones.">
        <div className="space-y-4">
          {updates.map((update, index) => (
            <AnimatedReveal key={update.text} delay={index * 0.05}>
              <article className="flex flex-col gap-1 border-l border-line pl-4 md:flex-row md:gap-5">
                <p className="w-24 text-sm text-muted">{update.date}</p>
                <p className="max-w-3xl text-sm leading-relaxed text-[#33322f]">{update.text}</p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Open to product and strategy conversations.">
        <div className="flex flex-col gap-3 text-sm text-muted">
          <a href={`mailto:${siteMeta.email}`} className="story-link w-fit">
            {siteMeta.email}
          </a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="story-link w-fit">
            LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
}

function heroTrimmed() {
  return 'I am motivated by turning market insights and strategic intent into actionable product priorities that improve process quality and user value.';
}
