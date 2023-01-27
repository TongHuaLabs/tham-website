import React from 'react';
import { graphql, PageProps } from 'gatsby';
import MainLayout from '@/layouts/MainLayout';
import UnderlineHeader from '@/components/UnderlineHeader';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { NewsCard } from '@/components/cards';
import Pagination from '@/components/Pagination';

export type NewsTemplatePageContext = {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  feedBasePath: string;
  feedRootPath?: string;
  gardenBasePath: string;
};

const NewsTemplate = ({
  data: { allMarkdownRemark },
  pageContext,
}: PageProps<GatsbyTypes.NewsTemplateQuery, NewsTemplatePageContext>) => {
  const { t } = useTranslation();

  const { currentPage, numPages } = pageContext;

  const news = allMarkdownRemark.nodes;

  if (!news.length) {
    return <div />;
  }

  return (
    <MainLayout>
      <section className="px-4 py-20 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-16 lg:space-y-10">
        <UnderlineHeader
          title={t('pages.news.section-1.header-1')}
          textClassName="text-4xl text-neutral-900"
          className="!items-start w-max md:pl-2"
          heading="h1"
        />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {news.map(({ frontmatter }, key) => {
            const { title, description, date, cover, slug } = frontmatter || {};
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
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          feedBasePath="/news"
          feedRootPath="/news"
        />
      </section>
    </MainLayout>
  );
};

export default NewsTemplate;

export const pageQuery = graphql`
  query NewsTemplate($language: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: { category: { eq: "news" }, lang: { eq: $language } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        html
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
