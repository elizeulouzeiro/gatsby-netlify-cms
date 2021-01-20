module.exports = {
  siteMetadata: {
    title: `Netlify CSM with Gatsby`,
    description: `This is a sample project to show how create a site with Gatsby and Netlify CMS`,
    author: `@elizeumatheus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
