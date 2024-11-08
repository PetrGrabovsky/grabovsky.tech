'use client';

import { ReactNode } from 'react';
import useIsMobileView from '@/hooks/useIsMobileView';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobileView = useIsMobileView();

  return (
    <Provider store={store}>
      <Header isMobileView={isMobileView} />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
