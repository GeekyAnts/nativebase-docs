---
id: hStack
title: HStack / Row
---

`HStack` aligns items horizontally. `Row` is also an alias for `HStack`.

## Implements

- [`Stack`](stack.md)

## Import

```jsx
import { HStack } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=HStack%20Usage
import React from 'react';
import { HStack,Stack, Center, Heading, NativeBaseProvider } from 'native-base';

function HStackComponent () {
  return (
    <Stack space={3} alignItems="center" >
      <Heading>HStack</Heading>
      <HStack space={3} alignItems="center">
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
      </HStack>
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <HStackComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Important 🚨

> If you want to pass custom components (not a NativeBase imported component) as direct children of Stack, VStack, HStack, or ZStack you must wrap that in a [`Box`](box.md) for Stacks to work as expected.

## Props

| Name     | Type        | Description                                  | Default |
| -------- | ----------- | -------------------------------------------- | ------- |
| divider  | JSX.Element | The divider element to use between elements. | -       |
| reversed | boolean     | The direction to stack the elements          | -       |

It further supports [`color`](styleProps.md#color-and-background-color), [`space`](styleProps.md#margin-and-padding), [`layout`](styleProps.md#layout-width-and-height), [`flexbox`](styleProps.md#flexbox) & [`border`](styleProps.md#borders) props from [style-system](styleProps.md).
