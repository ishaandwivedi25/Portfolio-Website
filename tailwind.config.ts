import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f8f6f1',
        ink: '#1f1f1d',
        muted: '#57544e',
        line: '#d9d4ca',
        accent: '#5d6d57'
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)']
      },
      boxShadow: {
        subtle: '0 14px 32px rgba(25, 24, 22, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
