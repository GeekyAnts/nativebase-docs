---
id: wrap
title: Wrap
---

`Wrap` is a layout component that adds a defined space between its children and 'wraps' its children automatically if there's not enough space to fit any child.

## **Import**

```jsx
import { Wrap } from 'native-base';
```

## Implements

- `Flex` from native-base/Flex

## Usage

You can see that the Box gets wrapped to the next line.

```SnackPlayer name=Wrap%20Usage
import React from 'react';
import { Wrap, Center, NativeBaseProvider } from 'native-base';
function WrapComponent () {
  return (
    <Wrap flexDir="row">
      <Center w="180px" h="80px" bg="red.200">
        Box 1
      </Center>
      <Center w="180px" h="80px" bg="green.200">
        Box 2
      </Center>
      <Center w="180px" h="80px" bg="tomato">
        Box 3
      </Center>
      <Center w="180px" h="80px" bg="blue.200">
        Box 4
      </Center>
    </Wrap>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <WrapComponent />
    </NativeBaseProvider>
  );
}
```

## Spacing

You can pass spacing prop to add consistent spacing between its child components.

```SnackPlayer name=Wrap%20Spacing
import React from 'react';
import { Wrap, Center, NativeBaseProvider  } from 'native-base';
function WrapComponent () {
  return (
    <Wrap spacing={10} flexDir="row">
      <Center w="180px" h="80px" bg="red.200">
        Box 1
      </Center>
      <Center w="180px" h="80px" bg="green.200">
        Box 2
      </Center>
      <Center w="180px" h="80px" bg="tomato">
        Box 3
      </Center>
      <Center w="180px" h="80px" bg="blue.200">
        Box 4
      </Center>
    </Wrap>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <WrapComponent />
    </NativeBaseProvider>
  );
}
```

## Alignment and Justify

You can pass shorthands for alignItems and justifyContent as align and justify respectively.

`align` prop changes the alignment of the child along the main axis.

```SnackPlayer name=Wrap%20Align
import React from 'react';
import { Wrap, Center, NativeBaseProvider  } from 'native-base';
function WrapComponent () {
  return (
    <Wrap spacing={10} align="center" direction="row">
      <Center w="100px" h="80px" bg="red.200">
        Box 1
      </Center>
      <Center w="100px" h="40px" bg="green.200">
        Box 2
      </Center>
      <Center w="100px" h="60px" bg="tomato">
        Box 3
      </Center>
      <Center w="180px" h="80px" bg="blue.200">
        Box 4
      </Center>
    </Wrap>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <WrapComponent />
    </NativeBaseProvider>
  );
}
```

`justify` prop changes the alignment of the child along the cross axis.

```SnackPlayer name=Wrap%20Justify
import React from 'react';
import { Wrap, Center, NativeBaseProvider  } from 'native-base';
function WrapComponent () {
  return (
    <Wrap spacing={10} justify="center" direction="row">
      <Center w="100px" h="80px" bg="red.200">
        Box 1
      </Center>
      <Center w="100px" h="40px" bg="green.200">
        Box 2
      </Center>
      <Center w="100px" h="60px" bg="tomato">
        Box 3
      </Center>
      <Center w="180px" h="80px" bg="blue.200">
        Box 4
      </Center>
    </Wrap>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <WrapComponent />
    </NativeBaseProvider>
  );
}
```

## Props

In addition to this, all the **Flex** Props can be passed to **Wrap** as well.

### Wrap

| Name      | Type           | Description                                          | Default |
| --------- | -------------- | ---------------------------------------------------- | ------- |
| spacing   | String, number | The divider element to use between elements.         | -       |
| justify   | justifyContent | The justifyContent value (for cross axis alignment). | -       |
| align     | alignItems     | The alignItems value (for main axis alignment).      | -       |
| direction | flexDirection  | The flexDirection value.                             | -       |
