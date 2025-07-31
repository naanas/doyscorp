// src/app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Import global CSS

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DoysCorp - Freelance Mobile & Web Developer',
  description: 'Wujudkan ide Anda menjadi aplikasi mobile dan web yang menakjubkan.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}