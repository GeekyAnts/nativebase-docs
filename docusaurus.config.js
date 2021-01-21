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
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
