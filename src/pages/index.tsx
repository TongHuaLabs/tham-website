import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UnderlineHeader from '@/components/UnderlineHeader';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { PrimaryButton } from '@/components/buttons';
import { MissionCard } from '@/components/cards';
import { StaticImage } from 'gatsby-plugin-image';
import NewsCard from '@/components/cards/NewsCard';
import PhoneCall from '@/components/PhoneCall';
import MailTo from '@/components/MailTo';
import Line from '@/components/Line';
import Seo from '@/components/Seo';
import THAMSVG from '@/images/THAM-logo-mark.inline.svg';
import ShakeHandSVG from '@/images/shakehand.inline.svg';
import StrategySVG from '@/images/strategy.inline.svg';
import TargetSVG from '@/images/target.inline.svg';

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery>;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const isThaiLang = language === 'th';

  const missions = (isThaiLang ? data.missionsTH : data.missionsEN)?.pages?.home
    ?.section_2?.data?.missions;

  const news = data.allMarkdownRemark.edges;

  const { contact: contactInfo } =
    data.contactInfo?.pages?.home?.section_5?.data || {};

  const { phone, email, line } = contactInfo || {};

  return (
    <MainLayout>
      <Seo title={t('seo.home.title')} description={t('seo.home.desc')} />
      {/* Section 1: Tong Hua Asset Management */}
      <section className="relative full-page flex justify-center">
        <div className="bg-gradient-to-b lg:bg-gradient-to-bl from-transparent to-primary-focus/50 absolute z-10 w-full h-full" />
        <StaticImage
          src="../images/welcome-home-image.png"
          alt="Tong Hua Asset Management"
          className="w-full h-full object-cover absolute z-0 opacity-20"
        />
        <div className="absolute z-20 w-full h-full flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center space-y-10 md:space-y-16 lg:space-y-0 px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <div className="h-1/2 lg:h-full flex flex-col justify-center items-center lg:items-end lg:w-[30%]">
            <THAMSVG className="w-3/4 lg:w-full" />
          </div>
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start lg:w-[70%] lg:pr-10">
            <h1 className="font-semibold text-primary-pressed text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl whitespace-pre-line !leading-normal">
              {t('pages.home.section-1.header-1')}
            </h1>
            <h2 className="text-primary-pressed text-lg md:text-2xl mt-4">
              {t('pages.home.section-1.desc.desc-1')}{' '}
              <strong>
                <q>{t('pages.home.section-1.desc.desc-2')}</q>
              </strong>{' '}
              {t('pages.home.section-1.desc.desc-3')}
            </h2>
            <Link to="/about" className="mt-10">
              <PrimaryButton title={t('components.buttons.about-us')} />
            </Link>
          </div>
        </div>
      </section>
      {/* Section 2: Missions */}
      <section className="flex flex-col justify-center items-center px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
        <UnderlineHeader
          title={t('pages.home.section-2.header-1')}
          textClassName="text-4xl text-neutral-900"
          heading="h2"
        />
        <p className="text-xl lg:text-2xl text-center text-neutral-900 mt-6">
          {t('pages.home.section-2.desc.desc-1')}{' '}
          <strong>{t('pages.home.section-2.desc.desc-2')}</strong>{' '}
          {t('pages.home.section-2.desc.desc-3')}
        </p>
        <div className="md:w-3/4 lg:w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0 mt-16">
          {missions?.map((mission, key) => {
            const { title, desc_1, desc_2, desc_3 } = mission || {};
            const { icon, desc } =
              key <= 1
                ? {
                    icon:
                      key === 0 ? (
                        <StrategySVG className="w-10 h-10" />
                      ) : (
                        <TargetSVG className="w-10 h-10" />
                      ),
                    desc: (
                      <p className="text-nuetral-900 line-clamp-4 mt-2">
                        {desc_1} <strong>{desc_2}</strong> {desc_3}
                      </p>
                    ),
                  }
                : {
                    icon: <ShakeHandSVG className="w-10 h-10" />,
                    desc: (
                      <p className="text-nuetral-900 line-clamp-4 mt-2">
                        <strong>{desc_1}</strong> {desc_2}
                      </p>
                    ),
                  };

            return (
              <div key={key} className="w-full lg:w-1/3 lg:px-2.5">
                <MissionCard
                  icon={icon}
                  title={title}
                  desc={desc}
                  className="items-center text-center"
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* Section 3: Services */}
      <section className="bg-primary-focus">
        <div className="flex flex-col justify-center items-center space-y-16 px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <UnderlineHeader
            title={t('pages.home.section-3.header-1')}
            textClassName="text-4xl text-neutral-900"
            heading="h2"
          />
          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse space-y-16 lg:space-y-0">
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <StaticImage
                src="../images/our-service-vector.svg"
                alt="service"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-start lg:items-start lg:pr-10 lg:w-3/5 space-y-4">
              <div className="flex flex-col items-start justify-start list-disc space-y-4">
                <p className="text-lg text-left lg:text-left text-neutral-900">
                  <strong>{t('pages.home.section-3.desc-1')}</strong>{' '}
                  {t('pages.home.section-3.desc-2')}
                </p>
                <p className="text-lg text-left lg:text-left text-neutral-900">
                  {t('pages.home.section-3.desc-3')}
                </p>
                <p className="text-lg text-left lg:text-left text-neutral-900">
                  <strong>
                    <i>{t('pages.home.section-3.desc-4')}</i>
                  </strong>
                </p>
                <p className="text-lg text-left lg:text-left text-neutral-900">
                  {t('pages.home.section-3.desc-5')}
                </p>
                <p className="text-lg text-left lg:text-left text-neutral-900">
                  <strong>
                    <i>
                      {t('pages.home.section-3.desc-6')}{' '}
                      <a
                        href={t('pages.home.section-3.desc-7.url')}
                        className="hover:text-primary-main"
                      >
                        {t('pages.home.section-3.desc-7.display')}
                      </a>
                    </i>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: News */}
      {news.length > 0 && (
        <section className="flex flex-col justify-center items-center px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-10">
          <UnderlineHeader
            title={t('pages.home.section-4.header-1')}
            textClassName="text-4xl text-neutral-900"
            heading="h2"
          />
          <div className="w-full flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
            {news.map(({ node }, key) => {
              const { title, description, date, cover, slug } =
                node.frontmatter || {};
              return (
                <NewsCard
                  title={title}
                  className="md:w-1/2 lg:w-1/3 md:p-4"
                  description={description}
                  coverImage={cover?.childImageSharp?.gatsbyImageData}
                  createdAt={date}
                  href={slug}
                  key={key}
                />
              );
            })}
          </div>
          <Link to="/news">
            <PrimaryButton title={t('components.buttons.all-news')} />
          </Link>
        </section>
      )}
      {/* Section 5: Contact Us */}
      <section className="flex flex-col-reverse md:flex-row-reverse">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
          className="w-full first-line:border-0 md:w-1/2 h-[430px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col bg-primary-focus md:w-1/2 px-6 py-20 h-[430px] lg:px-24 xl:px-32 md:px-8 justify-between items-start space-y-10">
          <UnderlineHeader
            title={t('pages.home.section-5.header-1')}
            className="text-4xl font-bold !items-start text-neutral-900"
            heading="h2"
          />
          <div className="space-y-4">
            <p className="text-xl text-left text-primary-main">
              <strong>{t('pages.home.section-5.desc-1')}</strong>
            </p>
            <div className="space-y-2">
              {phone?.map((info, key) => {
                const { tel, display } = info || {};
                return (
                  <PhoneCall
                    key={key}
                    phone={display}
                    tel={tel}
                    className="text-xl font-medium"
                  />
                );
              })}
              <MailTo mail={email} className="text-xl font-medium" />
              <Line
                line={line?.display}
                url={line?.url}
                className="text-xl font-medium"
              />
            </div>
          </div>
          <Link to="/contact">
            <PrimaryButton title={t('components.buttons.contact-us')} />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($language: String!) {
    missionsEN: enJson {
      pages {
        home {
          section_2 {
            data {
              missions {
                title
                desc_1
                desc_2
                desc_3
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
                desc_1
                desc_2
                desc_3
              }
            }
          }
        }
      }
    }
    contactInfo: thJson {
      pages {
        home {
          section_5 {
            data {
              contact {
                phone {
                  tel
                  display
                }
                email
                line {
                  display
                  url
                }
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "news" }, lang: { eq: $language } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "DD MMMM YYYY")
            slug
            cover {
              childImageSharp {
                gatsbyImageData
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
