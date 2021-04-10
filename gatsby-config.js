module.exports = {
  siteMetadata: {
    title: 'Álvaro Medina Ballester',
    author: 'Álvaro Medina Ballester',
    description: 'This is the personal site of Álvaro Medina Ballester.',
    siteUrl: 'http://alvaromb.com',
  },
  plugins: [
    // Adds ESLint to your Gatsby dev environment, maintaining code quality as you develop.
    'gatsby-plugin-eslint',
    // A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/apps`,
        name: 'apps',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'yaml',
      },
    },
    // Parses yaml files
    'gatsby-transformer-yaml',
    // Parses Markdown files using Remark.
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Processes images in markdown so they can be used in the production build.
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          // Wraps iframes or objects (e.g. embedded YouTube videos) within markdown files in a responsive elastic container with a fixed aspect ratio. This ensures that the iframe or object will scale proportionally and to the full width of its container.
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          // Copies local files linked to/from Markdown (.md|.markdown) files to the root directory (i.e., public folder).
          'gatsby-remark-copy-linked-files',
          // Replaces “dumb” punctuation marks with “smart” punctuation marks using the retext-smartypants plugin.
          'gatsby-remark-smartypants',
        ],
      },
    },
    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // Create an RSS feed (or multiple feeds) for your Gatsby site.
    'gatsby-plugin-feed',
    // Provides drop-in support for server rendering data added with React Helmet.
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    // Plausible analytics
    {
      resolve: 'gatsby-plugin-plausible',
      options: {
        domain: 'alvaromb.com',
      },
    },
  ],
}
