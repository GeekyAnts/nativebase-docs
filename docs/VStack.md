---
id: VStack
title: VStack / Column
---

`VStack` aligns items vertically.`Column` is also an alias for `VStack`.

## Implements

- [`Stack`](stack.md)

## Import

```jsx
import { VStack } from 'native-base';
```

## Usage

```SnackPlayer name=VStack%20Usage
import React from 'react';
import { VStack, Center, Heading, NativeBaseProvider } from 'native-base';

function HStackComponent () {
  return (
    <VStack space={4} alignItems="center">
      <Heading>VStack</Heading>
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
    </VStack>
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

| Name     | Type                                                  | Description                                  | Default |
| -------- | ----------------------------------------------------- | -------------------------------------------- | ------- |
| divider  | JSX.Element                                           | The divider element to use between elements. | -       |
| space    | [`MarginProps`](https://styled-system.com/api/#space) | The space between each stack item.           | -       |
| reversed | boolean                                               | The direction to stack the elements          | -       |
| children | JSX.Element                                           | The elements to be stacked.                  | -       |
