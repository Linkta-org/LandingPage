import type { Metadata } from 'next';
import './styles/globals.css';
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
      <body>
        <MantineProvider>
          <main>{children}</main>
        </MantineProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
