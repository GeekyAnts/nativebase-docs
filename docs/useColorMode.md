---
id: use-color-mode
title: useColorMode
---

`useColorMode` is a custom hook used to get and set the color mode.

## Import

```jsx
import { useColorMode } from 'native-base';
```

## Example

```SnackPlayer name=useColorMode
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

function ColorModeExample() {
  const { colorMode, toggleColorMode } = useColorMode();
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

export default function () {
  return (
    <NativeBaseProvider>
      <ColorModeExample />
    </NativeBaseProvider>
  );
}


```

## Return

| Name            | Type            | Description                                | Default |
| --------------- | --------------- | ------------------------------------------ | ------- |
| colorMode       | `light`, `dark` | The active color mode                      | `light` |
| setColorMode    | function        | Use to set color mode.                     | -       |
| toggleColorMode | function        | Use to toggle between light and dark mode. | -       |
