import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/layout/Footer';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
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
      <body className='max-w-full h-full bg-[#F5F5F5]'>
        <MantineProvider>
          <main className="relative container my-auto overflow-x-clip sm:overflow-x-visible xl:overflow-x-clip xl:overflow-y-visible xl:pl-12 xl:mx-auto">
            {children}
          </main>
        </MantineProvider>
        <footer className="absolute bottom-0 w-full text-center text-xs sm:text-sm md:text-base lg:text-lg p-4 sm:p-5 md:p-6 lg:p-8 text-light-text">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
