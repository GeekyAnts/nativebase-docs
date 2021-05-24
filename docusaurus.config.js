module.exports = {
  title: 'NativeBase',
  tagline: 'A complete component library for React Native Ecosystem',
  url: 'https://alpha.nativebase.io',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src: this.baseUrl + '/js/google-tag-manager.js',
      defer: true,
    },
    {
      src:
        'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    { src: 'https://snack.expo.io/embed.js', defer: true },
  ],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'nativebase',
  projectName: 'website', // Usually your repo name.
  plugins: [
    'docusaurus-tailwindcss-loader',
    // '@docusaurus/plugin-google-gtag'
  ],
  themeConfig: {
    // hideableSidebar: true,
    // respectPrefersColorScheme: true,
    // gtag: {
    //   trackingID: 'UA-76655074-1',
    // },
    algolia: {
      apiKey: 'f422b0f98d066dbd23597e0bbd370ce2',
      indexName: 'nativebase-v3',
    },
    navbar: {
      title: 'NativeBase',
      logo: {
        alt: 'NativeBase Logo',
        src: 'img/nativebaselogo.svg',
      },

      // style: "dark",
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          to:
            'https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase',
          label: 'Looking for v2.0',
          position: 'left',
          'aria-label': 'Looking for v2.0',
        },
        // {
        //   to: 'https://market.nativebase.io/',
        //   label: 'Market',
        //   position: 'right',
        //   'aria-label': 'Market',
        // },
        // {
        //   to:
        //     'https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase',
        //   label: 'Hire Us',
        //   position: 'right',
        //   'aria-label': 'Hire GeekyAnts',
        // },
        {
          to: 'https://github.com/GeekyAnts/nativebase',
          label: 'GitHub',
          position: 'right',
          'aria-label': 'GitHub',
        },
        {
          to: 'https://discord.com/invite/TSgCw2UPmb',
          label: 'Discord',
          position: 'right',
          'aria-label': 'Discord',
        },
        {
          // to: 'docs/nativebase',
          label: 'Theme',
          position: 'right',
          'aria-label': 'Theme',
        },
        {
          to: '/docs/nativebase',
          label: 'Docs',
          position: 'right',
          'aria-label': 'Docs',
        },
        {
          to:
            'https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase',
          label: 'HireUs',
          position: 'right',
          'aria-label': 'Hire GeekyAnts',
        },
      ],
    },
    footer: {
      // style: 'dark',
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
              href: 'https://github.com/GeekyAnts/NativeBase',
            },
            {
              label: 'Contribution Guidelines',
              href:
                'https://github.com/GeekyAnts/NativeBase/blob/master/CONTRIBUTING.md',
            },
            {
              label: 'Privacy Policy',
              href: '/privacy-policy',
            },
            {
              label: 'Cookie Policy',
              href: '/cookie-policy',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Built with ❤️ at GeekyAnts.',
              href:
                'https://geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
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
          editUrl: 'https://github.com/nativebase/website/tree/main',
          remarkPlugins: [
            require('./remark-snackplayer'),
            require('./nb-plugins/component-snackplayer'),
            require('./nb-plugins/component-prop-table'),
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/nativebase/website/tree/main',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
