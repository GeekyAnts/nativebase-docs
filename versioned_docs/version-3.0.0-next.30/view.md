---
id: view
title: View
---

A generic [`View`](https://reactnative.dev/docs/view) from [React Native](https://reactnative.dev/docs/view)

## Implements

- [`View`](https://reactnative.dev/docs/view) from [`React Native`](https://reactnative.dev)
- [`color`](https://styled-system.com/api/#color), [`space`](https://styled-system.com/api/#space), [`layout`](https://styled-system.com/api/#layout), [`flexbox`](https://styled-system.com/api/#flexbox), [`position`](https://styled-system.com/api/#flexbox) & [`border`](https://styled-system.com/api/#border) from [`style-system`](https://styled-system.com/)

## Example

```SnackPlayer name=View%20Example
import React from "react";
import { Text, VStack, NativeBaseProvider, View, Center } from "native-base";

function ViewComponent() {
  return (
    <View
      width="100%"
      height={32}
      bg="blue.400"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white">This is Text</Text>
    </View>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ViewComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name          | Type                                     | Description                                                                           | Default |
| ------------- | ---------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| shadow        | number                                   | Applies box shadow and accepts a number from 0 to 9                                   | -       |
| style         | stylesheet                               | Applies user-defined styles and accepts a stylesheet.                                 | -       |
| children      | JSX.Element                              | Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. | -       |
| SafeAreaProps | [SafeAreaProps](safe-area-view-props.md) | Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. | -       |
