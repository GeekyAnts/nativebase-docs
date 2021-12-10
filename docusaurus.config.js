module.exports = {
  themes: ['@docusaurus/theme-live-codeblock'],
  title: 'NativeBase',
  tagline: 'Mobile-first, accessible components for React Native & Web',
  url: 'https://docs.nativebase.io',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src: '/js/fix-location.js',
      defer: true,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    { src: 'https://snack.expo.io/embed.js', defer: true },
  ],
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.svg',
  organizationName: 'Geekyants',
  projectName: 'nativebase-docs', // Usually your repo name.
  plugins: ['docusaurus-tailwindcss-loader'],
  themeConfig: {
    image: 'https://nativebase.io/img/nativebase-og.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:site_name', content: 'NativeBase' },
      {
        name: 'twitter:image:alt',
        content:
          'NativeBase 3.0 enables you to build a consistent design system across android, iOS & web. It is powered by React Native ARIA and Styled System. Rich, highly themeable and responsive.',
      },
      { name: 'twitter:site', content: '@nativebase' },
      {
        property: 'og:title',
        content:
          'NativeBase: Mobile-first, accessible components for React Native & Web',
      },
      {
        property: 'og:description',
        content:
          'NativeBase 3.0 enables you to build a consistent design system across android, iOS & web. It is powered by React Native ARIA and Styled System. Rich, highly themeable and responsive.',
      },
      {
        property: 'og:url',
        content: 'https://docs.nativebase.io',
      },
    ],
    // hideableSidebar: true,
    // respectPrefersColorScheme: true,
    gtag: {
      trackingID: 'G-ZTSFCSJK8X',
    },
    colorMode: {
      defaultMode: 'dark',
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    algolia: {
      contextualSearch: true,
      apiKey: '412c1183909b15d3314d018b0b2330ff',
<<<<<<< HEAD
      indexName: 'nativebase-v3',
=======
>>>>>>> 63694036b7ef3818d3d133d13a5283625f710db6
      appId: 'QT6M4WLEXP',
    },
    navbar: {
      title: 'NativeBase',
      logo: {
        alt: 'NativeBase Logo',
        src: 'img/nativebaselogo.svg',
        href: 'https://nativebase.io',
        target: '_self',
      },

      // style: "dark",
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          to: 'https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase',
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
          // to: 'nativebase',
          label: 'Theme',
          position: 'right',
          'aria-label': 'Theme',
        },
        {
          to: '/',
          label: 'Docs',
          position: 'right',
          'aria-label': 'Docs',
        },
        {
          to: 'https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase',
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
              to: '/',
            },
            {
              label: 'Examples',
              to: '/todo-example',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/nativebase',
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
              href: 'https://github.com/GeekyAnts/NativeBase/blob/master/CONTRIBUTING.md',
            },
            {
              label: 'Privacy Policy',
              href: 'https://nativebase.io/privacy-policy',
            },
            {
              label: 'Cookie Policy',
              href: 'https://nativebase.io/cookie-policy',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Built with ❤️ at GeekyAnts.',
              href: 'https://geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
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
          editUrl: 'https://github.com/Geekyants/nativebase-docs/tree/main',
          remarkPlugins: [
            require('./remark-snackplayer'),
            require('./nb-plugins/component-snackplayer'),
            require('./nb-plugins/component-prop-table'),
          ],
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/Geekyants/nativebase-docs/tree/main',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
