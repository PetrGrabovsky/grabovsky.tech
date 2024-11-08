import Link from 'next/link';
import Logo from './Logo';
import MenuButton from './MenuButton';

interface HeaderContentProps {
  isMobileView: boolean;
}

const HeaderContent = ({ isMobileView }: HeaderContentProps) => {
  return (
    <div className='flex h-16 items-center justify-between'>
      <Link
        href='/'
        aria-label='Logo grabovsky.tech, přejít na domovskou stránku'
        className='block h-full py-2'
      >
        <Logo />
      </Link>
      {isMobileView && <MenuButton />}
    </div>
  );
};

export default HeaderContent;
