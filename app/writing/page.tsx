import { Section } from '@/components/section';
import { writingPlaceholders } from '@/data/site';

export default function WritingPage() {
  return (
    <div className="py-16 md:py-20">
      <Section eyebrow="Writing" title="Notes, essays, and research reflections.">
        <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted">
          This section is scaffolded so new writing can be added quickly. Replace these cards with published notes when ready.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {writingPlaceholders.map((entry) => (
            <article key={entry.title} className="rounded-sm border border-dashed border-line bg-[#fcfbf8] p-6">
              <h2 className="font-serif text-2xl">{entry.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
