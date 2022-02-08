module.exports = {
  siteMetadata: {
    title: `Wioletta Gruszecka Stylist`,
    description: `My name is Wioletta and I am a professional and qualified hair stylist with many years of experience and the love for creating beautiful hair is my passion.`,
    author: `@sebastiangolab`,
    keywords: `stylist, hairdresser`,
    siteUrl: `https://wiolettagruszecka.co.uk/`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wioletta Gruszecka Stylist`,
        short_name: `Wioletta Gruszecka Stylist`,
        start_url: `/`,
        background_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
