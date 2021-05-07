---
id: box
title: Box
---

This is a generic component for low level layout needs. It is similar to a [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) in HTML.

## Implements

- [`View`](https://reactnative.dev/docs/view) from [React Native](https://reactnative.dev)
- [`color`](https://styled-system.com/api/#color), [`space`](https://styled-system.com/api/#space), [`layout`](https://styled-system.com/api/#layout), [`flexbox`](https://styled-system.com/api/#flexbox) & [`border`](https://styled-system.com/api/#border) from [style-system](https://styled-system.com)

## Example

### Basic

```NBAutomateExample path=primitives,box,basic.tsx

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
  Center,
  NativeBaseProvider,
} from 'native-base';
function BoxComponent() {
  return (
    <Box width={72} bg="gray.50" shadow={4}>
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
      <Stack p={4} space={3}>
        <Stack space={2}>
          <Heading size="md">Life in the Garden City</Heading>
          <Heading size="sm" color="red.500" fontWeight="500">
            The Silicon Valley of India.
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Icon name="access-time" color="gray.500" />
            <Text ml={1} color="gray.500" fontWeight="500">
              6 mins ago
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon name="ios-chatbubbles" type="Ionicons" color="gray.500" />
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
    <Box width="100%" bg="orange.300" p={4} color="white" ref={myRef}>
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

```ComponentPropTable path=primitives,Box,index.tsx

```
