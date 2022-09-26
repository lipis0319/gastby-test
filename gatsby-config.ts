import type { GatsbyConfig } from "gatsby";

const path = require('path');


const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby-test',
    description: "Gatsby-test website",
    keyword:
        'keword1, keword2',
    siteUrl: 'http://www.gats-bytest.com',
    // image: 'http://www.gwcschool.com/assets/images/home-small.jpg',
    author: 'CAOCK',
    profiles: {
      phone: '+82-70-1111-1111',
      email: 'test@gatsby.com',
      linkedin: 'http://www.linkedin.com/in/test',
      instagram: 'https://www.instagram.com/test/',
      github: 'https://github.com/test',
      blog: 'https://velog.io/@test',
      medium: 'https://medium.com/test',
      resume: 'https://www.notion.so/test',

      }
  },

  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "[TRACKID]"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  "gatsby-plugin-typescript",
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src/components'),
      images: path.join(__dirname, 'src/assets/images'),
      icons: path.join(__dirname, 'src/assets/icons'),
      // styles: path.join(__dirname, 'src/styles'),
    },
  },
]
};

export default config;
