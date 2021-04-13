---
id: stack
title: Stack
---

`Stack` aligns items either `vertically` or `horizontaly` (default is `vertical`).

## Implements

- [`Box`](box.md) from [NativeBase](nativebase.md)
- [`color`](styleProps.md#color-and-background-color), [`space`](styleProps.md#margin-and-padding), [`layout`](styleProps.md#layout-width-and-height), [`flexbox`](styleProps.md#flexbox) & [`border`](styleProps.md#borders) from [style-system](styleProps.md)

## Example

```SnackPlayer name=Stack%20Example
import React from "react";
import { Stack, Center, Heading, Button, NativeBaseProvider } from "native-base";
function StackComponent() {
  const [direction, setDirection]: any = React.useState('column');
  return (
    <Stack space={3} alignItems="center">
        <Heading>Stack - {direction === 'row' ? 'Row' : 'Column'}</Heading>
      <Stack
        direction={direction}
        space={3}
        mb={3}
        alignItems="center"
      >
        <Center
          size={16}
          bg="primary.400"
          rounded="md"
          _text={{ color: 'white' }}
          shadow={3}
        >
          Box 1
        </Center>
        <Center
          bg="secondary.400"
          size={16}
          rounded="md"
          _text={{ color: 'white' }}
          shadow={3}
        >
          Box 2
        </Center>
        <Center
          size={16}
          bg="emerald.400"
          rounded="md"
          _text={{ color: 'white' }}
          shadow={3}
        >
          Box 3
        </Center>
      </Stack>
      <Button
        onPress={() => setDirection(direction === 'row' ? 'column' : 'row')}
      >
        Change Stack Direction
      </Button>
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

## Stack with Divider

```SnackPlayer name=Stack%20with%20Divider
import React from "react";
import { Stack, Heading, Divider, Box, Center, NativeBaseProvider } from "native-base";
function StackComponent() {
  return (
    <Stack space={3} alignItems="center">
      <Heading>Stack with Divider</Heading>
      <Box>
        <Stack
          direction="row"
          space={3}
          mb={3}
          alignItems="center"
          divider={<Divider bg="red.200" />}
        >
          <Box>NativeBase</Box>
          <Box>Easy</Box>
          <Box>Simple</Box>
          <Box>Fun</Box>
        </Stack>
      </Box>
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

### Important 🚨

> If you want to pass custom components (not a NativeBase imported component) as direct children of Stack, VStack, HStack, or ZStack you must wrap that in a [`Box`](box.md) for Stacks to work as expected.

## Props

| Name      | Type              | Description                                  | Default  |
| --------- | ----------------- | -------------------------------------------- | -------- |
| divider   | JSX.Element       | The divider element to use between elements. | -        |
| direction | `row` or `column` | Stack's direction.                           | `column` |
| reversed  | boolean           | The direction to stack the elements          | -        |

It further supports [`color`](styleProps.md#color-and-background-color), [`space`](styleProps.md#margin-and-padding), [`layout`](styleProps.md#layout-width-and-height), [`flexbox`](styleProps.md#flexbox) & [`border`](styleProps.md#borders) props from [style-system](styleProps.md).
