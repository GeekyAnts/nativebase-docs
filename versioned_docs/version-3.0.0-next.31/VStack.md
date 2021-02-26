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
import { VStack, Text, Divider, Heading, NativeBaseProvider, Center } from 'native-base';

function VStackComponent () {
  return (
    <VStack
      divider={<Divider borderColor="red.200" />}
      space={4}
      width="100%"
    >
      <Heading>VStack</Heading>
      <Text>Test Text</Text>
      <Text>Testing this text with Stacks</Text>
      <Text>Testing this text with Stacks</Text>
      <Text>Testing this text with Stacks</Text>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <VStackComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name     | Type                                                  | Description                                  | Default |
| -------- | ----------------------------------------------------- | -------------------------------------------- | ------- |
| divider  | JSX.Element                                           | The divider element to use between elements. | -       |
| space    | [`MarginProps`](https://styled-system.com/api/#space) | The space between each stack item.           | -       |
| reversed | boolean                                               | The direction to stack the elements          | -       |
| children | JSX.Element                                           | The elements to be stacked.                  | -       |
