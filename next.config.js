const { withNativebase } = require("@native-base/next-adapter");
const path = require("path");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

// const { withExpo } = require("@expo/next-adapter");
const redirectsJSON = require("./redirects.json");
module.exports = withNativebase({
  dependencies: ["@native-base/icons"],
  plugins: [[withMDX]],
  nextConfig: {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    // webpack: (config) => {
    //   config.resolve.alias = {
    //     ...(config.resolve.alias || {}),
    //     // Transform all direct `react-native` imports to `react-native-web`
    //     "react-native$": "react-native-web",
    //   };
    //   config.resolve.extensions = [
    //     ".web.js",
    //     ".web.ts",
    //     ".web.tsx",
    //     ...config.resolve.extensions,
    //   ];
    //   return config;
    // },
    async redirects() {
      return [
        {
          source: "/discord",
          destination: "https://discord.com/invite/TSgCw2UPmb",
          permanent: true,
        },
        {
          source: "/blogs",
          destination: "https://nativebase.io/blogs",
          permanent: true,
        },
        ...redirectsJSON,
      ];
    },
    images: {
      domains: [
        "docs.nativebase.io",
        "media-exp1.licdn.com",
        "mir-s3-cdn-cf.behance.net",
        "avatars.githubusercontent.com",
        "images.opencollective.com",
        "pbs.twimg.com",
      ],
    },
    env: {
      environment: process.env.ENVIRONMENT,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/@native-base/icons"),
      });
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        "react-native$": "react-native-web",
        // "@native-base/icons": "react-native-vector-icons",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    // webpack: (config, options) => {
    //   config.module.rules.push({
    //     test: /\.ttf$/,
    //     loader: "url-loader", // or directly file-loader
    //     include: path.resolve(__dirname, "node_modules/@native-base/icons"),
    //   });
    //   config.resolve.alias = {
    //     ...(config.resolve.alias || {}),
    //     "react-native$": "react-native-web",
    //   };
    //   config.resolve.extensions = [
    //     ".web.js",
    //     ".web.ts",
    //     ".web.tsx",
    //     ...config.resolve.extensions,
    //   ];
    //   return config;
    // },
  },
});
