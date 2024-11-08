import clsx from 'clsx';
import HeaderContent from './HeaderContent';

interface HeaderProps {
  isMobileView: boolean;
}

const Header = ({ isMobileView }: HeaderProps) => {
  return (
    <header
      className={clsx('primary-background h-16 border-b bg-gradient-to-b')}
    >
      <div className='container'>
        <HeaderContent isMobileView={isMobileView} />
      </div>
    </header>
  );
};

export default Header;
