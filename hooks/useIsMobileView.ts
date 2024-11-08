import { useState, useEffect } from 'react';

const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = () => setIsMobileView(!mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isMobileView;
};

export default useIsMobileView;
