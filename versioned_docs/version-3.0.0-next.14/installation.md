---
id: installation
title: Installation
---

To have `NativeBase` components running onto your native apps, all you need to do is, create a fresh React Native project using whatever you want, [expo](https://docs.expo.io/get-started/installation/) is a really great starting point so we will start with that and install the NativeBase using `npm` or `yarn` and add all the peer dependencies.

## Setup with Expo

Expo helps you make React Native apps with no build configuration. It works on macOS, Windows, and Linux. Refer this link for additional information on [Expo](https://docs.expo.io/) and setting up an Expo starter app.

_For **Quick Installation of NativeBase** just copy this and paste in your terminal and Voila! you are good to go to [Setup NativeBaseProvider](notion://www.notion.so/docs/setup-provider)_

**_Using yarn_**

```bash
yarn add native-base@next14 react-native-svg react-native-vector-icons styled-components styled-system
```

**_Using npm_**

```bash
npm i native-base@next14 react-native-svg react-native-vector-icons styled-components styled-system
```

**For Step by Step Installation of All the dependencies follow the steps below**

**If you are using yarn :**

Install **NativeBase**

```bash
yarn add native-base@next14
```

**We will also have to install these peer dependencies**

Install **react-native-svg**

```bash
yarn add react-native-svg
```

Install **react-native-vector-icons**

```bash
yarn add react-native-vector-icons
```

Install **styled-components**

```bash
yarn add styled-components
```

Install **styled-system**

```bash
yarn add styled-system
```

**If you are using npm :**

Install **NativeBase**

```bash
npm i native-base@next
```

**We will also have to install these peer dependencies**

Install **react-native-svg**

```bash
npm i react-native-svg
```

Install **react-native-vector-icons**

```bash
npm i react-native-vector-icons
```

Install **styled-components**

```bash
npm i styled-components
```

Install **styled-system**

```bash
npm i styled-system
```

## Setup with React Native

```bash
react-native init AwesomeNativeBase
cd AwesomeNativeBase
```

Install **NativeBase**

Using **Yarn**

```bash
yarn add native-base@next
```

Using **npm**

```bash
npm i native-base@next
```

Install **Peer Dependencies**

The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.

> [react-native@0.60.0](https://reactnative.dev/blog/2019/07/03/version-60) or above supports autolinking, so there is no need to run linking process. Read more about autolinking [here](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).

```bash
react-native link
```

You've successfully setup [NativeBase](https://nativebase.io/) with your [React Native](https://reactnative.dev/) app. Your React Native app is ready to run on iOS and Android devices.

## Setup for Next.js with Expo for Web

```bash
npx create-react-native-app -t with-nextjs
```

**Switch to your project directory , that you created.**

_For **Quick Installation of NativeBase** just copy this and paste in your terminal and Voila! you are good to go to [Setup NativeBaseProvider](notion://www.notion.so/docs/setup-provider)_

**_Using yarn_**

```bash
yarn add native-base@next react-native-svg react-native-vector-icons styled-components styled-system
```

**_Using npm_**

```bash
npm i native-base@next react-native-svg react-native-vector-icons styled-components styled-system
```

**For Step by Step Installation of All the dependencies follow the steps below**

**If you are using yarn :**

Install **NativeBase**

```bash
yarn add native-base@next
```

**We will also have to install these peer dependencies**

Install **react-native-svg**

```bash
yarn add react-native-svg
```

Install **react-native-vector-icons**

```bash
yarn add react-native-vector-icons
```

Install **styled-components**

```bash
yarn add styled-components
```

Install **styled-system**

```bash
yarn add styled-system
```

**If you are using npm :**

Install **NativeBase**

```bash
npm i native-base@next
```

**We will also have to install these peer dependencies**

Install **react-native-svg**

```bash
npm i react-native-svg
```

Install **react-native-vector-icons**

```bash
npm i react-native-vector-icons
```

Install **styled-components**

```bash
npm i styled-components
```

Install **styled-system**

```bash
npm i styled-system
```

By default Next.js doesn't support static assets like an Expo project. Because this is the intended functionality of Next.js, `@expo/next-adapter` doesn't add font support by default. If you want to use libraries like `expo-font`, `@expo/vector-icons`, or `react-native-vector-icons` you'll need to change a few things.

- Install the plugin - `yarn add next-fonts`
  - `[next-fonts](https://github.com/rohanray/next-fonts)` injects a Webpack loader to handle fonts.
- Wrap the font method with the Expo method in your `next.config.js`:

  - The order is important because Expo can mix in the location of vector icons to the existing font loader.

  ```jsx
  const { withExpo } = require("@expo/next-adapter");
  const withFonts = require("next-fonts");

  module.exports = withExpo(
    withFonts({
      projectRoot: __dirname,
    })
  );
  ```

- Now restart your project and you should be able to load fonts!
