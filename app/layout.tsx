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
      <body className="h-full max-w-full bg-[#F5F5F5]">
        <MantineProvider>
          <div className="container relative my-auto overflow-x-clip sm:overflow-x-visible xl:mx-auto xl:overflow-x-clip xl:overflow-y-visible xl:pl-12">
            {children}
          </div>
        </MantineProvider>
        <footer className="absolute -mt-2 w-full border-t-2 xl:bottom-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
