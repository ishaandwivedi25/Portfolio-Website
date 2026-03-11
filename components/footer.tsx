export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-6 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Ishaan Dwivedi</p>
        <p>Built with a calm editorial design language in Next.js.</p>
      </div>
    </footer>
  );
}
