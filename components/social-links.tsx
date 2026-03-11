import Link from 'next/link';
import { siteMeta } from '@/data/site';

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
      <Link className="story-link" href={`mailto:${siteMeta.email}`}>
        Email
      </Link>
      <Link className="story-link" href={siteMeta.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </Link>
      <Link className="story-link" href={`tel:${siteMeta.phone.replace(/\s+/g, '')}`}>
        {siteMeta.phone}
      </Link>
    </div>
  );
}
