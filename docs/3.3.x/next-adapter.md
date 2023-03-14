---
id: next-adapter
title: NativeBase next-adapter
---

[Next.js](https://nextjs.org/) is a React framework that provides simple page-based routing as well as server-side rendering. To use Next.js with native-base for web we recommend that you use a library called `[@native-base/next-adapter](https://github.com/GeekyAnts/native-base-next-adapter)` to handle the configuration and integration of the tools.

## Built With

- next
- react
- react-dom
- typescript
- tsc
- react-native-web

### Usage

- `yarn add @native-base/next-adapter next-compose-plugins next-transpile-modules next-fonts -D`
- `yarn add react-native-web native-base react-native-svg react-native-safe-area-context`
- Re-export the custom `Document` component in the **`pages/_document.js`** file of your Next.js project.
  - This will ensure `react-native-web` styling works.
  - Wraps all the css in style tag on server side (thus preventing css flicker issue)
  - Or you can create the file - `mkdir pages; touch pages/_document.js`
  **pages/\_document.js**
  `export { default } from '@native-base/next-adapter/document';`
- Update `next.config.json` with below code

  Custom withNativebase function implements withPlugins function from [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins#usage).

  WithNativebase function takes in 2 parameters :

```jsx
type withNativebaseParam = {
  config: ConfigType,
  phase?: Array,
};

type ConfigType = {
  dependencies?: Array<string>,
  plugins?: Array<function>,
  nextConfig?: Object,
};
```

1. config parameter is an object with 3 keys

   - dependencies: List of dependencies which are transpiled using `[next-transpile-modules](https://github.com/martpie/next-transpile-modules)` .

   ```jsx
   const { withNativebase } = require('@native-base/next-adapter');

   module.exports = withNativebase({
     dependencies: [
       '@expo/next-adapter',
       'react-native-vector-icons',
       'react-native-vector-icons-for-web',
     ],
   });
   ```

   - plugins: It is an array containing all plugins and their configuration.

   ```jsx
   const { withNativebase } = require('@native-base/next-adapter');
   const sass = require('@zeit/next-sass');

   module.exports = withNativebase({
     plugins: [[sass]],
   });
   ```

   - nextConfig: Configuration for the plugin. You can also overwrite specific configuration keys for a phase:

   ```jsx
   const { withNativebase } = require('@native-base/next-adapter');

   module.exports = withNativebase({
     nextConfig: {
       projectRoot: __dirname,
       webpack: (config, options) => {
         config.resolve.alias = {
           ...(config.resolve.alias || {}),
           'react-native$': 'react-native-web',
           '@expo/vector-icons': 'react-native-vector-icons',
         };
         config.resolve.extensions = [
           '.web.js',
           '.web.ts',
           '.web.tsx',
           ...config.resolve.extensions,
         ];
         return config;
       },
     },
   });
   ```

1. phase

   If the plugin should only be applied in specific phases, you can specify them here. You can use all phases [next.js provides](https://github.com/zeit/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4).

```jsx
const withPlugins = require('next-compose-plugins');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const sass = require('@zeit/next-sass');

module.exports = withPlugins([
  [
    sass,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
    },
    [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
  ],
]);
```

https://user-images.githubusercontent.com/47877976/151315307-dd70e9e9-15b0-44e5-831a-bb0e4be090be.mp4

## Steps to integrate icons in Nextjs with native-base

- yarn add @expo/next-adapter react-native-vector-icons @expo/vector-icons
- We need to overwrite `next.config.js` with custom webpack configurations

```jsx
const { withNativebase } = require('@native-base/next-adapter');

module.exports = withNativebase({
  dependencies: [
    '@expo/next-adapter',
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
  ],
  nextConfig: {
    projectRoot: __dirname,
    webpack: (config, options) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        '@expo/vector-icons': 'react-native-vector-icons',
      };
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ];
      return config;
    },
  },
});
```

- Re-export the custom `Document` component in the **pages/\_document.js** file of your Next.js project.

  - This will ensure all fonts are loaded in style tag.
  - Or you can create the file - `mkdir pages; touch pages/_document.js`

  **pages/\_document.js**

  ```jsx
  import { default as NativebaseDocument } from "@native-base/next-adapter/document";
  import NextDocument, { Html, Head, Main, NextScript } from "next/document";
  export { default as ExpoDocument } from "@expo/next-adapter/document";
  import EntypoFont from "react-native-vector-icons/Fonts/Entypo.ttf";
  import AntDesignFont from "react-native-vector-icons/Fonts/AntDesign.ttf";
  import EvilIconsFont from "react-native-vector-icons/Fonts/EvilIcons.ttf";
  import FeatherFont from "react-native-vector-icons/Fonts/Feather.ttf";
  import FontAwesomeFont from "react-native-vector-icons/Fonts/FontAwesome.ttf";
  import FontistoFont from "react-native-vector-icons/Fonts/Fontisto.ttf";
  import FoundationFont from "react-native-vector-icons/Fonts/Foundation.ttf";
  import IoniconsFont from "react-native-vector-icons/Fonts/Ionicons.ttf";
  import MaterialCommunityIconsFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
  import MaterialIconsFont from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
  import OcticonsFont from "react-native-vector-icons/Fonts/Octicons.ttf";
  import SimpleLineIconsFont from "react-native-vector-icons/Fonts/SimpleLineIcons.ttf";
  import ZocialFont from "react-native-vector-icons/Fonts/Zocial.ttf";
  import * as React from "react";
  import { AppRegistry } from "react-native";

  class Document extends NativebaseDocument {
    render() {
      return (
        <Html style={{ height: "100%" }}>
          <Head />
          <body style={{ height: "100%", overflow: "hidden" }}>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

  export const style =

  html, body, #__next {
    width: 100%;
    /* To smooth any scrolling behavior */
    -webkit-overflow-scrolling: touch;
    margin: 0px;
    padding: 0px;
    /* Allows content to fill the viewport and go beyond the bottom */
    min-height: 100%;
  }
  @font-face {
    src: url(${EntypoFont});
    font-family: Entypo;
  }
  @font-face {
    src: url(${EvilIconsFont});
    font-family: EvilIcons;
  }
  @font-face {
    src: url(${FontAwesomeFont});
    font-family: FontAwesome;
  }
  @font-face {
    src: url(${FeatherFont});
    font-family: Feather;
  }
  @font-face {
    src: url(${IoniconsFont});
    font-family: Ionicons;
  }
  @font-face {
    src: url(${FoundationFont});
    font-family: Foundation;
  }
  @font-face {
    src: url(${MaterialIconsFont});
    font-family: MaterialIcons;
  }
  @font-face {
    src: url(${MaterialCommunityIconsFont});
    font-family: MaterialCommunityIcons;
  }
  @font-face {
    src: url(${ZocialFont});
    font-family: Zocial;
  }
  @font-face {
    src: url(${SimpleLineIconsFont});
    font-family: SimpleLineIcons;
  }
  @font-face {
    src: url(${OcticonsFont});
    font-family: Octicons;
  }
  @font-face {
    src: url(${FontistoFont});
    font-family: Fontisto;
  }
  @font-face {
    src: url(${AntDesignFont});
    font-family: AntDesign;
  }
  #__next {
    flex-shrink: 0;
    flex-basis: auto;
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    flex: 1;
  }
  html {
    scroll-behavior: smooth;
    /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }
  body {
    display: flex;
    /* Allows you to scroll below the viewport; default value is visible */
    overflow-y: auto;
    overscroll-behavior-y: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: scrollbar;
  }
  ;

  export async function getInitialProps({ renderPage }) {
    AppRegistry.registerComponent("Main", () => Main);
    const { getStyleElement } = AppRegistry.getApplication("Main");
    const page = await renderPage();
    const styles = [
      // eslint-disable-next-line react/jsx-key
      <style dangerouslySetInnerHTML={{ __html: style }} />,
      getStyleElement(),
    ];
    return { ...page, styles: React.Children.toArray(styles) };
  }
  Document.getInitialProps = getInitialProps;

  export default Document;
  ```

- Create a **babel.config.js** and use [babel-preset-expo](https://github.com/expo/expo/tree/master/packages/babel-preset-expo)

  - You may have installed this earlier with `yarn add -D babel-preset-expo` **babel.config.js**

  ```jsx
  module.exports = {
    presets: ['@expo/next-adapter/babel'],
  };
  ```

- Then we can directly use icons

```jsx
import React from 'react';
import { Box, Icon } from 'native-base';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  return (
    <Box>
      <Icon
        as={Entypo}
        name="user"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
      />
    </Box>
  );
}
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
