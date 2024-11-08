import { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='cs'>
      <body
        className={clsx(
          inter.className,
          'flex min-h-screen bg-background-body text-text-primary',
          'flex-col overflow-x-hidden antialiased'
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
