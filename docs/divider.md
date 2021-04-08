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

- [`View`](https://reactnative.dev/docs/view) from [React Native](https://reactnative.dev).

## Examples

### Basic

The Divider displays a thin horizontal or vertical line.

```SnackPlayer name=Divider%20Usage
import React from 'react';
import { Divider, Heading, Icon, NativeBaseProvider, Center, Box } from 'native-base';

function DividerComponent() {
  return (
    <Box w={190}>
      <Heading mx={3}>
        Chrome <Icon ml="auto" type="AntDesign" name="chrome" />
      </Heading>
      <Divider my={2} />
      <Heading mx={3}>
        Firefox {'  '}
        <Icon ml="auto" type="FontAwesome" name="firefox" />
      </Heading>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <DividerComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Divider Orientation

Pass the `orientation` prop and set it to either `horizontal` or `vertical`.

> **Note:** If the horizontal orientation is used, make sure that the parent element is assigned a width and If the vertical orientation is used, make sure that the parent element is assigned a height.

```SnackPlayer name=Divider%20Divider Orientation
import React from "react";
import { Divider, Heading, Flex, Icon, Center, Box, NativeBaseProvider } from "native-base";

function DividerComponent() {
  return (
    <Box w={160}>
      <Heading mx="auto">Browser</Heading>
      <Divider my={2} />
      <Flex mx={3} direction="row" justify="space-evenly">
        <Icon type="AntDesign" name="chrome" />
        <Divider orientation="vertical" />
        <Icon type="FontAwesome" name="firefox" />
      </Flex>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <DividerComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Composition

You can use `bg` or `backgroundColor` to change the divider's color and `width` and `height` to change its width and height respectively.

```SnackPlayer name=Divider%20Composition
import React from 'react';
import { Divider, HStack, Text, NativeBaseProvider, Center } from 'native-base';

function DividerComponent() {
  return (
    <HStack p={4}>
      <Text>Simple</Text>
      <Divider bg="red.500" mx={2} orientation="vertical" />
      <Text>Easy</Text>
      <Divider bg="blue.500" mx={2} orientation="vertical" />
      <Text>Beautiful</Text>
      <Divider bg="green.500" mx={2} orientation="vertical" />
      <Text>NativeBase</Text>
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <DividerComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

## Props

| Name        | Type                               | Description                     | Default      |
| ----------- | ---------------------------------- | ------------------------------- | ------------ |
| orientation | `horizontal`, `vertical`           | The orientation of the divider. | `horizontal` |
| bg          | [`color`](default-theme.md#colors) | Divider's color.                | `muted.200`  |
| size        | `number`                           | Divider's width in px.          | `1`          |

Apart from the above props, you can pass all the [`Box`](box.md#props) props.

## Accessibility

- Divider has role set to `separator` and `aria-orientation` to either `horizontal` or `vertical`.
