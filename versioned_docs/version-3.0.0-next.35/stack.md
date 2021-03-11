---
id: stack
title: Stack
---

`Stack` aligns items vertically.

## Implements

- [`View`](https://reactnative.dev/docs/view) from [React Native](https://reactnative.dev/docs/view)
- `space`, `border`, `layout`, `flexbox` and `color` from [style-system](https://styled-system.com/api)

## Example

```SnackPlayer name=Stack%20Example
import React from "react";
import { Stack, Box, NativeBaseProvider, Center } from "native-base";
function StackComponent() {
  return (
    <Stack space={3} mb={3}>
      <Box borderRadius={4} size={10} bg="red.400" />
      <Box borderRadius={4} size={10} bg="purple.500" />
      <Box borderRadius={4} size={10} bg="yellow.300" />
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <StackComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

> If you want to pass custom components (not a nativebase imported component) as direct Children of Stack, VStack, HStack, or ZStack you must wrap that in a [`Box`](box.md) for Stacks to work as expected.

## Props

| Name     | Type                                                  | Description                                  | Default |
| -------- | ----------------------------------------------------- | -------------------------------------------- | ------- |
| divider  | JSX.Element                                           | The divider element to use between elements. | -       |
| space    | [`MarginProps`](https://styled-system.com/api/#space) | The space between each stack item.           | -       |
| reversed | boolean                                               | The direction to stack the elements          | -       |
| children | JSX.Element                                           | The elements to be stacked.                  | -       |
