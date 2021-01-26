const path = require("path");

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
        name: `uploads`,
        path: path.join(__dirname, "static", "images", "uploads"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: path.join(__dirname, "static", "content", "news"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: path.join(__dirname, "src", "cms", "cms.js"),
      },
    },
  ],
};
