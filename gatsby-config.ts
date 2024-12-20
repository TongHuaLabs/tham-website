export const siteMetadata = {
  title: `Tong Hua Asset Management`,
  description: ``,
  twitter: `@thamc`,
  siteUrl: `https://thamc.co.th`, // No trailing slash allowed!
  // siteUrl: `https://tonghualabs.github.io`, // for demo
  // siteUrl: `http://localhost:8000`, // for demo
  defaultMetaImage: '/images/meta-default.png', // Path to the image placed in the 'static' folder
};

// export const pathPrefix = '/tham-website';
export const pathPrefix = '';

export const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-image`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown`,
      path: `${__dirname}/src/markdown`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 896,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Tong Hua Asset Management`,
      short_name: `Tong Hua Asset Management`,
      description: 'Tong Hua Asset Management Website',
      start_url: '/',
      background_color: `#D9231D`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      theme_color: `#D9231D`,
      display: `minimal-ui`,
      icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
        'src/__generated__/gatsby-schema.graphql': true,
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/locales`,
      name: `locale`,
    },
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`,
      languages: [`th`, `en`],
      defaultLanguage: `th`,
      siteUrl: siteMetadata.siteUrl,
      i18nextOptions: {
        interpolation: {
          escapeValue: false,
        },
        keySeparator: '.',
        nsSeparator: false,
      },
      generateDefaultLanguagePage: true,
      redirect: false,
      excludePages: [`/news/`],
    },
  },
  'gatsby-plugin-netlify-cms',
];
