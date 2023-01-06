import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UnderlineHeader from '@/components/UnderlineHeader';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { PrimaryButton } from '@/components/buttons';
import { MissionCard } from '@/components/cards';
import { StaticImage } from 'gatsby-plugin-image';
import { useMd } from '@/hooks/responsive';

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQuery>;

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const isMd = useMd();

  const missions = (language === 'th' ? data.missionsTH : data.missionsEN)
    ?.pages?.home?.section_2?.data?.missions;

  return (
    <MainLayout>
      {/* Section 1: Tong Hua Asset Management */}
      <section className="full-page bg-gradient-to-t from-sky-400 via-transparent to-transparent lg:bg-gradient-to-l">
        <div className="h-full flex flex-col justify-center lg:flex-row lg:justify-between items-center max-w-7xl mx-auto">
          <div className="h-1/2 lg:h-full px-4 md:px-6 lg:px-16 xl:px-28 2xl:px-0 w-full lg:w-1/2 flex flex-col justify-center space-y-10">
            <h1 className="font-bold text-primary-main text-4xl md:text-5xl lg:text-6xl whitespace-pre-line md:whitespace-normal lg:whitespace-pre-line">
              {t('pages.about.section-1.header-1')}
            </h1>
            <div className="bg-primary-main w-16 h-0.5" />
          </div>
          <div className="h-1/2 w-full lg:w-1/2 lg:h-full flex flex-col justify-center items-center">
            <StaticImage
              src="../images/icon-512x512.png"
              alt="thamc"
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Section 2: ดำเนินธุรกิจด้วยความซื่อสัตย์และมั่นคงพร้อมก้าวสู่ยุคใหม่เพื่อขยายธุรกิจให้เติบโตอย่างยั่งยืน */}
      <section className="bg-slate-600">
        <div className="px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-main text-center md:whitespace-pre-line">
            {t(
              isMd
                ? 'pages.about.section-2.md-header-1'
                : 'pages.about.section-2.header-1',
            )}
          </h2>
        </div>
      </section>

      {/* Section 3: เกี่ยวกับเรา */}
      <section className="px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-16 flex flex-col items-center lg:flex-row">
        <div className="flex flex-col items-start space-y-6 lg:w-3/4">
          <UnderlineHeader
            title={t('pages.about.section-3.header-1')}
            textClassName="text-4xl"
            className="!items-start"
            heading="h2"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `${t('pages.about.section-3.desc-1')}` || '<div />',
            }}
            className="about"
          />
          <p>{t('pages.about.section-3.desc-2')}</p>
        </div>
        <StaticImage
          src="../images/icon-512x512.png"
          alt="thamc"
          className="w-72 h-72 lg:w-1/4"
        />
      </section>

      {/* Section 4: พันธกิจ */}
      <section className="px-4 pb-28 lg:pb-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto flex flex-col items-center">
        <UnderlineHeader
          title={t('pages.home.section-2.header-1')}
          textClassName="text-4xl"
          heading="h2"
        />
        <p className="text-lg text-center mt-6">
          {t('pages.home.section-2.desc-1')}
        </p>
        <div className="md:w-3/4 lg:w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0 mt-16">
          {missions?.map((mission, key) => {
            const { title, desc, icon } = mission || {};
            return (
              <div key={key} className="w-full lg:w-1/3 lg:px-2.5">
                <MissionCard
                  icon={icon?.childImageSharp?.gatsbyImageData}
                  title={title}
                  desc={desc}
                  className="items-center text-center lg:items-start lg:text-left"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5: สนใจร่วมงานกับเรา */}
      <section className="border border-primary-main rounded-2xl mb-28 px-4 py-10 mx-4 md:mx-6 lg:mx-16 xl:mx-28 2xl:px-0 max-w-7xl 2xl:mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-around">
        <StaticImage
          src="../images/icon-512x512.png"
          alt="thamc"
          className="w-80"
        />
        <div className="mt-16 flex flex-col items-center lg:items-start lg:mt-0">
          <h2 className="text-4xl font-bold text-primary-main">
            {t('pages.about.section-4.header-1')}
          </h2>
          <h3 className="text-2xl text-neutral-900 mt-2 px-4 text-center lg:px-0">
            {t('pages.about.section-4.desc-1')}
          </h3>
          <Link to="/contact" className="mt-5">
            <PrimaryButton title={t('components.buttons.career')} />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage($language: String!) {
    missionsEN: enJson {
      pages {
        home {
          section_2 {
            data {
              missions {
                title
                desc
                icon {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
    missionsTH: thJson {
      pages {
        home {
          section_2 {
            data {
              missions {
                title
                desc
                icon {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
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
