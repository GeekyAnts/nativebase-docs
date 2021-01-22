module.exports = {
  title: "NativeBase 3.0",
  tagline: "A complete component library for React Native Ecosystem",
  url: "https://alpha.nativebase.io",
  baseUrl: "/",
  clientModules: [require.resolve("./snackPlayerInitializer.js")],
  scripts: [
    {
      src:
        "https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js",
      defer: true,
    },
    { src: "https://snack.expo.io/embed.js", defer: true },
  ],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/native-base-icon.png",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "f422b0f98d066dbd23597e0bbd370ce2",
      indexName: "nativebase-v3",

      // // Optional: see doc section bellow
      // contextualSearch: true,

      // // Optional: Algolia search parameters
      // searchParameters: {},

      // algoliaOptions: { facetFilters: ["type:content", "language:en"] }, // Optional, if provided by Algolia,
      // debug: false,
      // placeholder: "Search Docs",
    },
    sidebarCollapsible: false,
    navbar: {
      title: "NativeBase1234",
      logo: {
        alt: "NativeBase Logo",
        src: "img/native-base-icon.png",
      },
      // style: "dark",
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        { type: "docsVersionDropdown", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
            {
              label: "Examples",
              to: "docs/doc2/",
            },
            {
              label: "FAQ",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/nativebaseio",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/native-base",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/TSgCw2UPmb",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/GeekyAnts/Nativebase",
            },
            {
              label: "Contribution Guidelines",
              href:
                "https://github.com/GeekyAnts/NativeBase/blob/master/CONTRIBUTING.md",
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Built with ❤️ at GeekyAnts.",
              href:
                "https://geekyants.com/?utm_source=nativebase&utm_medium=footer&utm_campaign=nativebase",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NativeBase`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          remarkPlugins: [require("./remark-snackplayer")],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};
