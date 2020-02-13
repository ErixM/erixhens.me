module.exports = {
  pathPrefix: "/erixhens.me",
  siteMetadata: {
    title: "Erixhens Muka",
    description: "Personal Website",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-simple-analytics",
      options: {
        // Optional custom domain
        domain: "quirky-edison-b31fcc.netlify.com",
      },
    },
    "gatsby-plugin-emotion",

    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
  ],
}
