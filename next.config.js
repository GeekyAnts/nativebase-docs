const { withNativebase } = require("@native-base/next-adapter");
const path = require("path");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const redirectsJSON = require("./redirects.json");

module.exports = withNativebase({
  dependencies: [
    "@native-base/icons",
    "react-native-web-linear-gradient",
    "react-native-web",
    "react-native-svg",
    // "react-native-keyboard-aware-scroll-view",
  ],
  plugins: [withMDX],

  nextConfig: {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
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
    // env: {
    //   environment: process.env.ENVIRONMENT,
    // },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/@native-base/icons"),
      });
      // config.module.rules.push({
      //   test: /\.ts|tsx|jsx|js$/,
      //   loader: "babel-loader", // or directly file-loader
      //   include: path.resolve(
      //     __dirname,
      //     "node_modules/react-native-keyboard-aware-scroll-view"
      //   ),
      //   options: {
      //     presets: [
      //       "@babel/preset-env",
      //       "@babel/preset-react",
      //       "@babel/preset-typescript",
      //     ],
      //   },
      // });
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
        "react-native-linear-gradient": "react-native-web-linear-gradient",
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
  },
});

//
