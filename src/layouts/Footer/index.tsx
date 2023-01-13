import React from 'react';
import Logo from '@images/logo-navbar.inline.svg';
import Social from '@/components/Social';
import DisclosureNavigation from '@/layouts/navigation/DisclosureNavigation';
import { useRoute } from '@/hooks/useRoute';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const route = useRoute();
  const { t } = useTranslation();
  return (
    <footer className="bg-primary-pressed">
      <div className="flex flex-col flex-wrap px-4 py-16 md:px-6 md:justify-between md:flex-row max-w-7xl mx-auto space-y-10 md:space-y-0">
        <div className="space-y-6 md:flex-grow">
          <Link to="/">
            <Logo className="w-40" />
          </Link>
          <p className="text-sm font-medium text-neutral-50 md:whitespace-pre-line">
            {t('components.footer.address')}
          </p>
          <p className="text-sm font-medium text-neutral-50 md:whitespace-pre-line">
            {t('components.footer.email')}
          </p>
          <p className="text-sm font-medium text-neutral-50 md:whitespace-pre-line">
            {t('components.footer.phone.display')}
          </p>
        </div>
        <div className="flex justify-center flex-col space-y-4 md:w-32">
          {route.map(({ title, href, menu }, key) => (
            <DisclosureNavigation
              title={title}
              href={href}
              menu={menu}
              key={key}
            />
          ))}
        </div>
        <Social
          className="space-x-4 md:flex-col md:space-x-0 md:space-y-4"
          backgroundClassName="bg-white w-8 h-8"
          iconClassName="w-4 h-4 text-primary-main"
        />
        <hr className="hidden md:block h-px w-full border-0 bg-neutral-50 !mt-6" />
        <div className="w-full flex flex-col md:justify-between md:flex-row space-y-4 md:space-y-0 md:!mt-6">
          <p className="text-sm text-neutral-50">
            © {t('components.footer.copy-right')}
          </p>
          <p className="text-sm font-medium text-neutral-50">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
