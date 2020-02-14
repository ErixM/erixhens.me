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
        metomic: "POLICY-SLUG",
      },
    },
    {
      resolve: `gatsby-plugin-metomic`,
      options: {
        clientId: "prj:e48b623d-8c75-4613-ba5a-a567bbe9b42b",
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
