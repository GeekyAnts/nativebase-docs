---
id: responsive-style
title: Responsive
---

NativeBase V3 supports responsive styles out of the box. Instead of manually adding responsiveness to your apps, NativeBase V3 allows you provide object and array values to add responsive styles.

Responsive syntax relies on the breakpoints defined in the theme object.

```jsx
const breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};
```

To make styles responsive, you can use either the array or object syntax.

## The Array syntax

All style props that arrays as values for responsive styles.

For example, to make a `Box` width or w responsive using the array syntax, here's what you need to do:

```jsx isLive=true
import React from 'react';
import { NativeBaseProvider, Center } from 'native-base';
function BreakpointExample() {
  return (
    <Center
      bg="emerald.400"
      _text={{ color: 'white' }}
      rounded="xl"
      w={[24, 48, 72]}
      h={24}
    >
      This is a box
    </Center>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreakpointExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## The Object syntax

You can also define responsive values with breakpoint aliases in an object. Any undefined alias key will define the base, non-responsive value.

For example, to make a `Text` fontSize responsive using the object syntax, here's what you need to do:

```jsx isLive=true
import React from 'react';
import { Text, NativeBaseProvider, Center } from 'native-base';
function BreakpointExample() {
  return (
    <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
      This is responsive text
    </Text>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <Center flex={1}>
      <BreakpointExample />
    </Center>
  );
}
```

## Demo

Here's a simple example of a component that uses a stacked layout on small screens, and a side-by-side layout on larger screens.

```jsx isLive=true
import React from 'react';
import {
  NativeBaseProvider,
  Center,
  Box,
  Text,
  Image,
  Heading,
  Stack,
} from 'native-base';
function BreakpointExample() {
  return (
    <Box
      flexDirection={{ base: 'column', md: 'row' }}
      shadow={4}
      rounded="xl"
      overflow="hidden"
    >
      <Box width={{ md: 24 }} height={{ base: 32, md: '100%' }}>
        <Image
          source={{
            uri: 'https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/b56d1e9b-3861-4c89-995d-b8fb6240a762/nike-just-do-it.jpg',
          }}
          alt="Shoes"
        />
      </Box>
      <Stack p={3} space={2} minW={32}>
        <Text fontSize="xs" color="red.400" fontWeight="semibold">
          Just In
        </Text>
        <Stack space={1}>
          <Heading size="sm">Jordan MA2</Heading>
          <Text fontWeight="medium" color="blueGray.600">
            Older Kids' Shoe
          </Text>
          <Text fontWeight="medium" color="blueGray.600">
            2 colors
          </Text>
        </Stack>
        <Text fontSize="md" fontWeight="semibold" color="blueGray.600">
          $ 150
        </Text>
      </Stack>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreakpointExample />
      </Center>
    </NativeBaseProvider>
  );
}
```
