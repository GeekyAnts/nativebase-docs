---
id: theme
title: Using Theme
---

NativeBase provides multiple tools to use the central theme defined in the app. First tool is [`useTheme`](/use-theme), which you can use to access the values from the current theme.

## useTheme

```jsx isLive=true
import React from 'react';
import {
  NativeBaseProvider,
  useTheme,
  FlatList,
  Center,
  Box,
} from 'native-base';

function ColorPalete() {
  const { colors } = useTheme();
  return (
    <Box>
      <FlatList
        numColumns="5"
        data={Object.keys(colors['primary'])}
        renderItem={({ item }) => <Box p="5" bg={`primary.${item}`} />}
      />
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1} p="3">
        <ColorPalete />
      </Center>
    </NativeBaseProvider>
  );
}
```

## useToken

You can also get specific values from the theme with [`useToken`](/use-token) hook.

```jsx isLive=true
import React from 'react';
import { useToken, NativeBaseProvider, Center, Text } from 'native-base';

function Tokens() {
  const [contrastThreshold, lightText] = useToken('colors', [
    'contrastThreshold',
    'lightText',
  ]);
  return (
    <Center bg="primary.600" flexDirection="row" p="4" rounded="4">
      Contrast threshold is:{' '}
      <Text color={lightText} fontWeight="bold">
        {contrastThreshold}
      </Text>
    </Center>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Tokens />
      </Center>
    </NativeBaseProvider>
  );
}
```

## useContrastText

If you are defining the background yourself and pass a contrasting color to the text then you can use [`useContrastText`](use-contrast-text).

```jsx isLive=true
import React from 'react';
import {
  Button,
  Stack,
  useContrastText,
  NativeBaseProvider,
  Center,
} from 'native-base';
function UseContrastingTextHook() {
  const bgDark = 'primary.600';
  const bgLight = 'primary.200';
  const colorContrastDark = useContrastText(bgDark);
  const colorContrastLight = useContrastText(bgLight);

  return (
    <Stack space="4">
      <Button bg={bgDark} _text={{ color: colorContrastDark }}>
        NativeBase
      </Button>
      <Button bg={bgLight} _text={{ color: colorContrastLight }}>
        NativeBase
      </Button>
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseContrastingTextHook />
      </Center>
    </NativeBaseProvider>
  );
}
```

## useColorMode

If you want to define some conditionals based on current color mode or change the color mode then you can try [useColorMode](use-color-mode).

```jsx isLive=true
import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
} from 'native-base';

function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}>
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{' '}
        <Text bold fontSize="lg">
          {colorMode}
        </Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseColorMode />
      </Center>
    </NativeBaseProvider>
  );
}
```

## useColorModeValue

If you do not want to add conditionals for color mode everywhere and keep the code clean, then you can use [useColorModeValue](use-color-mode-value) hook. It takes two parameters, light mode value as the first and dark mode value as second.

```jsx isLive=true
import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  useColorModeValue,
} from 'native-base';

function UseColorMode() {
  const { toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={useColorModeValue('warmGray.50', 'coolGray.800')}>
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{' '}
        <Text bold fontSize="18px">
          {useColorModeValue('Light', 'Dark')}
        </Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseColorMode />
      </Center>
    </NativeBaseProvider>
  );
}
```
