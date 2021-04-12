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
import { Flex, Spacer, Center, Button, Heading, NativeBaseProvider } from 'native-base';

function FlexComponent() {
  const [direction, setDirection]: any = React.useState('column');
  return (
    <Center flex={1}>
      <Heading mb={3}>Primary Shades</Heading>
      <Button
        my={3}
        onPress={() => setDirection(direction === 'row' ? 'column' : 'row')}
      >
        Change Flex Direction
      </Button>
      <Flex flexDirection={direction}>
        <Center size={16} bg="primary.100" _text={{ color: 'gray.800' }}>
          100
        </Center>
        <Center size={16} bg="primary.200" _text={{ color: 'white' }}>
          200
        </Center>
        <Center bg="primary.300" size={16} _text={{ color: 'white' }}>
          300
        </Center>
        <Center size={16} bg="primary.400" _text={{ color: 'white' }}>
          400
        </Center>
      </Flex>
    </Center>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <FlexComponent />
    </NativeBaseProvider>
  );
}
```

### Using the Spacer

You can pass Spacer to add Space between Flex items.

```SnackPlayer name=Flex%20Example(Spacer)
import React from 'react';
import { Flex, Spacer, Center, Heading, NativeBaseProvider } from 'native-base';

function FlexComponent() {
  return (
    <Center flex={1}>
      <Heading mb={3}>Adding Spacer</Heading>
      <Flex h={56} w={20}>
        <Center
          size={16}
          bg="primary.400"
          rounded="xl"
          _text={{ color: 'white' }}
        >
          Box 1
        </Center>
        <Spacer />
        <Center
          size={16}
          bg="secondary.400"
          rounded="xl"
          _text={{ color: 'white' }}
        >
          Box 2
        </Center>
      </Flex>
    </Center>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <FlexComponent />
    </NativeBaseProvider>
  );
}
```

## Props

**Flex** implements **[Box](box.md)**, so all the Box Props can be passed to it, i.e. [`color`](styleProps.md#color-and-background-color), [`space`](styleProps.md#margin-and-padding), [`layout`](styleProps.md#layout-width-and-height), [`flexbox`](styleProps.md#flexbox) & [`border`](styleProps.md#borders) props from [style-system](styleProps.md).
