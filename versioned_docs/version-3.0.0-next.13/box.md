---
id: box
title: Box
---

This is a generic component for low level layout needs. It is similar to `<div />` in HTML.

## Implements

- [`View`](https://reactnative.dev/docs/view) from [react-native](https://reactnative.dev/docs/view)
- [`color`](https://styled-system.com/api/#color), [`space`](https://styled-system.com/api/#space), [`layout`](https://styled-system.com/api/#layout), [`flexbox`](https://styled-system.com/api/#flexbox) & [`border`](https://styled-system.com/api/#border) from [style-system](https://styled-system.com/api/)

### The Box component is useful in some common use cases like:

- Create responsive layouts with ease.
- Provide a shorthand to pass styles via props (`bg` instead of `backgroundColor`).

## Example

```SnackPlayer name=Box%20Example
import React from "react";
import { Box, NativeBaseProvider } from "native-base";
function BoxComponent() {
  return (
    <Box width="100%" bg="orange.300" p={4} color="white">
      This is a Box
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BoxComponent />
    </NativeBaseProvider>
  );
}
```

## Composition

```SnackPlayer name=Box%20Composition
import React from "react";
import { Box, Heading, Divider, Flex, NativeBaseProvider } from "native-base";
function BoxComponent() {
  return (
    <Box width="100%" bg="blue.50" p={4} color="blue.700">
      <Heading size="xl">Title</Heading>
      <Divider mb={4} borderColor="teal.400" />
      This can be a paragraph of a Story about a wise fox.
      <Flex direction="row">
        <Box width="50%" bg="blue.50" p={4} color="blue.700">
          <Heading size="lg">Sub Title</Heading>
          <Divider mb={4} borderColor="teal.400" />
          This can be a paragraph of a Story about a wise fox.
        </Box>
        <Box width="50%" bg="blue.50" p={4} color="blue.700">
          <Heading size="lg">Sub Title</Heading>
          <Divider mb={4} borderColor="teal.400" />
          This can be a paragraph of a Story about a wise fox.
        </Box>
      </Flex>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BoxComponent />
    </NativeBaseProvider>
  );
}
```

## With Ref

```SnackPlayer name=Box%20Example(With ref)
import React from "react";
import { Box, NativeBaseProvider } from "native-base";

function BoxComponent() {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5,
      borderRadius: 10,
    });
  }, [myRef]);
  return (
    <Box width="100%" bg="orange.300" p={4} color="white" ref={myRef}>
      This is a Box
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BoxComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Box

| Name     | Type        | Description                                                                           | Default |
| -------- | ----------- | ------------------------------------------------------------------------------------- | ------- |
| shadow   | number      | Applies box shadow and accepts a number from 0 to 9                                   | -       |
| style    | stylesheet  | Applies user-defined styles and accepts a stylesheet.                                 | -       |
| children | JSX.Element | Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. | -       |
