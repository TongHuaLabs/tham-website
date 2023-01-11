import { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

export const useActiveMenu = (title: string) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (
      (pathname === '/' ||
        pathname === '/th' ||
        pathname === '/th/' ||
        pathname === '/en' ||
        pathname === '/en/') &&
      (title === 'หน้าหลัก' || title === 'Home')
    ) {
      setIsActive(true);
    } else if (
      pathname.includes('/about') &&
      (title === 'เกี่ยวกับบริษัท' || title === 'About')
    ) {
      setIsActive(true);
    } else if (
      pathname.includes('/news') &&
      (title === 'ข่าวสารบริษัท' || title === 'News')
    ) {
      setIsActive(true);
    } else if (
      pathname.includes('/contact') &&
      (title === 'ติดต่อเรา' || title === 'Contact')
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, title]);

  return isActive;
};
