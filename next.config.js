const withFonts = require("next-fonts");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const { withExpo } = require("@expo/next-adapter");
const redirectsJSON = require("./redirects.json");
const withPlugins = require("next-compose-plugins");
const { withGluestackUI } = require("@gluestack/ui-next-adapter");

const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native",

  "@expo/vector-icons",

  "@gluestack-style/react",
  "@gluestack-style/legend-motion-animation-driver",
  "@gluestack-style/animation-plugin",
  "@gluestack-style/animation-resolver",
  "@gluestack-style/legend-motion-animation-driver",
  "@legendapp/motion",

  "@expo/html-elements",
  "expo-linear-gradient",

  "react-native-svg",
  "@react-native-aria/interactions",
  "@react-native-aria/checkbox",
  "@react-native-aria/focus",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-stately/slider",
  "@react-native-aria/toggle",
  "@react-native-aria/utils",
  "@react-native-aria/menu",
  "@gluestack-ui/actionsheet",
  "@gluestack-ui/form-control",
  "@gluestack-ui/avatar",
  "@gluestack-ui/modal",
  "@gluestack-ui/button",
  "@gluestack-ui/checkbox",
  "@gluestack-ui/divider",
  "@gluestack-ui/fab",
  "@gluestack-ui/hooks",
  "@gluestack-ui/hstack",
  "@gluestack-ui/icon",
  "@gluestack-ui/input",
  "@gluestack-ui/link",
  "@gluestack-ui/menu",
  "@gluestack-ui/modal",
  "@gluestack-ui/overlay",
  "@gluestack-ui/popover",
  "@gluestack-ui/progress",
  "@gluestack-ui/provider",
  "@gluestack-ui/radio",
  "@gluestack-ui/select",
  "@gluestack-ui/slider",
  "@gluestack-ui/spinner",

  "@gluestack-ui/switch",
  "@gluestack-ui/textarea",
  "@gluestack-ui/toast",
  "@gluestack-ui/tooltip",
  "@gluestack-ui/vstack",
  "@gluestack-ui/transitions",
  "@gluestack-ui/utils",
  "@gluestack-ui/tabs",
  "@gluestack-ui/react-native-aria",
  "@gluestack-ui/alert-dialog",
  "@gluestack-ui/pressable",
  "@gluestack-ui/themed-native-base",
]);

module.exports = withPlugins(
  [[withTM], [withFonts], [withMDX], [withExpo, { projectRoot: __dirname }]],
  {
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
    typescript: {
      ignoreBuildErrors: true,
    },
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
  }
);
