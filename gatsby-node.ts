import { GatsbyNode } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@icons': path.resolve(__dirname, 'src/icons'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

type AllMarkdownRemark = {
  edges: Array<{
    node: {
      frontmatter: {
        lang: string;
        slug: string;
      };
    };
  }>;
};

type GatsbyNodeQuery = {
  allMarkdownRemark: AllMarkdownRemark;
  THAllMarkdownRemark: AllMarkdownRemark;
  ENAllMarkdownRemark: AllMarkdownRemark;
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<GatsbyNodeQuery>(`
    {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "news" } } }) {
        edges {
          node {
            frontmatter {
              lang
              slug
            }
          }
        }
      }
      THAllMarkdownRemark: allMarkdownRemark(
        filter: {
          frontmatter: { lang: { eq: "th" }, category: { eq: "news" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              lang
              slug
            }
          }
        }
      }
      ENAllMarkdownRemark: allMarkdownRemark(
        filter: {
          frontmatter: { lang: { eq: "en" }, category: { eq: "news" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              lang
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    return Promise.reject(errors);
  }

  const { allMarkdownRemark, THAllMarkdownRemark, ENAllMarkdownRemark } =
    data || {};

  allMarkdownRemark?.edges.forEach(({ node }) => {
    const { frontmatter } = node;
    const { slug } = frontmatter;

    actions.createPage({
      path: slug,
      component: path.resolve('src', 'templates', 'MarkdownTemplate.tsx'),
      context: {
        slug,
      },
    });
  });

  if (THAllMarkdownRemark && ENAllMarkdownRemark) {
    const postPerPage = 3;
    const numPagesTH = Math.ceil(
      THAllMarkdownRemark?.edges.length / postPerPage,
    );
    const numPagesEN = Math.ceil(
      ENAllMarkdownRemark?.edges.length / postPerPage,
    );

    Array.from({ length: numPagesTH }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/news` : `/news/${i + 1}`,
        component: path.resolve('src', 'templates', 'NewsTemplate.tsx'),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          numPages: numPagesTH,
          currentPage: i + 1,
        },
      });
    });

    Array.from({ length: numPagesEN }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/en/news` : `/en/news/${i + 1}`,
        component: path.resolve('src', 'templates', 'NewsTemplate.tsx'),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          numPages: numPagesEN,
          currentPage: i + 1,
        },
      });
    });
  }
};
