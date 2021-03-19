# [nativebase.io](https://alpha.nativebase.io/)

This repo contains the website configuration and documentation for [NativeBase website](https://alpha.nativebase.io/).

## Contents

- [Getting started](#-getting-started)
- [Overview](#-overview)
- [Website configuration](#-website-configuration)
- [Contributing](#-contributing)

## 🔎 Getting started

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
1.  [Node](https://nodejs.org/en/download/) _(version 12 or greater)_.
1.  [Yarn](https://yarnpkg.com/lang/en/docs/install/) _(version 1.5 or greater)_.
1.  A fork of the repo _(for any contributions)_.
1.  A clone of the `website` repo.

### Installation

1.  `yarn` to install the website's workspace dependencies.
1.  `cd remark-snackplayer` to go into the snackplayer plugin.
1.  `yarn` to install the snackplayer plugin's dependencies.
1.  `cd ..` to go back to website root directory.

### Running locally

1.  `yarn start` to start the development server _(powered by [Docusaurus 2](https://v2.docusaurus.io))_.
1.  `open http://localhost:3000/` to open the site in your preferred browser.

## 📖 Overview

If you would like to **_contribute an edit or addition to the docs,_** then all our content is generated from markdown files you can find in the `docs` directory.

**_To edit the internals of how the site is built,_** you may want to get familiarized with how the site is built. The NativeBase website is a static site generated using [Docusaurus 2](https://v2.docusaurus.io). Visit the Docusaurus website to learn more about all the available configuration options.

### Directory Structure

The following is a high-level overview of relevant files and folders.

```
website/
├── blog/
│   ├── ...
├── docs/
│   ├── migration/
│       ├── Accordion.md
│       ├── ...
│   ├── FAB.md
│   ├── ...
├── plugins/
│   ├── docusaurus-tailwindcss-loader/
├── remark-snackplayer/
│   └── en/
├── src/
│   ├── components/
│   │   ├── AndroidBadge/
│   │   └── ...
│   ├── css/
│   │   ├── custom.css
│   ├── img/
│   │   ├── Discord.js
│   │   └── ...
│   ├── pages/
│   │   ├── index.js
│   │   └── styles.module.css
│   ├── theme/
│   │   ├── Navbar.js
│   │   └── styles.module.css
├── static/
│   ├── img/
├── versioned_docs/
│   ├── version-3.0.0-next.13/
│   └── ...
├── versioned_sidebars/
│   ├── version-3.0.0-next.13-sidebars.json
│   └── ...
├── babel.config.js
├── docusaurus.config.js
├── package.json
├── sidebars.json
├── snackPlayerInitializer.js
├── tailwind.config.js
└── versions.json
```

### Documentation sources

As mentioned above, the `docs` folder contains the markdown source files for all of the docs pages in the NativeBase website. In most cases, you will want to edit the files within this directory. If you're adding a new doc or you need to alter the order the docs appear in the sidebar, take a look at the `sidebars.json` file in the `website` directory. The sidebars file contains a list of document ids that should match those defined in the header metadata (aka frontmatter) of the docs markdown files.

### Versioned documentation

The NativeBase website is versioned to allow users to go back and see the API reference docs for any given native-base version. A new version of the website is generally generated whenever there is a new native-base release. When this happens, any changes made to the `docs` and `sidebars.json` files will be copied over to the corresponding location within `versioned_docs` and `versioned_sidebars`.

> **_Note:_** Do not edit the auto-generated files within `versioned_docs` or `versioned_sidebars` unless you are sure it is necessary. Edits made to older versions will not be propagated to newer versions of the docs.

Docusaurus keeps track of the list of versions for the site in the `versions.json` file. The ordering of the versions in this file should be in reverse chronological order.

## ⚙️ Website configuration

The main config file for the website can be found at `docusaurus.config.js`. This file tells [Docusaurus how to build the website](https://v2.docusaurus.io/docs/configuration). Edits to this file are rarely necessary.

The `src/components` subdirectory contains JavaScript and React components that are used in different parts of the website.

The `src/pages` subdirectory contains the React components that make up the non-documentation pages of the site, such as the landing page.

The `src/theme` subdirectory contains the swizzled React components from the Docusaurus theme.

## 🤲 Contributing

### Create a branch

1.  `git checkout master` in your local repository.
1.  `git pull origin master` to ensure you have the latest main code.
1.  `git checkout -b the-name-of-my-branch` to create a branch.
    > replace `the-name-of-my-branch` with a suitable name, such as `update-animations-page`

### Make the changes

1.  Follow the "[Running locally](#running-locally)" instructions.
1.  Save the files and check in the browser.
1.  Some changes may require a server restart to generate new files. (Pages in `docs` always do!)
1.  Edits to pages in `docs` will only be visible in the latest version of the documentation, called "Next", located under the `docs/next` path.

Visit **http://localhost:3000/docs/next/YOUR-DOCS-PAGE** to see your work.

### Test the change

If possible, test any visual changes in all latest versions of the following browsers:

- Chrome and Firefox on the desktop.
- Chrome and Safari on mobile.

### Push it

1.  `git add -A && git commit -m "My message"` to stage and commit your changes.
    > replace `My message` with a commit message, such as `Fixed typo in Accordion Example`
2.  `git push my-fork-name the-name-of-my-branch`
3.  Go to the [nativebase/website repo](https://github.com/nativebase/website) and you should see recently pushed branches.
4.  Follow GitHub's instructions and create a Pull Request to merge your branch in `master`.
5.  Describe briefly your changes (in case of visual changes, please include screenshots).
