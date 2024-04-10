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
      <body className="w-10/12 flex flex-col m-auto">
        <MantineProvider>
          <header>
            <LinktaLogoWithText />
          </header>
          <main className="flex flex-col my-3">{children}</main>
          {/* <footer className="sm:flex flex-col">
            <Footer />
          </footer> */}
        </MantineProvider>
      </body>
    </html>
  );
}
