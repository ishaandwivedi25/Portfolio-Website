import { ReactNode } from 'react';

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = ''
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line/70 py-20 md:py-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted">{eyebrow}</p>}
          {title && <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
