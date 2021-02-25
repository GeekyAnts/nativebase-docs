---
id: center
title: Center
---

`Center` is a layout component that centers its child within itself.

## Implements

- `Box` from native-base/Box

## **Import**

```jsx
import { Center, Square, Circle } from 'native-base';
```

- **Center:** Centers its child, pass `width` and `height`
- **Square:** `Center` but we need to pass `size` (width and height)
- **Circle:** `Center` with round `borderRadius`, pass `size` (width and height)

## Usage

Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.

```SnackPlayer name=Center%20Usage
import React from 'react';
import { Center, NativeBaseProvider } from 'native-base';
function CenterComponent() {
  return (
    <Center bg="red.400" height={200} width={200}>
      This is the Center
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CenterComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Examples

### Icon frames

Center can be used to nicely position icons in the center and add frames around them.

```SnackPlayer name=Center%20IconFrames
import React from "react";
import { Center, Box, HStack, Icon, NativeBaseProvider } from "native-base";
function CenterComponent() {
  return (
    <HStack>
      <Center w="40px" h="40px" bg="blue.200" color="white">
        <Icon
          name="audiotrack"
          type="MaterialIcons"
          color="red.300"
        />
      </Center>
      <Center w="40px" h="40px" bg="tomato">
        <Box fontWeight="bold" fontSize="lg" color="white">
          20
        </Box>
      </Center>
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CenterComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Square and Circle

Square and Circle automatically centers their children.

```SnackPlayer name=Center%20Square and Circle
import React from "react";
import {
  Circle,
  Square,
  Box,
  HStack,
  Icon,
  Center,
  NativeBaseProvider,
} from "native-base";
function CenterComponent() {
  return (
    <HStack>
      <Circle size={98} bg="tomato">
        <Icon
          name="audiotrack"
          type="MaterialIcons"
          color="white"
        />
      </Circle>
      <Square size="lg" bg="blue.300">
        <Box fontWeight="bold" fontSize="lg" color="white">
          20
        </Box>
      </Square>
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CenterComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

**Center** implements **Box** , so all the `Box` Props can be passed to **Center.**
