import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Omeir Mustafa | Conversion-Focused Web Systems',
  description: 'I architect high-trust website rebuilds for founders and scaling teams. Turn your digital presence into a predictable revenue engine.',
  openGraph: {
    title: 'Omeir Mustafa | Revenue Architecture',
    description: 'High-trust website rebuilds for founders and scaling teams.',
    url: 'https://omeirmustafa.com',
    siteName: 'Omeir Mustafa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Omeir Mustafa Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omeir Mustafa | Revenue Architecture',
    description: 'High-trust website rebuilds for founders and scaling teams.',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://omeirmustafa.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#F1F5F9] text-slate-800 antialiased`}>
        <ScrollToTop />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
