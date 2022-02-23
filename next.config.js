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
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/@native-base/icons"),
      });
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
