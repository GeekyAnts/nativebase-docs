---
id: divider
title: Divider
---

`Divider` is used to visually separate content in a list or group.

## **Import**

```jsx
import { Divider } from 'native-base';
```

## Implements

- `View` from react-native

## Usage

The Divider displays a thin horizontal or vertical line.

```SnackPlayer name=Divider%20Usage
import React from "react";
import { Divider, NativeBaseProvider } from "native-base";

function DividerComponent() {
  return <Divider mt={5} />;
}
export default function () {
  return (
    <NativeBaseProvider>
      <DividerComponent />
    </NativeBaseProvider>
  );
}
```

## Divider Orientation

Pass the `orientation` prop and set it to either `horizontal` or `vertical`.

> **Note:** If the horizontal orientation is used, make sure that the parent element is assigned a width and If the vertical orientation is used, make sure that the parent element is assigned a height.

```SnackPlayer name=Divider%20Divider Orientation
import React from "react";
import { Divider, Center, Box, NativeBaseProvider } from "native-base";

function DividerComponent() {
  return (
    <Box w="100%">
      <Divider orientation="horizontal" mb={4} />
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <DividerComponent />
    </NativeBaseProvider>
  );
}
```

## Composition

You can use `bg` or `backgroundColor` to change the divider's color and `width` and `height` to change its width and height respectively.

```SnackPlayer name=Divider%20Composition
import React from "react";
import { Divider, Flex, Text, NativeBaseProvider } from "native-base";

function DividerComponent() {
  return (
    <Flex direction="row" p={4}>
      <Text>Simple</Text>
      <Divider bg="red.500" w={1} mx={4} orientation="vertical" />
      <Text>Easy</Text>
      <Divider bg="blue.500" mx={4} orientation="vertical" />
      <Text>Beautiful</Text>
      <Divider bg="green.500" mx={4} orientation="vertical" />
      <Text>Nativebase</Text>
    </Flex>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <DividerComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Divider

| Name        | Type                 | Description                     | Default |
| ----------- | -------------------- | ------------------------------- | ------- |
| orientation | horizontal, vertical | The orientation of the divider. | -       |
