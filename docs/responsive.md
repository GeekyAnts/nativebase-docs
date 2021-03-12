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

For Example to make a `Box` width or w responsive using the array syntax, here's what you need to do:

```SnackPlayer name=Responsive%20Usage
import React from 'react';
import { NativeBaseProvider, Center } from 'native-base';
function BreakpointExample () {
  return (
    <Center bg="emerald.400" _text={{color: "white"}}rounded="xl" w={[24, 48, 72]} h={24}>
      This is a box
    </Center>
  );
};

// Example template which wraps component with NativeBaseProvider
export default function () {
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

For Example to make a `Text` fontSize responsive using the object syntax, here's what you need to do:

```SnackPlayer name=Responsive%20ObjectSyntax
import React from 'react';
import { Text, NativeBaseProvider, Center } from 'native-base';
function BreakpointExample () {
  return (
    <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
      This is responsive text
    </Text>
  );
};

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreakpointExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## **More Examples**

This works for every style prop in the theme specification, which means you can change the style of most properties at a given breakpoint.

```SnackPlayer name=Responsive%20Example
import React from 'react';
import { Box, NativeBaseProvider, Center } from 'native-base';
function BreakpointExample() {
  return (
    <>
      <Box
        height={{
          base: '75%', // 0-768px
          md: '50%', // 768px-1280,
          xl: '25%', // 1280px+
        }}
        bg="teal.400"
        width={[
          '75%', // 0-480px
          '50%', // 480px-768px
          '25%', // 768px-992px
          '15%', // 992px+
        ]}
      />
      {/* responsive font size */}
      <Box fontSize={['sm', 'md', 'lg', 'xl']}>Font Size</Box>
      {/* responsive margin */}
      <Box mt={[2, 4, 6, 8]} width='100%' height={6} bg='green.400' />
      {/* responsive padding */}
      <Box bg='red.200' p={[2, 4, 6, 8]}>
        Padding
      </Box>
    </>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreakpointExample />
      </Center>
    </NativeBaseProvider>
  );
}

```

## **Demo**

Here's a simple example of a component that uses a stacked layout on small screens, and a side-by-side layout on larger screens :

```SnackPlayer name=Responsive%20Demo
import React from 'react';
import { NativeBaseProvider, Center, Box, Text, Image, Heading, Stack } from 'native-base';
function BreakpointExample () {
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
            uri:
              'https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/b56d1e9b-3861-4c89-995d-b8fb6240a762/nike-just-do-it.jpg',
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
          <Text fontWeight='medium' color='blueGray.600'>
            Older Kids' Shoe
          </Text>
          <Text fontWeight='medium' color='blueGray.600'>
            2 colors
          </Text>
        </Stack>
        <Text fontSize='md' fontWeight='semibold' color='blueGray.600'>
          $ 150
        </Text>
      </Stack>
    </Box>
  );
};

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreakpointExample />
      </Center>
    </NativeBaseProvider>
  );
}
```
