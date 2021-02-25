---
id: flex
title: Flex
---

`Flex` is a `Box` with `display: flex` and comes with helpful style shorthand.

## Implements

- `Box` from native-base

## Import

```jsx
import { Flex, Spacer } from 'native-base';
```

- `Flex`: a **Box** with `display: flex`
- `Spacer`: creates an adjustable, empty space that can be used to tune the spacing between child elements within `Flex`

## Usage

Flex components comes with some helpful shorthand props:

- `flexDirection` is `direction`
- `flexWrap` is `wrap`
- `alignItems` is `align`
- `justifyContent` is `justify`

While you can pass the verbose props, using the shorthand can save you some time.

## Example

```SnackPlayer name=Flex%20Example
import React from 'react';
import { Flex, Text, Spacer, Center, NativeBaseProvider } from 'native-base';

function FlexComponent () {
  return (
    <Flex direction="row">
      <Center w="100px" bg="tomato">
        <Text>Box 1</Text>
      </Center>
      <Spacer />
      <Center bg="green.500" h="100" w="100px">
        <Text>Box 2</Text>
      </Center>
    </Flex>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FlexComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Using the Spacer

You can pass Spacer to add Space between Flex items.

```SnackPlayer name=Flex%20Example(Spacer)
import React from 'react';
import { Flex, Text, Spacer, Center, NativeBaseProvider } from 'native-base';

function FlexComponent () {
  return (
    <Flex>
      <Center w="100px" bg="tomato">
        <Text>Box 1</Text>
      </Center>
      <Spacer />
      <Center bg="green.500" h="100" w="100px">
        <Text>Box 2</Text>
      </Center>
    </Flex>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FlexComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

**Flex** is a **Box** with `display : flex` , so all the `Box Props` can be passed to **Flex.**
