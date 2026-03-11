import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Ishaan Dwivedi | Product, Strategy, Technology, Analytics',
  description:
    'Personal portfolio of Ishaan Dwivedi, showcasing work in product management, strategy, analytics, and technology.',
  openGraph: {
    title: 'Ishaan Dwivedi | Portfolio',
    description:
      'Personal portfolio focused on product management, strategic planning, and analytics-led decision making.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${serif.variable} ${sans.variable} bg-paper font-sans text-ink antialiased`}>
        <Navbar />
        <main className="mx-auto min-h-screen w-full max-w-5xl px-6 md:px-8">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
