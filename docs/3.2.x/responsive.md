---
id: responsive-style
title: Responsive
---

NativeBase v3 supports responsive styles out of the box. Instead of manually adding responsiveness to your apps, NativeBase v3 allows you provide object and array values to add responsive styles.

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

```jsx isLive
import React from 'react';
import { Center } from 'native-base';
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
    <Center flex={1}>
      <BreakpointExample />
    </Center>
  );
}
```

## The Object syntax

You can also define responsive values with breakpoint aliases in an object. Any undefined alias key will define the base, non-responsive value.

For example, to make a `Text` fontSize responsive using the object syntax, here's what you need to do:

```jsx isLive
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

```jsx isLive
import React from 'react';
import {
  useToken,
  NativeBaseProvider,
  Center,
  Text,
  Box,
  HStack,
  Image,
  Stack,
  Heading,
} from 'native-base';

function App() {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      rounded="lg"
      overflow="hidden"
      width={['72', '72', '4/6']}
      shadow="1"
      _light={{ backgroundColor: 'coolGray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <Box>
        <Image
          w={['100%', '100%', '40']}
          h="100%"
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
          alt="image"
        />
        <Center
          bg="violet.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack flex="1" p="4" space={[3, 3, 1.5]}>
        <Stack space="2">
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            color="violet.500"
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space="4" justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{ color: 'warmGray.200' }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <App />
      </Center>
    </NativeBaseProvider>
  );
}
```
