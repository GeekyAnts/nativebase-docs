---
id: use-breakPoint-value
title: useBreakpointValue
---

`useBreakpointValue` is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size.

## Import

```jsx
import { useBreakpointValue } from 'native-base';
```

## Return value

The `useBreakpointValue` hook returns the value for the current breakpoint.

## Usage

```jsx isLive=true
import React from 'react';
import {
  Box,
  useBreakpointValue,
  NativeBaseProvider,
  Center,
} from 'native-base';
function UseBreakpointValueExample() {
  const color = useBreakpointValue({
    base: 'red.200',
    sm: 'blue.200',
    md: 'blue.200',
  });
  return (
    <Box bg={color} w={'100px'}>
      This is a box
    </Box>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseBreakpointValueExample />
      </Center>
    </NativeBaseProvider>
  );
}
```
