import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UnderlineHeader from '@/components/UnderlineHeader';
import { useI18next, useTranslation, Link } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { MissionCard } from '@/components/cards';
import { StaticImage } from 'gatsby-plugin-image';
import QuoteSVG from '@/icons/quote.inline.svg';
import { PrimaryButton } from '@/components/buttons';
import Partner from '@/images/partner-vector.inline.svg';
import THAMSquareSVG from '@/images/THAM-logo-square.inline.svg';
import Seo from '@/components/Seo';

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQuery>;

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const isThaiLang = language === 'th';

  const missions = (isThaiLang ? data.missionsTH : data.missionsEN)?.pages?.home
    ?.section_2?.data?.missions;

  const info = (isThaiLang ? data.infoTH : data.infoEN)?.pages?.about?.section_2
    ?.data?.info;

  return (
    <MainLayout>
      <Seo title={t('seo.about.title')} description={t('seo.about.desc')} />
      {/* Section 1: บริษัทบริหารสินทรัพย์ ที่มีประสิทธิภาพ โปร่งใส และเติบโตอย่างมีเสถียรภาพยั่งยืน */}
      <section className="flex flex-col lg:flex-row">
        <div className="relative lg:w-1/2 flex justify-center items-center px-4 py-20 md:px-6 lg:px-10 xl:px-16 2xl:px-32">
          <THAMSquareSVG className="w-3/4 md:w-1/2 lg:w-3/4 max-w-md mx-auto relative z-20 h-full" />
          <div className="bg-primary-pressed/90 absolute z-10 inset-0 w-full h-full" />
          <StaticImage
            src="../images/THH-Building.png"
            alt="Tong Hua Building"
            className="w-full h-full object-cover !absolute z-0 inset-0"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col items-center justify-center px-4 py-20 md:px-6 lg:px-10 xl:px-16 2xl:px-32 space-y-8">
          <QuoteSVG className="text-primary-focus w-20 h-20 self-start" />
          <h2 className="text-3xl font-bold text-primary-main text-center leading-normal">
            {t('pages.about.section-1.header-1')}
          </h2>
          <QuoteSVG className="text-primary-focus w-20 h-20 self-end rotate-180" />
        </div>
      </section>

      {/* Section 2: เกี่ยวกับเรา */}
      <section className="bg-primary-focus">
        <div className="px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto flex flex-col items-center md:items-start space-y-10">
          <UnderlineHeader
            title={t('pages.about.section-2.header-1')}
            textClassName="text-4xl text-neutral-900"
            className="md:items-start"
            heading="h2"
          />
          <div className="space-y-5">
            {info?.map((item, key) => (
              <p key={key} className="text-lg text-neutral-900">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: พันธกิจ */}
      <section className="flex flex-col justify-center items-center px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
        <UnderlineHeader
          title={t('pages.home.section-2.header-1')}
          textClassName="text-4xl text-neutral-900"
          heading="h2"
        />
        <p className="text-xl lg:text-2xl text-center text-neutral-900 mt-6">
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
                  className="items-center text-center"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: สนใจร่วมงานกับเรา */}
      {/* <section className="border border-primary-main rounded-2xl mb-28 px-10 py-10 mx-4 md:mx-6 lg:mx-16 xl:mx-28 max-w-7xl 2xl:mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-around">
        <div className="lg:w-1/2 flex justify-end lg:pr-10">
          <Partner className="w-full md:w-1/2 h-full lg:w-full mx-auto" />
        </div>
        <div className="mt-16 flex flex-col items-center lg:items-start lg:mt-0 text-center">
          <h2 className="text-4xl font-bold text-primary-main">
            {t('pages.about.section-5.header-1')}
          </h2>
          <h3 className="text-2xl text-neutral-900 mt-4 text-center lg:text-left lg:px-0">
            {t('pages.about.section-5.desc-1')}
          </h3>
          <Link to="/career" className="mt-5">
            <PrimaryButton title={t('components.buttons.career')} />
          </Link>
        </div>
      </section> */}

      {/* Section 5: Partner with us */}
      <section className="bg-primary-focus">
        <div className="px-4 py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-20 lg:flex-row-reverse">
          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse space-y-16 lg:space-y-0">
            <div className="lg:w-1/2 2xl:w-auto flex justify-end">
              <Partner className="w-full md:w-1/2 h-full lg:w-full mx-auto" />
            </div>
            <div className="flex flex-col items-center lg:items-start lg:pr-4 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-main">
                {t('pages.about.section-5.header-1')}
              </h2>
              <h3 className="text-2xl mt-4">
                {t('pages.about.section-5.desc-1')}
              </h3>
              <Link to="/contact" className="mt-10">
                <PrimaryButton title={t('components.buttons.contact')} />
              </Link>
            </div>
          </div>
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
    infoEN: enJson {
      pages {
        about {
          section_2 {
            data {
              info
            }
          }
        }
      }
    }
    infoTH: thJson {
      pages {
        about {
          section_2 {
            data {
              info
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
