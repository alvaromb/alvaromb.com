module.exports = {
  siteMetadata: {
    title: 'Álvaro Medina Ballester',
    author: 'Álvaro Medina Ballester',
    description: 'This is the personal site of Álvaro Medina Ballester.',
    siteUrl: 'http://alvaromb.com',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/apps`,
        name: 'apps',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Álvaro Medina Ballester`,
        short_name: `alvaromb.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FE7368`,
        display: `minimal-ui`,
        icon: `src/assets/amb-icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    // Analytics
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `alvaromb.com`,
      },
    },
  ],
}
