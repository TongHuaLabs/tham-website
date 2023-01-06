import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UnderlineHeader from '@/components/UnderlineHeader';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { NewsCard } from '@/components/cards';

type NewsPageProps = PageProps<GatsbyTypes.NewsPageQuery>;

const NewsPage: React.FC<NewsPageProps> = ({ data }) => {
  const { t } = useTranslation();

  const news = data.allMarkdownRemark.edges;

  return (
    <MainLayout>
      {/* Section 1: ข่าวสารบริษัททั้งหมด */}
      <section className="px-4 py-20 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-20">
        <UnderlineHeader
          title={t('pages.news.section-1.header-1')}
          textClassName="text-4xl text-neutral-900"
          className="!items-start w-max md:pl-2"
          underlineClassName="!border-primary-main"
          heading="h1"
        />
        <div className="flex flex-col space-y-5 md:flex-wrap md:space-y-0 md:flex-row">
          {news.map(({ node }, key) => {
            const { title, description, date, cover, slug } =
              node.frontmatter || {};
            return (
              <NewsCard
                title={title}
                className="md:w-1/2 lg:w-1/3 md:p-2"
                description={description}
                coverImage={cover?.childImageSharp?.gatsbyImageData}
                createdAt={date}
                href={slug}
                key={key}
              />
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default NewsPage;

export const query = graphql`
  query NewsPage($language: String!) {
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
