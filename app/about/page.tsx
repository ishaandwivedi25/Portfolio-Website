import { Section } from '@/components/section';
import { aboutCopy, capabilities, certifications } from '@/data/site';

export default function AboutPage() {
  return (
    <div className="py-16 md:py-20">
      <Section eyebrow="About" title="Product and strategy work grounded in analytical clarity.">
        <div className="grid gap-12">
          <div className="space-y-4">
            {aboutCopy.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl leading-relaxed text-[#353430]">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(capabilities).map(([group, items]) => (
              <article key={group} className="rounded-sm border border-line bg-[#fcfbf8] p-5">
                <h2 className="font-serif text-2xl">{group}</h2>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <article className="rounded-sm border border-line bg-[#fcfbf8] p-5">
            <h2 className="font-serif text-2xl">Certifications</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {certifications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>
    </div>
  );
}
