---
id: nb-icons
title: NativeBase Icons
---

`NativeBase Icons` was designed to make the integration of icons in NativeBase projects easier. It is a unified library that can export icons and fonts for all native and web platforms.

## Built With

- react-native-vector-icons
- @expo/vector-icon
- typescript

## Installation

`yarn add @native-base/icons`

### Next Js:

- Add Fonts:

1. To add all the fonts, write this piece of code in `_document.js`
   <br/>

   ```jsx
   import { default as NativebaseDocument } from '@native-base/next-adapter/document';
   import fontsCSS from '@native-base/icons/FontsCSS';
   import { AppRegistry } from 'react-native';
   import { Main } from 'next/document';
   import * as React from 'react';

   class Document extends NativebaseDocument {
     //
   }

   async function getInitialProps({ renderPage }) {
     AppRegistry.registerComponent('Main', () => Main);
     const { getStyleElement } = AppRegistry.getApplication('Main');
     const page = await renderPage();
     const styles = [
       // eslint-disable-next-line react/jsx-key
       <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
       getStyleElement(),
     ];
     return { ...page, styles: React.Children.toArray(styles) };
   }

   Document.getInitialProps = getInitialProps;

   export default Document;
   ```

2. To add particular fonts: (For example, if you need to add AntDesignFonts and MaterialIconsFonts, write this piece of code in `_document.js`)
   <br/>

````jsx
   import { default as NativebaseDocument } from "@native-base/next-adapter/document";
   import AntDesignFontFaceCSS from "@native-base/icons/FontsCSS/AntDesignFontFaceCSS";
   import MaterialIconsFontFaceCSS from "@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS";

   const fontsCSS = AntDesignFontFaceCSS + MaterialIconsFontFaceCSS;

   class Document extends NativebaseDocument {
     //
   }

   async function getInitialProps({ renderPage }) {
     const res = await NativebaseDocument.getInitialProps({ renderPage });
     const styles = [
       // eslint-disable-next-line react/jsx-key
       <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
       ...res.styles
     ];
     return { ...res, styles: React.Children.toArray(styles) };
   }

   Document.getInitialProps = getInitialProps;

   export default Document;
   ```

3. Update `next.config.js` with this code if you are using [`@native-base/next adapter`](https://github.com/GeekyAnts/native-base-next-adapter)):

   ```jsx
       const { withNativebase } = require("@native-base/next-adapter");
       const path = require("path");
       module.exports = withNativebase({
         dependencies: ["@native-base/icons"],
         nextConfig: {
           webpack: (config, options) => {
             config.module.rules.push({
               test: /\.ttf$/,
               loader: "url-loader", // or directly file-loader
               include: path.resolve(__dirname, "node_modules/@native-base/icons"),
             });
             config.resolve.alias = {
               ...(config.resolve.alias || {}),
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
         },
       });
   ```





### Create React App:

- Add Fonts:
<br/>

1. To add all the fonts, write this piece of code in `index.jsx/index.tsx`:
 <br/>

  ```jsx
   import fontsCSS from "@native-base/icons/FontsCSS";
   const style = document.createElement("style");
   style.type = "text/css";
   style.appendChild(document.createTextNode(fontsCSS));
   document.head.appendChild(style);
   ```
    <br/>

2. To add a particular font
 <br/>

```jsx
   import AntDesignFontFaceCSS from "@native-base/icons/FontsCSS/AntDesignFontFaceCSS";
   import MaterialIconsFontFaceCSS from "@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS";

   const fontsCSS = AntDesignFontFaceCSS + MaterialIconsFontFaceCSS;

   const style = document.createElement("style");
   style.type = "text/css";
   if (style.styleSheet) {
     style.styleSheet.cssText += fontsCSS;
   } else {
     style.appendChild(document.createTextNode(fontsCSS));
   }
   document.head.appendChild(style);
   ```


### Expo

- Add this configuration to .babel.config.js file in root directory:

 ```jsx
 module.exports = function (api) {
   api.cache(true);
   return {
     presets: ["babel-preset-expo"],
     plugins: [
       [
         "module-resolver",
         {
           alias: {
             "@native-base/icons": "@native-base/icons/lib",
           },
         },
       ],
     ],
   };
 };
````

## Usage

```jsx
import { Entypo } from '@native-base/icons';
return <Icon as={Entypo} name="user"></Icon>;
```
