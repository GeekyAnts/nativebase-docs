---
id: box
title: Box
---

This is a generic component for low level layout needs. It is similar to a [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) in HTML.

## Implements

- [`View`](https://reactnative.dev/docs/view) from [React Native](https://reactnative.dev)
- [`color`](styleProps.md#color-and-background-color), [`space`](styleProps.md#margin-and-padding), [`layout`](styleProps.md#layout-width-and-height), [`flexbox`](styleProps.md#flexbox) & [`border`](styleProps.md#borders) from [style-system](styleProps.md).

## Example

### Basic

```SnackPlayer name=Box%20Example
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";
function Component() {
  return (
    <Box
      w={'90%'}
      bg="primary.400"
      p={4}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
    >
      This is a Box
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Composition

```SnackPlayer name=Box%20Composition
import React from 'react';
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  useColorModeValue,
  NativeBaseProvider,
} from 'native-base';
function BoxComponent() {
  return (
    <Box width={72} bg={useColorModeValue('gray.50', 'gray.700')} shadow={4}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{
              uri:
                'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="red.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}
        >
          PHOTOS
        </Center>
        <Center
          p={1}
          rounded="full"
          bg="red.500"
          boxSize={10}
          position="absolute"
          right={0}
          m={2}
          _text={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 'xs',
          }}
        >
          27 MAR
        </Center>
      </Box>
      <Stack p={4} space={4}>
        <Stack space={2}>
          <Heading size="sm">Life in the Garden City</Heading>
          <Heading
            size="xs"
            color={useColorModeValue('red.500', 'red.300')}
            fontWeight="500"
          >
            The Silicon Valley of India.
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Icon name="access-time" color="gray.500" size="sm" />
            <Text ml={1} color="gray.500" fontWeight="500">
              6 mins ago
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon
              name="ios-chatbubbles"
              type="Ionicons"
              color="gray.500"
              size="sm"
            />
            <Text ml={1} color="gray.500" fontWeight="500">
              39 comments
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} p={4}>
        <BoxComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Basic (With Ref)

```SnackPlayer name=Box%20Example(With ref)
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";

function Component() {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5,
      borderRadius: 10,
    });
  }, [myRef]);
  return (
    <Box
      width="90%"
      bg="primary.400"
      p={4}
      shadow={2}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      ref={myRef}
    >
      This is a Box
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>
<br/>

:::tip Common use cases for Box component are:

- Create responsive layouts with ease.
- Provide a shorthand to pass styles via props (`bg` instead of `backgroundColor`).

:::

## Props

| Name          | Type                                     | Description                                             | Default |
| ------------- | ---------------------------------------- | ------------------------------------------------------- | ------- |
| safeAreaProps | [SafeAreaProps](safe-area-view-props.md) | Allows the Box to accomodate safeAreaView functionality | -       |

It further supports [`color`](styleProps.md#color-and-background-color), [`space`](styleProps.md#margin-and-padding), [`layout`](styleProps.md#layout-width-and-height), [`flexbox`](styleProps.md#flexbox) & [`border`](styleProps.md#borders) props from [style-system](styleProps.md).
