---
id: Kbd
title: KBD
---

The keyboard key component exists to show which key or combination of keys performs a given action.

## Implements

- `View` from react-native

## Example

```SnackPlayer name=KBD%20Example
import React from 'react';
import { VStack, HStack, Kbd, Text, NativeBaseProvider } from 'native-base';

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
      <KbdComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Kbd

| Name      | Type           | Description                          | Default |
| --------- | -------------- | ------------------------------------ | ------- |
| textStyle | TextStyle      | The style to be applied to the text. | -       |
| fontSize  | number, string | Font size to apply to the text.      | -       |
| shadow    | number         | Shadow variant to apply to box.      | -       |
| Component |                |                                      |         |
