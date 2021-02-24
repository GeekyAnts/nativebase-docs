module.exports = {
  title: 'NativeBase',
  tagline: 'A complete component library for React Native Ecosystem',
  url: 'https://nativebase.io',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src:
        'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    { src: 'https://snack.expo.io/embed.js', defer: true },
  ],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/native-base-icon.png',
  organizationName: 'nativebase', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  plugins: ['docusaurus-tailwindcss-loader'],
  themeConfig: {
    respectPrefersColorScheme: true,
    algolia: {
      apiKey: 'f422b0f98d066dbd23597e0bbd370ce2',
      indexName: 'nativebase-v3',
    },
    navbar: {
      // title: "NativeBase 3.0",
      logo: {
        alt: 'NativeBase Logo',
        src: 'img/native-base-icon.png',
      },
      // style: "dark",
      items: [
        { type: 'docsVersionDropdown', position: 'right' },
        // {
        //   href: "https://github.com/GeekyAnts/nativebase",
        //   label: "GitHub",
        //   position: "left",
        // },
        // {
        //   href:
        //     "https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase",
        //   label: "Hire The Creators",
        //   position: "left",
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/nativebase',
            },
            {
              label: 'Examples',
              to: 'docs/todo-example',
            },
            {
              label: 'FAQ',
              to: 'docs/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/nativebaseio',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/native-base',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/TSgCw2UPmb',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/GeekyAnts/Nativebase',
            },
            {
              label: 'Contribution Guidelines',
              href:
                'https://github.com/GeekyAnts/NativeBase/blob/master/CONTRIBUTING.md',
            },
            // {
            //   label: "Stars",
            //   href: "https://github.com/GeekyAnts/NativeBase",
            //   // className: "github-button",
            //   dataIcon: "octicon-star",
            //   dataCountHref: "https://github.com/GeekyAnts/NativeBase",
            //   dataShowCount: "true",
            //   dataCountAriaLabel: "# stargazers on GitHub",
            //   ariaLabel: "Star this project on GitHub",
            // },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Built with ❤️ at GeekyAnts.',
              href:
                'https://geekyants.com/?utm_source=nativebase&utm_medium=footer&utm_campaign=nativebase',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NativeBase`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [require('./remark-snackplayer')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
