---
id: theme
title: Using Theme
---

NativeBase provides multiple tools to use the central theme defined in the app. First tool is [`useTheme`](/useTheme.md), which you can use to access the values from the current theme.

## useTheme

```SnackPlayer name=useTheme%20Demo
import React from 'react';
import {
  NativeBaseProvider,
  useTheme,
  SimpleGrid,
  Center,
  Box,
} from 'native-base';

function ColorPalete() {
  const { colors } = useTheme();
  return (
    <SimpleGrid columns={5}>
      {Object.keys(colors['emerald']).map((colorKey) => (
        <Box p={5} bg={`emerald.${colorKey}`} />
      ))}
    </SimpleGrid>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} p={3}>
        <ColorPalete />
      </Center>
    </NativeBaseProvider>
  );
}

```

## useToken

You can also get specific values from the theme with [`useToken`](/useToken.md) hook.

```SnackPlayer name=useToken%20Demo
import React from 'react';
import { useToken, Box, NativeBaseProvider, Center, Text } from 'native-base';

function Tokens() {
  const [contrastThreshold, lightText] = useToken('colors', [
    'contrastThreshold',
    'lightText',
  ]);
  return (
    <Box bg="emerald.400" flexDirection="row">
      Contrast threshold is: <Text color={lightText} fontWeight="bold">
        {contrastThreshold}
      </Text>
    </Box>
  );
}
export default function () {
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

```SnackPlayer name=useContrastText

import React from 'react';
import { Button, useContrastText, NativeBaseProvider, Center } from 'native-base';
function UseContrastingTextHook () {
  const bgDark = 'gray.900';
  const bgLight = 'gray.50';
  const colorContrastDark = useContrastText(bgDark);
  const colorContrastLight = useContrastText(bgLight);

  return (
    <>
      <Button bg={bgDark} _text={{ color: colorContrastDark }}>
        NativeBase
      </Button>
      <Button bg={bgLight} _text={{ color: colorContrastLight }}>
        NativeBase
      </Button>
    </>
  );
}

export default function () {
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

If you want to define some conditionals based on current color mode or change the color mode then you can try [useColorMode](useColorMode.md).

```SnackPlayer name=useColorMode
import React from 'react';
import {
  NativeBaseProvider,
  VStack,
  useColorMode,
  Text,
  Button,
  Center,
} from 'native-base';

function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'black' : 'white'}>
      <Text fontSize="lg" display="flex">
        The active color mode is <Text bold>{colorMode}</Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <UseColorMode />
    </NativeBaseProvider>
  );
}

```

## useColorModeValue

If you do not want to add conditionals for color mode everywhere and keep the code clean, then you can use [useColorModeValue](useColorModeValue.md) hook. It takes two parameters, light mode value as the first and dark mode value as second.

```SnackPlayer name=useColorModeValue
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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={useColorModeValue('white', 'black')}>
      <Text fontSize="lg" display="flex">
        The active color mode is <Text bold>{useColorModeValue('Light', 'Dark')}</Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <UseColorMode />
    </NativeBaseProvider>
  );
}

```
