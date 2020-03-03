module.exports = {
  pathPrefix: "/erixhens.me",
  siteMetadata: {
    title: "Erixhens Muka",
    description: "Personal Website",
    siteUrl: "https://erixhens.me",
    author: {
      name: "Erixhens Muka",
      minibio: "Erixhens Muka is a 25 year old frontend developer",
    },
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: { quality: 90, withWebp: true, maxWidth: 1024 },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatFile: true,
        analyzerMode: "static",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erixhens.me`,
        short_name: `Erixhens`,
        start_url: `/`,
        background_color: `#343633`,
        theme_color: `#59abe3`,
        display: `standalone`,
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://erixhens.me`,
      },
    },
  ],
}
