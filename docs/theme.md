---
id: theme
title: How to use theme
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
