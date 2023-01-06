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
      <div className="full-page items-center flex justify-center lg:justify-between flex-col lg:flex-row px-4 py-10 md:px-24 lg:px-20 max-w-7xl mx-auto">
        <StaticImage
          src="../images/404-unplugged.svg"
          alt="404 NotFound"
          className="w-4/5 lg:w-[45%] self-end lg:self-center"
        />
        <div className="flex flex-col space-y-10 lg:w-[45%]">
          <StaticImage
            src="../images/404-state.svg"
            alt="404 NotFound"
            className="w-1/2 lg:w-full lg:self-center"
          />
          <div className="flex flex-col">
            <h1 className="text-neutral-900 font-bold text-xl md:text-3xl">
              {t('pages.notfound.section-1.header-1')}
            </h1>
            <p className="border-b-2 border-primary-main border w-12" />
          </div>
          <div className="flex items-center justify-between w-full">
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
