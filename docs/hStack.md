---
id: hStack
title: HStack/ Row
---

HStack aligns items horizontally.

## Implements

- `Stack` from nativebase

## Import

```jsx
import { HStack } from 'native-base';
```

## Usage

```SnackPlayer name=HStack%20Usage
import React from 'react';
import { HStack, Text, Divider, Heading, Stack, NativeBaseProvider } from 'native-base';

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
      <HStackComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### HStack

| Name     | Type        | Description                                  | Default |
| -------- | ----------- | -------------------------------------------- | ------- |
| divider  | JSX.Element | The divider element to use between elements. | -       |
| space    | MarginProps | The space between each stack item.           | -       |
| reversed | boolean     | The direction to stack the elements.         | -       |
