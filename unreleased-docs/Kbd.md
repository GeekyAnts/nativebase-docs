---
id: Kbd
title: KBD
---

The keyboard key component exists to show which key or combination of keys performs a given action.

## Implements

- [`Box`](box.md)

## Examples

### Basic

```SnackPlayer name=KBD%20Example
import React from 'react';
import { VStack, HStack, Kbd, Text, NativeBaseProvider, Center } from 'native-base';

function KbdComponent () {
  return (
    <VStack space={8}>
      <HStack>
        <Kbd>shift</Kbd>
        <Text> + </Text>
        <Kbd>C</Kbd>
      </HStack>
      <HStack>
        <Kbd>shift</Kbd>
        <Text> then </Text>
        <Kbd>H</Kbd>
      </HStack>
      <HStack>
        <Kbd>alt</Kbd>
        <Text> or </Text>
        <Kbd>option</Kbd>
      </HStack>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <KbdComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

`Kbd` implements **[Box](box.md)**, so all the Box Props can be passed to it.
