---
id: flex
title: Flex
---

`Flex` is a [`Box`](box.md) with `display: flex` and comes with helpful style shorthand.

## Implements

- [`Box`](box.md)

## Import

```jsx
import { Flex, Spacer } from 'native-base';
```

- `Flex`: a **[Box](box.md)** with `display: flex`
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
import { Flex, Spacer, Center, NativeBaseProvider } from 'native-base';

function FlexComponent() {
  return (
    <Flex h={56} w={20} justify="space-between">
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="lightBlue.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
    </Flex>
  );
}

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
import { Flex, Spacer, Center, NativeBaseProvider } from 'native-base';

function FlexComponent() {
  return (
    <Flex h={56} w={20} justify="space-between">
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Spacer />
      <Center
        size={16}
        bg="lightBlue.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
    </Flex>
  );
}

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

**Flex** implements **[Box](box.md)**, so all the Box Props can be passed to it.
