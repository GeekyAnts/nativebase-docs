---
id: hidden
title: Hidden
---

import { ComponentTheme } from '../src/components';

Hidden is used to responsively, according to colorMode or according to platform toggle the visibility value of child components. It doesn't mount the child components in the restricted values of props.

## Import

```jsx
import { Hidden } from 'native-base';
```

## Example

### Basic

```jsx
<Hidden>
  <Box bg="red.400" p={2}>
    <Text>This text will be always hidden.</Text>
  </Box>
</Hidden>
```

### Hidden according to breakpoints

```jsx
<>
  <Hidden from="sm" till="lg">
    <Box bg="red.400" p={2}>
      <Text>This text will be hidden from sm to lg screens.</Text>
    </Box>
  </Hidden>
  <Hidden only={['sm', 'lg']}>
    <Box bg="red.400" p={2}>
      <Text>This text will be hidden on sm and lg screens only.</Text>
    </Box>
  </Hidden>
</>
```

### Hidden according to colorMode

```SnackPlayer name=ColorMode%20Usage
import React from 'react';
import {
  useColorMode,
  Button,
  VStack,
  Center,
  Box,Text,
  Hidden,
  useColorModeValue,
  NativeBaseProvider
} from 'native-base';

function ColorModeExample () {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        colorScheme={colorMode === 'light' ? 'blue' : 'red'}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change mode
      </Button>
      <VStack space={2} mt={3}>
        <Hidden colorMode="light">
          <Box bg="yellow.400" p={2}>
            <Text>This text will be hidden on light mode</Text>
          </Box>
        </Hidden>
        <Hidden colorMode="dark">
          <Box bg="green.400" p={2}>
            <Text>This text will be hidden on dark mode</Text>
          </Box>
        </Hidden>
      </VStack>
    </>
  );
}

const LocalWrapper = ({ children }) => {
  const bg = useColorModeValue('gray.200', 'gray.800')
  return (
    <Center
      flex={1}
      bg={bg}
    >
      {children}
    </Center>
  );
};

export default function () {
  return (
    <NativeBaseProvider>
      <LocalWrapper>
        <ColorModeExample />
      </LocalWrapper>
    </NativeBaseProvider>
  );
}
```

## Hidden according to platform

```jsx
<Hidden platform={['android', 'web']}>
  <Box bg="red.400" p={2}>
    <Text>This text will be hidden on android and web.</Text>
  </Box>
</Hidden>
```

## Props

```ComponentPropTable path=composites,Fab,Fab.tsx

```
