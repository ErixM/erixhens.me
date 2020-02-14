module.exports = {
  pathPrefix: "/erixhens.me",
  siteMetadata: {
    title: "Erixhens Muka",
    description: "Personal Website",
  },
  plugins: [
    {
      resolve: "simple-analytics-gatsby-plugin",
      options: {
        eventsGlobal: "sa",
        events: true,
        trackPageViews: true,
        ignorePages: ["pathname"],
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
