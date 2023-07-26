import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `김대연 개발 블로그`,
    description: `개발 관련 내용을 정리하는 블로그입니다.`,
    image: ``,
    twitterUsername: ``,
    siteUrl: `https://ddaeyeonkim.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // "gatsby-plugin-google-gtag"
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "reading_contents",
        "path": `${__dirname}/reading_contents/`,
      },
      __key: "reading_contents"
    },
    "gatsby-plugin-sharp", 
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
  ]
};

export default config;
