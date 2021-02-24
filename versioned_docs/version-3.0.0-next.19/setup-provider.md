---
id: setup-provider
title: Setup NativeBase Provider
---

NativeBaseProvider is a component that makes the theme available throughout your App for use using React's Context API. You need to Add NativeBaseProvider to the Root of your App, for example this is how `App.js`, that get's generated when you create a App using Expo should be updated in order to make NativeBase Components work as they are intended to be.

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
        <StatusBar style='auto' />
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
