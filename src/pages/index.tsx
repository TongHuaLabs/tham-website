import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UnderlineHeader from '@/components/UnderlineHeader';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { PrimaryButton } from '@/components/buttons';
import { MissionCard } from '@/components/cards';
import { StaticImage } from 'gatsby-plugin-image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import NewsCard from '@/components/cards/NewsCard';
import PhoneCall from '@/components/PhoneCall';
import MailTo from '@/components/MailTo';

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery>;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const missions = (language === 'th' ? data.missionsTH : data.missionsEN)
    ?.pages?.home?.section_2?.data?.missions;

  const news = data.allMarkdownRemark.edges;

  const { contact: contactInfo } =
    data.contactInfo?.pages?.home?.section_5?.data || {};

  const { phone, email } = contactInfo || {};

  return (
    <MainLayout>
      {/* Section 1: Tong Hua Asset Management */}
      <section className="full-page flex justify-center bg-gradient-to-t from-primary-main via-transparent to-transparent">
        <div className="w-full flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center space-y-10 md:space-y-16 px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <div className="flex flex-col">
            <div className="bg-blue-500 w-36 h-36 md:w-96 md:h-96" />
          </div>
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
            <h1 className="font-semibold text-primary-main text-4xl md:text-6xl whitespace-pre-line">
              {t('pages.home.section-1.header-1')}
            </h1>
            <h2 className="text-primary-main text-xl md:text-2xl mt-4">
              {t('pages.home.section-1.desc-1')}
            </h2>
            <Link to="/contact" className="mt-10 lg:mt-16">
              <PrimaryButton title={t('components.buttons.about-us')} />
            </Link>
          </div>
        </div>
      </section>
      {/* Section 2: Missions */}
      <section className="flex flex-col justify-center items-center space-y-10 md:space-y-16 px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
        <UnderlineHeader
          title={t('pages.home.section-2.header-1')}
          textClassName="text-4xl"
          heading="h2"
        />
        <p className="text-lg text-center">
          {t('pages.home.section-2.desc-1')}
        </p>
        <div className="md:w-3/4 lg:w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0">
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
      {/* Section 3: Services */}
      <section className="bg-primary-border">
        <div className="flex flex-col justify-center items-center space-y-16 px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <UnderlineHeader
            title={t('pages.home.section-3.header-1')}
            textClassName="text-4xl"
            heading="h2"
          />
          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse space-y-16 lg:space-y-0">
            <div className="lg:w-1/2 flex justify-end">
              <StaticImage src="../images/services.png" alt="service" />
            </div>
            <div className="flex flex-col items-center lg:items-start lg:pr-4">
              <h2 className="text-neutral-900 text-3xl font-bold mt-4">
                {t('pages.home.section-3.header-2')}
              </h2>
              <p className="text-lg md:text-xl mt-2 text-center lg:text-left">
                {t('pages.home.section-3.desc-2')}
              </p>
              <Link to="/services" className="mt-10">
                <PrimaryButton
                  title={t('components.buttons.read-more')}
                  rightIcon={<ArrowRightIcon className="w-4 h-4" />}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: News */}
      {news.length > 0 && (
        <section className="flex flex-col justify-center items-center px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-16">
          <UnderlineHeader
            title={t('pages.home.section-4.header-1')}
            textClassName="text-4xl"
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
          className="w-full h-80 border-0 md:w-1/2 md:h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col h-80 bg-primary-surface md:w-1/2 px-6 lg:px-24 xl:px-32 md:px-8 md:h-96 justify-center items-start space-y-10">
          {/* ข้อมูลการติดต่อ */}
          <UnderlineHeader
            title={t('pages.home.section-5.header-1')}
            className="text-4xl font-bold !items-start"
            heading="h2"
          />
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
          </div>
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
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { lang: { eq: $language } } }) {
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
