---
id: use-color-mode-value
title: useColorModeValue
---

`useColorModeValue` is a custom hook used to get value based on active color mode value.

## Import

```jsx
import { useColorModeValue } from 'native-base';
```

## Example

```SnackPlayer name=useColorModeValue
import React from 'react';
import { NativeBaseProvider, useColorModeValue, Text } from 'native-base';

const UseColorModeValue = () => (
  <Text fontSize='lg'>
    The active color mode is
    <Text bold>{useColorModeValue('Light', 'Dark')}</Text>
  </Text>
);


export default function () {
  return (
    <NativeBaseProvider>
      <UseColorModeValue />
    </NativeBaseProvider>
  );
}
```

## Return

Accepts 2 parameters and returns either of the two, based on current color-mode (first parameter for light mode and second parameter for dark mode).
