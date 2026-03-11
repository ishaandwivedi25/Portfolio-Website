import { AnimatedReveal } from '@/components/animated-reveal';
import { Section } from '@/components/section';
import { experience } from '@/data/site';

export default function WorkPage() {
  return (
    <div className="py-16 md:py-20">
      <Section eyebrow="Work" title="Experience in product management, strategy, and technology execution.">
        <div className="space-y-6">
          {experience.map((role, index) => (
            <AnimatedReveal key={role.company} delay={index * 0.06}>
              <article className="rounded-sm border border-line bg-[#fcfbf8] p-7">
                <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-end">
                  <div>
                    <h2 className="font-serif text-3xl">{role.company}</h2>
                    <p className="text-sm uppercase tracking-[0.12em] text-muted">{role.title}</p>
                  </div>
                  <p className="text-sm text-muted">{role.date}</p>
                </div>
                <p className="mb-4 max-w-3xl leading-relaxed text-[#353430]">{role.summary}</p>
                <ul className="space-y-2 text-sm leading-relaxed text-[#353430]">
                  {role.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
