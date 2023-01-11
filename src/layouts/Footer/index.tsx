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
      <div className="flex flex-col flex-wrap px-4 py-16 md:px-6 md:justify-between md:flex-row max-w-7xl mx-auto">
        <div className="w-full md:w-2/5 xl:w-2/4 md:pr-5 space-y-6">
          <Link to="/">
            <Logo className="w-40" />
          </Link>
          <p className="text-sm font-medium text-neutral-50 md:whitespace-pre-line">
            {t('components.footer.address')}
          </p>
          <a
            href={`mailto:${t('components.footer.email')}`}
            className="block text-sm font-medium text-primary-main  hover:underline hover:underline-offset-4"
          >
            {t('components.footer.email')}
          </a>
          <a
            href={`tel:${t('components.footer.phone.tel')}`}
            className="block text-sm font-medium text-primary-main hover:underline hover:underline-offset-4"
          >
            {t('components.footer.phone.display')}
          </a>
        </div>
        <div className="flex justify-center flex-col mt-6 md:w-1/2 md:pl-5 xl:w-2/5 md:mt-0 space-y-4">
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
          className="hidden space-y-3 lg:block"
          backgroundClassName="bg-white w-8 h-8"
          iconClassName="w-4 h-4 text-primary-main"
        />
        <div className="flex flex-col justify-between w-full mt-2 md:mt-6 md:items-center md:flex-row lg:mt-0 lg:hidden">
          <Social
            className="space-x-4"
            backgroundClassName="bg-white w-8 h-8"
            iconClassName="w-4 h-4 text-primary-main"
          />
          <div className="flex flex-col mt-6 space-y-4 text-left md:text-right md:mt-0">
            <p className="text-sm text-neutral-50">
              © {t('components.footer.copy-right')}
            </p>
            <p className="text-sm font-medium text-neutral-50">Cookie Policy</p>
          </div>
        </div>
        <hr className="hidden mt-7 lg:block h-px w-full border-0 bg-neutral-50" />
        <div className="items-center justify-between hidden w-full lg:flex mt-7">
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
