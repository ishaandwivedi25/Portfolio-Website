import Link from 'next/link';
import { Section } from '@/components/section';
import { siteMeta } from '@/data/site';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-20">
      <Section eyebrow="Contact" title="Let’s connect.">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-3 text-sm text-muted">
            <p className="leading-relaxed">
              I am open to conversations on product management, strategy, and analytics-led decision making.
            </p>
            <Link href={`mailto:${siteMeta.email}`} className="story-link block w-fit">
              {siteMeta.email}
            </Link>
            <Link href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="story-link block w-fit">
              LinkedIn
            </Link>
            <p>{siteMeta.phone}</p>
          </div>
          <form className="space-y-4 rounded-sm border border-line bg-[#fcfbf8] p-6" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted">
                Name
              </label>
              <input id="name" className="w-full border border-line bg-white px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted">
                Email
              </label>
              <input id="email" type="email" className="w-full border border-line bg-white px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted">
                Message
              </label>
              <textarea id="message" rows={4} className="w-full border border-line bg-white px-3 py-2 text-sm" />
            </div>
            <button type="button" className="border border-ink px-4 py-2 text-sm transition hover:bg-ink hover:text-paper">
              Send
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}
