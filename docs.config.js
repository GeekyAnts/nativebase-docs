module.exports = {
  DOCS_URL: 'https://beta-docs.nativebase.io',
  indexSlugFileName: 'getting-started',
  docsEntryPoint: 'docs',
  REPO_BRANCH: 'master',
  REPO_LINK: 'https://github.com/GeekyAnts/NativeBase',
  versionMap: {
    '3.0.x': '3.0.7',
    '3.1.x': '3.1.0',
    '3.2.x': '3.2.2',
    '3.3.x': '3.3.4-rc.0',
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
          link: 'https://twitter.com/nativebase',
          linkType: 'external',
        },
        {
          id: 'examples',
          title: 'StackOverflow',
          link: 'https://stackoverflow.com/questions/tagged/native-base',
          linkType: 'external',
        },
        {
          id: 'introduction',
          title: 'Discord',
          link: 'https://discord.com/invite/TSgCw2UPmb',
          linkType: 'external',
        },
        {
          id: 'examples',
          title: 'VS Code Extension',
          link: 'https://marketplace.visualstudio.com/items?itemName=NativeBase.nativebase-v3-vscode-extension&ssr=false#review-details',
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
