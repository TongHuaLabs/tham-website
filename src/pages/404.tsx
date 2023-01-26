import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { PrimaryButton, OutlineButton } from '@/components/buttons';
import { graphql, navigate } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <section className="full-page bg-gradient-to-b from-primary-focus/10 to-transparent">
        <div className="h-full flex flex-col justify-center space-y-16 items-center px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-4 items-center">
            <StaticImage src="../images/404.png" alt="404 NotFound" />
            <h1 className="text-2xl md:text-4xl font-medium text-primary-main">
              Page not found
            </h1>
          </div>
          <div className="flex flex-col space-y-10 w-full">
            <h2 className="text-neutral-900 font-bold text-2xl md:text-4xl text-center whitespace-pre-wrap md:whitespace-normal">
              {t('pages.notfound.section-1.header-1')}
            </h2>
            <div className="flex items-center justify-between w-full 2xl:w-2/3 2xl:mx-auto">
              <Link to="/" className="w-[48.5%]">
                <PrimaryButton
                  title={t('components.buttons.go-to-home')}
                  className="w-full justify-center"
                />
              </Link>
              <OutlineButton
                title={t('components.buttons.go-back')}
                className="w-[48.5%] border-primary-main text-primary-main font-bold hover:bg-primary-main hover:text-neutral-50 delay-100"
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { eq: "translation" } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
