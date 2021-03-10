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
import { HStack, NativeBaseProvider, Center } from 'native-base';

function HStackComponent () {
  return (
    <HStack space={3}>
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="lightBlue.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white'}}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
    </HStack>
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
