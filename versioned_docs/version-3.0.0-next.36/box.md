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

```SnackPlayer name=Box%20Example
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";
function Component() {
  return (
    <Box width="100%" bg="orange.400" p={4} >
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
  Center,
  AspectRatio,
  Image,
  Text,
  NativeBaseProvider,
} from 'native-base';
function BoxComponent() {
  return (
    <Box width={72} bg="gray.50" p={2} >
      <Box bg="white" shadow={1}>
        <Box>
          <AspectRatio ratio={16 / 9}>
            <Image
              source={{
                uri:
                  'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
            />
          </AspectRatio>
          <Box
            bg="red.500"
            _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
            position="absolute"
            bottom={0}
            px={2}
            py={1}>
            PHOTOS
          </Box>
          <Box
            p={2}
            rounded="full"
            justifyContent="center"
            alignItems="center"
            bg="red.500"
            boxSize={10}
            position="absolute"
            right={0}
            m={2}
            _text={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: '8',
            }}>
            27 MAR
          </Box>
        </Box>
        <Box p={4}>
          <Heading size="md">Life in the Garden City</Heading>
          <Heading size="sm" mt={2} color="red.500" fontWeight="500">
            The Silicon Valley of India.
          </Heading>
          <Text mt={4} lineHeight={6} fontWeight={400}>
            Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city
            is also known for its parks and nightlife.
          </Text>
          <Box flexDirection="row" mt={4}>
            <Box flexDirection="row" alignItems="center">
              <Icon name="access-time" color="gray.500" />
              <Text ml={1} color="gray.500" fontWeight="500">
                6 mins ago
              </Text>
            </Box>
            <Box ml={4} flexDirection="row" alignItems="center">
              <Icon name="ios-chatbubbles" type="Ionicons" color="gray.500" />
              <Text ml={1} color="gray.500" fontWeight="500">
                39 comments
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
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

| Name     | Type        | Description                                                                           | Default |
| -------- | ----------- | ------------------------------------------------------------------------------------- | ------- |
| shadow   | number      | Applies box shadow and accepts a number from 0 to 9                                   | -       |
| children | JSX.Element | Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. | -       |
