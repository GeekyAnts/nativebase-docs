---
id: center
title: Center
---

`Center` is a layout component that centers its child within itself.

## Implements

- [`Box`](box.md)

## **Import**

```jsx
import { Center, Square, Circle } from 'native-base';
```

- **Center:** Centers its child, pass `width` and `height`
- **Square:** `Center` but we need to pass `size` (width and height)
- **Circle:** `Center` with round `borderRadius`, pass `size` (width and height)

## Examples

### Basic

Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.

```SnackPlayer name=Center%20Usage
import React from 'react';
import { Center, NativeBaseProvider } from 'native-base';
function CenterComponent() {
  return (
    <Center bg="emerald.400" height={200} width={200} rounded="xl" _text={{fontWeight: "semibold", color: "white"}}>
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

### Icon frames

Center can be used to nicely position icons in the center and add frames around them.

```SnackPlayer name=Center%20IconFrames
import React from "react";
import { Center, HStack, Icon, NativeBaseProvider } from "native-base";
function CenterComponent() {
  return (
    <HStack space={2}>
      <Center size={10} bg="emerald.400" rounded="xl">
        <Icon name="audiotrack" type="MaterialIcons" color="white" />
      </Center>
      <Center size={10} bg="violet.400" rounded="xl" _text={{ color: "white", fontWeight: "semibold" }}>
        20
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
  HStack,
  Icon,
  Center,
  NativeBaseProvider,
} from "native-base";
function CenterComponent() {
  return (
    <HStack space={2}>
      <Circle size={10} bg="emerald.400">
        <Icon name="audiotrack" type="MaterialIcons" color="white" />
      </Circle>
      <Square
        size={10}
        bg="violet.400"
        rounded="xl"
        _text={{ color: 'white', fontWeight: 'semibold' }}
      >
        20
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

**Center** implements **[Box](box.md)**, so all the [`Box Props`](box.md#props) can be passed to it.
