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

## Usage

```SnackPlayer name=HStack%20Usage
import React from 'react';
import { HStack, Text, Divider, Heading, Stack, NativeBaseProvider, Center } from 'native-base';

function HStackComponent () {
  return (
    <Stack space={4}>
      <Heading>HStack</Heading>
      <HStack divider={<Divider borderColor="red.200" />} reversed space={8}>
        <Text>Test Text</Text>
        <Text>Testing this text with HStacks</Text>
      </HStack>
    </Stack>
  );
}
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

## Props

| Name     | Type                                                  | Description                                  | Default |
| -------- | ----------------------------------------------------- | -------------------------------------------- | ------- |
| divider  | JSX.Element                                           | The divider element to use between elements. | -       |
| space    | [`MarginProps`](https://styled-system.com/api/#space) | The space between each stack item.           | -       |
| reversed | boolean                                               | The direction to stack the elements          | -       |
| children | JSX.Element                                           | The elements to be stacked.                  | -       |
