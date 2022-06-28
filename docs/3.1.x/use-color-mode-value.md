---
id: use-color-mode-value
title: useColorModeValue
---

`useColorModeValue` is a custom hook used to get a value from either of the parameters passed based on active color mode value.

## Import

```jsx
import { useColorModeValue } from 'native-base';
```

## Example

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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={useColorModeValue('white', 'black')}>
      <Text fontSize="lg" display="flex">
        The active color mode is
        <Text bold>{useColorModeValue('Light', 'Dark')}</Text>
      </Text>
      <Button m={2} onPress={toggleColorMode}>
        Toggle
      </Button>
    </Center>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <UseColorMode />
    </NativeBaseProvider>
  );
}
```

## Return value

Accepts 2 parameters and returns either of the two, based on current color-mode (first parameter for light mode and second parameter for dark mode).
