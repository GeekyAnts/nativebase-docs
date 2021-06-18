---
id: view
title: View
---

A generic [`View`](https://reactnative.dev/docs/view) from [React Native](https://reactnative.dev/docs/view)

## Implements

- [`View`](https://reactnative.dev/docs/view) from [`React Native`](https://reactnative.dev)
- [`color`](https://styled-system.com/api/#color), [`space`](https://styled-system.com/api/#space), [`layout`](https://styled-system.com/api/#layout), [`flexbox`](https://styled-system.com/api/#flexbox), [`position`](https://styled-system.com/api/#flexbox) & [`border`](https://styled-system.com/api/#border) from [`style-system`](https://styled-system.com/)

## Example

```ComponentSnackPlayer path=basic,View,Basic.tsx

```

## Props

```ComponentPropTable path=basic,View,View.tsx showStylingProps=true

```


<!-- 
```SnackPlayer name=View%20Example
import React from "react";
import { Text, VStack, NativeBaseProvider, View, Center } from "nat`ive-base";

function ViewComponent() {
  return (
    <View
      size={48}
      bg="emerald.400"
      justifyContent="center"
      alignItems="center"
      rounded="md"
    >
      <Text color="white">This is a View</Text>
    </View>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ViewComponent />
      </Center>
    </NativeBaseProvider>
  );
}
``` -->

