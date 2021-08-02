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

- [`Flex`](flex.md)

## Example

### Basic

You can see that the Box gets wrapped to the next line.

```SnackPlayer name=Wrap%20Usage
import React from 'react';
import { Wrap, Center, NativeBaseProvider } from 'native-base';
function WrapComponent () {
  return (
    <Wrap direction="row">
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="lightBlue.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
      <Center size={16} bg="rose.400" rounded="xl" _text={{ color: 'white' }}>
        Box 4
      </Center>
    </Wrap>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <WrapComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Spacing

You can pass spacing prop to add consistent spacing between its child components.

```SnackPlayer name=Wrap%20Spacing
import React from 'react';
import { Wrap, Center, NativeBaseProvider  } from 'native-base';
function WrapComponent () {
  return (
    <Wrap spacing={10} direction="row">
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="lightBlue.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
      <Center size={16} bg="rose.400" rounded="xl" _text={{ color: 'white' }}>
        Box 4
      </Center>
      <Center size={16} bg="red.400" rounded="xl" _text={{ color: 'white' }}>
        Box 5
      </Center>
    </Wrap>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <WrapComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Alignment and Justify

You can pass shorthands for `alignItems` and `justifyContent` as `align` and `justify` respectively.

`align` prop changes the alignment of the child along the main axis.

```SnackPlayer name=Wrap%20Align
import React from 'react';
import { Wrap, Center, NativeBaseProvider } from 'native-base';
function WrapComponent () {
  return (
    <Wrap spacing={10} align="center" direction="row">
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="lightBlue.400"
        size={20}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
      <Center size={24} bg="rose.400" rounded="xl" _text={{ color: 'white' }}>
        Box 4
      </Center>
      <Center size={16} bg="red.400" rounded="xl" _text={{ color: 'white' }}>
        Box 5
      </Center>
    </Wrap>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <WrapComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

The `justify` prop changes the alignment of the child along the cross axis.

```SnackPlayer name=Wrap%20Justify
import React from 'react';
import { Wrap, Center, NativeBaseProvider  } from 'native-base';
function WrapComponent () {
  return (
    <Wrap spacing={10} justify="center" direction="row">
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="lightBlue.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
      <Center size={16} bg="rose.400" rounded="xl" _text={{ color: 'white' }}>
        Box 4
      </Center>
      <Center size={16} bg="red.400" rounded="xl" _text={{ color: 'white' }}>
        Box 5
      </Center>
    </Wrap>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <WrapComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

In addition to this, all the **[Flex](flex.md)** Props can be passed to `Wrap`.

| Name      | Type           | Description                                          | Default |
| --------- | -------------- | ---------------------------------------------------- | ------- |
| spacing   | string, number | The divider element to use between elements.         | -       |
| justify   | justifyContent | The justifyContent value (for cross axis alignment). | -       |
| align     | alignItems     | The alignItems value (for main axis alignment).      | -       |
| direction | flexDirection  | The flexDirection value.                             | -       |
