module.exports = {
  DOCS_URL: 'https://topgeek.ds.io',
  parentUrl: 'https://topgeek.ds.io/',
  indexSlugFileName: 'landing-page',
  docsEntryPoint: 'docs',
  REPO_BRANCH: 'master',
  REPO_LINK: 'https://github.com/GeekyAnts/NativeBase',
  versionMap: {
    '1.0.0': '3.4.4',
  },
  footer: [
    {
      type: 'heading',
      title: 'Docs',
      pages: [
        {
          id: 'introduction',
          title: 'Introduction',
          link: '/',
          linkType: 'internal',
        },
        {
          id: 'examples',
          title: 'Examples',
          link: '/todo-example',
          linkType: 'internal',
        },
      ],
    },
    {
      type: 'heading',
      title: 'Community',
      pages: [
        {
          id: 'introduction',
          title: 'Twitter',
          link: 'https://twitter.com/topgeekio',
          linkType: 'external',
        },
        {
          id: 'introduction',
          title: 'Discord',
          link: 'https://discord.gg/EPJNqFKnTP',
          linkType: 'external',
        },
      ],
    },
    {
      type: 'heading',
      title: 'More',
      pages: [
        {
          id: 'introduction',
          title: 'Github',
          link: 'https://github.com/GeekyAnts/NativeBase',
          linkType: 'external',
        },
        {
          id: 'examples',
          title: 'Contribution Guidelines',
          link: 'https://github.com/GeekyAnts/NativeBase/blob/master/CONTRIBUTING.md',
          linkType: 'external',
        },
        {
          id: 'introduction',
          title: 'Privacy Policy',
          link: 'https://nativebase.io/privacy-policy',
          linkType: 'external',
        },
        {
          id: 'examples',
          title: 'Cookie Policy',
          link: 'https://nativebase.io/cookie-policy',
          linkType: 'external',
        },
      ],
    },
  ],
};
