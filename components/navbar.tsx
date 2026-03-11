'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5 md:px-8">
        <Link href="/" className="font-serif text-xl text-ink">
          Ishaan Dwivedi
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-sm transition-colors ${
                  active ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-ink transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
