---
id: setup-provider
title: Setup NativeBase Provider
---

NativeBaseProvider is a component that makes the theme available throughout your app. It uses React's Context API. Add NativeBaseProvider to the root of your app and update App.js as follows:

**App.js**

```jsx
import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, View } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## **Add custom theme (Optional)**

If you need to customize the default theme to match your design requirements, you can extend the `theme` from `native-base`.

NativeBase 3.0 provides an `extendTheme` function that deep merges the default theme with your customizations.

```jsx
// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
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

In the below example we will show how to store the active ColorMode in a async storage, so it can be consistent all around our app.

```tsx
import React from 'react';
import { NativeBaseProvider, ColorMode } from 'native-base';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({ children, theme }: any) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@example-wrapper-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem('@example-wrapper-mode', value);
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

## NativeBaseProvider Props

| Name                 | Type                                | Description                                                                                                                                | Default                  |
| -------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| initialWindowMetrics | Object                              | Mock data for frame and insets. [Refer this](https://github.com/th3rdwave/react-native-safe-area-context#testing) for further information. | -                        |
| colorModeManager     | { get : Function , set : Function } | Manage Color mode in your app                                                                                                              | -                        |
| theme                | Object                              | use custom theme in your app                                                                                                               | NativeBase Default Theme |
