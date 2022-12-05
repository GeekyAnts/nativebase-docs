---
id: setup-provider
title: Setup NativeBase Provider
---

NativeBaseProvider is a component that makes the theme available throughout your app. It uses React's Context API. Add NativeBaseProvider to the root of your app and update App.js as follows:

**App.js**

```jsx
import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
```

## Add custom theme (Optional)

If you need to customize the default theme to match your design requirements, you can extend the `theme` from `native-base`.

NativeBase 3.0 provides an `extendTheme` function that deep merges the default theme with your customizations.

```jsx
// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
}
```

## Add colorModeManager (Optional)

If you want to do something with the color modes in your app, you can use colorModeManager Prop of NativeBaseProvider to achieve it.

In the example below, we show how to store the active ColorMode in an async storage, so it can be consistent all around your app.

```tsx
import React from "react";
import { NativeBaseProvider, ColorMode } from "native-base";
import type { StorageManager } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ children, theme }: any) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem("@my-app-color-mode");
        return val === "dark" ? "dark" : "light";
      } catch (e) {
        console.log(e);
        return "light";
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem("@my-app-color-mode", value);
      } catch (e) {
        console.log(e);
      }
    },
  };
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {/* Your App Goes Here */}
    </NativeBaseProvider>
  );
};
```

## Add external dependencies (Optional)

If you want to use the [Gradient feature in Box](box#with-linear-gradient),it has to pass linear gradient dependency as a config object in NativeBaseProvider. This dependency can be either from [expo-linear-gradient](https://docs.expo.io/versions/latest/sdk/linear-gradient/) or [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient).

```jsx
import React from "react";
import { NativeBaseProvider } from "native-base";

const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
```

## Add isSSR (Optional)

If you are using NativeBase for a server side rendering app like Next.js, you have to pass isSSR prop. This will resolve the responsive props to media queries on the server side and fix an issue with jumping UI on hydration.

```jsx
import React from "react";
import { NativeBaseProvider } from "native-base";

export default () => {
  return (
    <NativeBaseProvider isSSR>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
```

## NativeBaseProvider Props

| Name                 | Type                                | Description                                                                                                                                | Default                  |
| -------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| isSSR                | Boolean                             | Tells the provider if your app is rendered on the server side or not.                                                                            | -                        |
| initialWindowMetrics | Object                              | Mock data for frame and insets. [Refer this](https://github.com/th3rdwave/react-native-safe-area-context#testing) for further information. | -                        |
| colorModeManager     | { get : Function , set : Function } | Manages Color mode in your app                                                                                                              | -                        |
| theme                | Object                              | Provides a custom theme for your app.                                                                                                               | NativeBase Default Theme |
| config               | {dependencies: {}}                  | To include external dependencies. For example - [Linear gradient](box#with-linear-gradient)                                                | -                        |
