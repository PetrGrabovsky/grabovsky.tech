import clsx from 'clsx';
import HeaderContent from './HeaderContent';

const Header = () => {
  return (
    <header
      className={clsx('primary-background h-16 border-b bg-gradient-to-b')}
    >
      <div className='container'>
        <HeaderContent />
      </div>
    </header>
  );
};

export default Header;
