---
id: color-mode
title: Color mode (Dark Mode)
---

When you use the `NativebaseProvider` at the root of your app, you can automatically use color mode in your apps.

By default, most components are dark mode compatible. To handle color mode manually in your application, use the `useColorMode` or `useColorModeValue` hooks.

## useColorMode

`useColorMode` is a React hook that gives you access to the current color mode, and a function to toggle the color mode.

Calling toggleColorMode anywhere in your app tree toggles the color mode.

## useColorModeValue

`useColorModeValue` is a React hook used to change any value or style based on the color mode. It takes 2 arguments: the value in light mode, and the value in dark mode.

```ComponentSnackPlayer path=hooks,useColorModeValue,Basic.tsx

```

## _light and _dark Pseudo props

All components accepts \_light and \_dark props which applies the passed props on dark and light mode.

```jsx isLive=true
import React from 'react';
import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  Center,
  useColorModeValue,
  Text,
  NativeBaseProvider,
} from 'native-base';

function PseudoPropsUsage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1}>
      <Box
        p={4}
        maxW="300"
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "warmGray.50",
        }}
      >
        <Text fontSize="lg" display="flex" mb="20">
          The active color mode is{' '}
          <Text bold fontSize="lg">
            {colorMode}
          </Text>
        </Text>
        <Button onPress={toggleColorMode}>Toggle</Button>
      </Box>
    </Center>
  );
}

export const Example = () => {
  return (
    <NativeBaseProvider>
      <PseudoPropsUsage />
    </NativeBaseProvider>
  );
};
```

## Default color mode

You can set default color mode. By default, the color mode will be `light`. To support this, extend the default theme with a `config`

```jsx
import { NativeBaseProvider, extendTheme, Text } from 'native-base';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
const customTheme = extendTheme({ config });
function App() {
  return (
    // pass itto NativeBaseProvider
    <NativeBaseProvider theme={customTheme}>
      // Your component
    </NativeBaseProvider>
  );
}
```

## Persisting the color mode

You can persist the color mode in you app by defining you color mode manager of type `StorageManager` and passing it to the NativeBaseProvider. This will retain the color mode even when the app is refreshed.

- For Native

```jsx
import React from 'react';
import { NativeBaseProvider, StorageManager, ColorMode } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the colorModeManager,
// here we are using react-native-async-storage (https://react-native-async-storage.github.io/async-storage/)
const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', value);
    } catch (e) {
      console.log(e);
    }
  },
};
export default function () {
  return (
    // pass it to NativeBaseProvider
    <NativeBaseProvider colorModeManager={colorModeManager}>
      // Your components
    </NativeBaseProvider>
  );
}
```

- For web

```jsx
import React from 'react';
import { ColorMode, NativeBaseProvider, StorageManager } from 'native-base';
const colorModeManager: StorageManager = {
  get: async () => {
    let val = localStorage.getItem('@color-mode');
    return val === 'dark' ? 'dark' : 'light';
  },
  set: async (value: ColorMode) => {
    let strValue = value ? value.toString() : '';
    localStorage.setItem('@color-mode', strValue);
  },
};

export default function () {
  return (
    // pass it to NativeBaseProvider
    <NativeBaseProvider colorModeManager={colorModeManager}>
      // Your components
    </NativeBaseProvider>
  );
}
```
