module.exports = {
  siteMetadata: {
    title: `Wioletta Gruszecka Stylist`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp",  "gatsby-plugin-fontawesome-css", "gatsby-plugin-root-import", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: `ae5d3f45294cae2cceb3d358a1cf0e`,
      environment: `main`,
      previewMode: false,
      disableLiveReload: false,
    },
  },]
};