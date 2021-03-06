module.exports = {
  siteMetadata: {
    title: "Red Slug Trading Co.",
  },
  plugins: [
    "gatsby-plugin-image",
    // Disable until we figure out to make it play nice
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss"
  ],
};
