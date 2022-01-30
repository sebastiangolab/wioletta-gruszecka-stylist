module.exports = {
  siteMetadata: {
    title: `Wioletta Gruszecka Stylist`,
    description: `My name is Wioletta and I am a professional and qualified hair stylist with many years of experience and the love for creating beautiful hair is my passion.`,
    author: `@sebastiangolab`,
    keywords: `stylist, hairdresser`,
    siteUrl: `https://wiolettagruszecka.co.uk`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp",  "gatsby-plugin-fontawesome-css", "gatsby-plugin-root-import",
  {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: `ae5d3f45294cae2cceb3d358a1cf0e`,
    },
  },]
};