import { useState, useEffect } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

export type RouteType = {
  title: string;
  href?: string;
  menu?: {
    title: string;
    href: string;
    indent?: boolean;
  }[];
};

const routeTH: RouteType[] = [
  { title: 'หน้าหลัก', href: '/' },
  { title: 'เกี่ยวกับบริษัท', href: '/about' },
  { title: 'ข่าวสารและสื่อ', href: '/news' },
  { title: 'ติดต่อเรา', href: '/contact' },
];

const routeEN: RouteType[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'News', href: '/news' },
  { title: 'Contact', href: '/contact' },
];

export const useRoute = () => {
  const { language } = useI18next();
  const [routeList, setRouteList] = useState<RouteType[]>([]);

  useEffect(() => {
    language === 'th' ? setRouteList(routeTH) : setRouteList(routeEN);
  }, [language]);

  return routeList;
};
