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
import { Box, Text, useToken, NativeBaseProvider, Center } from 'native-base';

function UseTokenHookExample() {
  const [warning1, red2] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.warning.1`
    ['emerald.200', 'red.400']
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <Box bg={warning1}>
      <Text color={red2}>wonderful gradients</Text>
    </Box>
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
