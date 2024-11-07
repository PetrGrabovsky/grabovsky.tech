import { ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='cs'>
      <body className='antialiased'>{children}</body>
    </html>
  );
};

export default RootLayout;
