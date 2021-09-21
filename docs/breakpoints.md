---
id: breakpoints
title: Breakpoints
---

Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.

NativeBase provides these default breakpoints and you can update with using extendTheme.

```tsx
breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};
```

`useBreakpointValue` is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size.

```SnackPlayer name=useBreakpointValue
import React from 'react';
import {
  Factory,
  Button,
  Stack,
  NativeBaseProvider,
  Center,
} from 'native-base';
import { TextInput } from 'react-native';

import { Icon, useBreakpointValue, Text, VStack, Heading } from 'native-base';
import { FontAwesome, Foundation, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

export const UseBreakpointValueExample = () => {
  const flexDir = useBreakpointValue({
    base: 'column',
    lg: 'row',
  });
  return (
    <VStack space={10} alignItems="center" justifyContent="center">
      <Heading>Why us?</Heading>
      <View style={{ flexDirection: flexDir }}>
        <VStack
          m="3"
          w="140"
          borderRadius="xl"
          p="3"
          bg="cyan.200"
          space={2}
          alignItems="center"
          justifyContent="center">
          <Icon
            as={Foundation}
            name="shield"
            size="sm"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          />
          <Text
            fontSize="lg"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}>
            Secure Checkout
          </Text>
        </VStack>
        <VStack
          m="3"
          w="140"
          borderRadius="xl"
          p="3"
          bg="cyan.200"
          space={2}
          alignItems="center"
          justifyContent="center">
          <Icon
            as={Foundation}
            name="shield"
            size="sm"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          />
          <Text
            fontSize="lg"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}>
            Secure Checkout
          </Text>
        </VStack>
        <VStack
          m="3"
          w="140"
          borderRadius="xl"
          p="3"
          bg="cyan.200"
          space={2}
          alignItems="center"
          justifyContent="center">
          <Icon
            as={Feather}
            name="clock"
            size="sm"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}
          />
          <Text
            fontSize="lg"
            textAlign="center"
            _dark={{ color: 'coolGray.800' }}>
            Fast Turn Around
          </Text>
        </VStack>
      </View>
    </VStack>
  );
};

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <UseBreakpointValueExample />
      </Center>
    </NativeBaseProvider>
  );
}

```
