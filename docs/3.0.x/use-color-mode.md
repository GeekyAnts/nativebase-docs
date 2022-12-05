---
id: use-color-mode
title: useColorMode
metaTitle: useColorMode | NativeBase
metaDescription: useColorMode in NativeBase is a custom hook that can set the color mode or retrieve it. Read this document to know more about useColorMode hook with examples.
---

`useColorMode` is a custom hook used to get and set the color mode.

## Import

```jsx
import { useColorMode } from "native-base";
```

## Example

```jsx isLive=true
import React from "react";
import {
  NativeBaseProvider,
  VStack,
  useColorMode,
  Text,
  Button,
  Center,
} from "native-base";

function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={colorMode === "dark" ? "black" : "white"}>
      <Text fontSize="lg" display="flex">
        The active color mode is <Text bold>{colorMode}</Text>
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

## Return

| Name            | Type            | Description                                | Default |
| --------------- | --------------- | ------------------------------------------ | ------- |
| colorMode       | `light`, `dark` | The active color mode.                     | `light` |
| setColorMode    | function        | Use to set color mode.                     | -       |
| toggleColorMode | function        | Use to toggle between light and dark mode. | -       |
