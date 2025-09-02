import { Inconsolata, M_PLUS_1p } from 'next/font/google';

export const inconsolata = Inconsolata({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inconsolata',
  fallback: ['Courier New', 'Courier', 'monospace'],
  subsets: ['latin'],
});

export const mPlus = M_PLUS_1p({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-m-plus',
  display: 'swap',
});
