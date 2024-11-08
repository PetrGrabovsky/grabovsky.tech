import Link from 'next/link';
import Logo from './Logo';

const HeaderContent = () => {
  return (
    <div className='flex h-16 items-center justify-between'>
      <Link href='/' className='block h-full py-2'>
        <Logo />
      </Link>
      <span>Menu</span>
    </div>
  );
};

export default HeaderContent;
