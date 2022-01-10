/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
// const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  // "native-base",
  "react-native-web",
  "react-native-safe-area-context",
  "@react-aria/visually-hidden",
  "@react-native-aria/button",
  "@react-native-aria/checkbox",
  "@react-native-aria/combobox",
  "@react-native-aria/focus",
  "@react-native-aria/interactions",
  "@react-native-aria/listbox",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-native-aria/tabs",
  "@react-native-aria/utils",
  "@react-stately/combobox",
  "@react-stately/radio",
  "react-native-svg",
]);

// const withTM = require("next-transpile-modules")([
//   "native-base",
//   "react-native-web",
//   "react-native-svg",
//   // "react-native-safe-area-context",
//   // "@react-aria/visually-hidden",
//   // "@react-native-aria/button",
//   // "@react-native-aria/checkbox",
//   // "@react-native-aria/combobox",
//   // "@react-native-aria/focus",
//   // "@react-native-aria/interactions",
//   // "@react-native-aria/listbox",
//   // "@react-native-aria/overlays",
//   // "@react-native-aria/radio",
//   // "@react-native-aria/slider",
//   // "@react-native-aria/tabs",
//   // "@react-native-aria/utils",
//   // "@react-stately/combobox",
//   // "@react-stately/radio",
// ]);

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    // [withTM],
    [withFonts],
    [withMDX],
    withTM,
    // [withFonts, { projectRoot: __dirname }],
    // [withExpo, { projectRoot: __dirname }],
  ],
  {
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        "react-native$": "react-native-web",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  },
  {
    distDir: "build",
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
        // {
        //   source: "/",
        //   destination: "/getting-started",
        //   permanent: true,
        // },
      ];
    },
    images: {
      domains: [
        "media-exp1.licdn.com",
        "mir-s3-cdn-cf.behance.net",
        "avatars.githubusercontent.com",
        "images.opencollective.com",
        "pbs.twimg.com",
        "docs.nativebase.io",
      ],
    },
    env: {
      startupUrl: process.env.STARTUP_URL,
    },
  }
);
