'use client';

import { ReactNode } from 'react';
import useIsMobileView from '@/hooks/useIsMobileView';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobileView = useIsMobileView();

  return (
    <>
      <Header isMobileView={isMobileView} />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
