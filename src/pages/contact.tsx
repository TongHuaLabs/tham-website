import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UnderlineHeader from '@/components/UnderlineHeader';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid';
import PhoneCall from '@/components/PhoneCall';
import MailTo from '@/components/MailTo';
import { BranchCard } from '@/components/cards';
import { PrimaryButton } from '@/components/buttons';
import Partner from '@/images/partner-vector.inline.svg';

type ContactUsPageProps = PageProps<GatsbyTypes.ContactUsPageQuery>;

const ContactUsPage: React.FC<ContactUsPageProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const { contactInfoTH, contactInfoEN, branchesTH, branchesEN } = data;

  const branches = (language === 'th' ? branchesTH : branchesEN)?.pages
    ?.contact_us?.section_2?.data?.branches;

  const { address, working_time, main_contact, operation_contact } =
    (language === 'th' ? contactInfoTH : contactInfoEN)?.pages?.contact_us
      ?.section_1?.data || {};

  const { title: mTitle, phone: mPhone, mail: mMail } = main_contact || {};
  const { title: oTitle, phone: oPhone, mail: oMail } = operation_contact || {};

  return (
    <MainLayout>
      {/* Section 1: ติดต่อเรา */}
      <section className="flex flex-col items-start px-4 pt-20 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title={t('pages.contact-us.section-1.header-1')}
          textClassName="text-4xl text-neutral-900"
          heading="h1"
          className="!items-start"
        />
        <h3 className="text-2xl font-bold">
          {t('pages.contact-us.section-1.desc-1')}
        </h3>

        <div className="w-full lg:h-72 flex flex-col items-start lg:items-center lg:space-x-6 space-y-10 lg:space-y-0 lg:flex-row">
          <div className="w-full flex lg:h-full flex-col space-y-10 lg:w-3/5 lg:justify-between lg:space-y-0">
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
              <div className="w-full md:w-1/2 flex flex-col">
                <span className="w-max bg-primary-main px-4 py-1 text-neutral-50 rounded-full text-base font-bold">
                  {mTitle}
                </span>
                <PhoneCall
                  phone={mPhone?.display}
                  tel={mPhone?.tel}
                  className="mt-4"
                />
                <MailTo mail={mMail} className="mt-2" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <span className="w-max bg-primary-main px-4 py-1 text-neutral-50 rounded-full text-base font-bold">
                  {oTitle}
                </span>
                <PhoneCall
                  phone={oPhone?.display}
                  tel={oPhone?.tel}
                  className="mt-4"
                />
                <MailTo mail={oMail} className="mt-2" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col space-y-4 md:space-y-0 lg:space-y-4 items-start">
              <div className="w-full md:w-1/2 lg:w-full flex flex-row items-center space-x-4">
                <ClockIcon className="w-8 h-8 text-neutral-900" />
                <span className="whitespace-pre-line w-11/12">
                  {working_time}
                </span>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex flex-row items-center space-x-4">
                <MapPinIcon className="w-8 h-8 text-neutral-900" />
                <span className="whitespace-pre-line w-11/12">{address}</span>
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-2/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
              className="w-full h-80 md:h-72 lg:h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Section 2: ติดต่อศูนย์บริการลูกค้า */}
      <section className="flex flex-col items-start px-4 py-20 md:px-6 lg:py-28 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title={t('pages.contact-us.section-2.header-1')}
          textClassName="text-4xl text-neutral-900"
          heading="h2"
          className="!items-start"
          underlineClassName="!border-primary-main"
        />
        <div className="w-full flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {branches?.map((branch, key) => {
            return (
              <div className="md:w-1/2 xl:w-1/3 md:p-1.5" key={key}>
                <BranchCard {...branch} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Partner with us */}
      <section className="bg-primary-focus">
        <div className="px-4 py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-20 lg:flex-row-reverse">
          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse space-y-16 lg:space-y-0">
            <div className="lg:w-1/2 2xl:w-auto flex justify-end">
              <Partner className="w-full md:w-1/2 h-full lg:w-full mx-auto" />
            </div>
            <div className="flex flex-col items-center lg:items-start lg:pr-4 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-main">
                {t('pages.contact-us.section-3.header-1')}
              </h2>
              <h3 className="text-2xl mt-4">
                {t('pages.contact-us.section-3.desc-1')}
              </h3>
              <Link to="/career" className="mt-10">
                <PrimaryButton title={t('components.buttons.contact-us')} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUsPage;

export const query = graphql`
  query ContactUsPage($language: String!) {
    contactInfoTH: thJson {
      pages {
        contact_us {
          section_1 {
            data {
              working_time
              address
              main_contact {
                title
                mail
                phone {
                  display
                  tel
                }
              }
              operation_contact {
                title
                mail
                phone {
                  display
                  tel
                }
              }
            }
          }
        }
      }
    }
    contactInfoEN: enJson {
      pages {
        contact_us {
          section_1 {
            data {
              working_time
              address
              main_contact {
                title
                mail
                phone {
                  display
                  tel
                }
              }
              operation_contact {
                title
                mail
                phone {
                  display
                  tel
                }
              }
            }
          }
        }
      }
    }
    branchesTH: thJson {
      pages {
        contact_us {
          section_2 {
            data {
              branches {
                location
                branch
                email
                line {
                  display
                  href
                }
                phone {
                  display
                  tel
                }
              }
            }
          }
        }
      }
    }
    branchesEN: enJson {
      pages {
        contact_us {
          section_2 {
            data {
              branches {
                location
                branch
                email
                line {
                  display
                  href
                }
                phone {
                  display
                  tel
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