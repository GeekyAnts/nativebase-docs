---
id: installation
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To have `NativeBase` components running onto your native apps, all you need to do is, create a fresh React Native project using whatever you want, [expo](https://docs.expo.io/get-started/installation/) is a really great starting point so we will start with that and install the NativeBase using `npm` or `yarn` and add all the peer dependencies.

## Setup with Expo

Expo helps you make React Native apps with no build configuration. It works on macOS, Windows, and Linux. Refer this link for additional information on [Expo](https://docs.expo.io/) and setting up an Expo starter app.

_For **Installing NativeBase** just copy this and paste in your terminal and Voila! you are good to go to [Setup NativeBaseProvider](/docs/setup-provider)_

<Tabs
defaultValue='yarn'
values={[
{ label: 'Yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]}>

<TabItem value="yarn">

```bash
yarn add native-base@next react-native-svg @expo/vector-icons styled-components styled-system react-native-safe-area-context
```

</TabItem>

<TabItem value="npm">

```bash
npm i native-base@next react-native-svg @expo/vector-icons styled-components styled-system react-native-safe-area-context
```

</TabItem>

</Tabs>

## Setup with React Native

```bash
react-native init AwesomeNativeBase
cd AwesomeNativeBase
```

_Install **NativeBase**_
<Tabs
defaultValue='yarn'
values={[
{ label: 'Yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]}>

<TabItem value="yarn">

```bash
yarn add native-base@next
```

</TabItem>

<TabItem value="npm">

```bash
npm i native-base@next
```

</TabItem>

</Tabs>

_Install **Peer Dependencies**_

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

_For **Installing NativeBase** just copy this and paste in your terminal._

<Tabs
defaultValue='yarn'
values={[
{ label: 'Yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]}>

<TabItem value="yarn">

```bash
yarn add native-base@next react-native-svg @expo/vector-icons styled-components styled-system
```

</TabItem>

<TabItem value="npm">

```bash
npm i native-base@next react-native-svg @expo/vector-icons styled-components styled-system
```

</TabItem>

</Tabs>

### Important

By default Next.js doesn't support static assets like an Expo project. Because this is the intended functionality of Next.js, `@expo/next-adapter` doesn't add font support by default. If you want to use libraries like `expo-font`, `@expo/vector-icons`, you'll need to change a few things.

- Install the plugin - `yarn add next-fonts`
  - [`next-fonts`](https://github.com/rohanray/next-fonts) injects a Webpack loader to handle fonts.
- Wrap the font method with the Expo method in your `next.config.js`:

  - The order is important because Expo can mix in the location of vector icons to the existing font loader.

  ```jsx
  const { withExpo } = require('@expo/next-adapter');
  const withFonts = require('next-fonts');

  module.exports = withExpo(
    withFonts({
      projectRoot: __dirname,
    })
  );
  ```

- Now restart your project and you should be able to load fonts!
