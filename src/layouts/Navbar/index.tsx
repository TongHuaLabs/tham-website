import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import classNames from 'classnames';
import Logo from '@images/THAM-logo.inline.svg';
import PopoverNavigation from '@/layouts/navigation/PopoverNavigation';
import { useRoute } from '@/hooks/useRoute';
import MenuIcon from '@/icons/hamburger-menu.inline.svg';
import CloseIcon from '@/icons/close.inline.svg';

type NavbarProps = {
  showClose: boolean;
  className?: string;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  showClose,
  className,
  onMenuClick,
  onCloseClick,
}) => {
  const route = useRoute();
  return (
    <nav
      className={classNames(
        `flex justify-center h-16 bg-white ${!showClose && 'shadow-md'}`,
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto w-full">
        <Link to="/">
          <Logo className="w-40 h-full" />
        </Link>
        <ul className="flex items-center h-full space-x-6">
          {route.map(({ title, href, menu }, key) => (
            <PopoverNavigation
              key={key}
              title={title}
              href={href}
              menu={menu}
              className="hidden lg:block"
            />
          ))}
          <li className="block lg:hidden">
            {showClose ? (
              <CloseIcon
                onClick={onCloseClick}
                className="cursor-pointer w-9 h-9 text-neutral-900"
              />
            ) : (
              <MenuIcon
                onClick={onMenuClick}
                className="cursor-pointer w-9 h-9 text-neutral-900"
              />
            )}
          </li>
          {/* <ChangeLocale /> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
