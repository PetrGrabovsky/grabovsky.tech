import clsx from 'clsx';
import HeaderContent from './HeaderContent';

const Header = () => {
  return (
    <header
      className={clsx(
        'from-background-primary to-background-secondary',
        'h-16 border-b border-accent-primary shadow-shadow-primary',
        'bg-gradient-to-b'
      )}
    >
      <div className='container'>
        <HeaderContent />
      </div>
    </header>
  );
};

export default Header;
