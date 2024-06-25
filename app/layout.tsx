import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/layout/Footer';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Linkta',
  description: 'Revolutionize your learning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className='min-h-screen w-dvw bg-[#F5F5F5]'>
        <MantineProvider>
          <main className="min-h-screen w-dvw">
            {children}
          </main>
        </MantineProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
