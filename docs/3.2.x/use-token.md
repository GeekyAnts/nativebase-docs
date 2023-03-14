---
id: use-token
title: useToken
---

`useToken` is a custom hook used to resolve design tokens from the theme.

## Import

```jsx
import { useToken } from 'native-base';
```

## Example

```jsx isLive=true
import React from 'react';
import {
  Box,
  Text,
  useToken,
  NativeBaseProvider,
  Center,
  HStack,
  VStack,
} from 'native-base';

function UseTokenHookExample() {
  const [colorPick1, colorPick2] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.warning.1`
    ['yellow.500', 'cyan.500']
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <VStack space={5}>
      <HStack space={2} alignItems="center">
        <Box bg={colorPick1} p="3"></Box>
        <Text>{colorPick1}</Text>
      </HStack>
      <HStack space={2} alignItems="center">
        <Box bg={colorPick2} p="3"></Box>
        <Text>{colorPick2}</Text>
      </HStack>
    </VStack>
  );
}
export function Example() {
  return (
    <Center flex={1}>
      <UseTokenHookExample />
    </Center>
  );
}
```
