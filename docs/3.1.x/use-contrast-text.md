---
id: use-contrast-text
title: useContrastText
---

`useContrastText` is a custom hook used to get a contrasting color (either `lightText` or `darkText`) to the color passed as a parameter.

## Import

```jsx
import { useContrastText } from 'native-base';
```

## Examples

### Basic

```jsx isLive=true
import React from 'react';
import {
  Button,
  useContrastText,
  NativeBaseProvider,
  Center,
} from 'native-base';
function UseContrastingTextHook() {
  const bgDark = 'gray.900';
  const bgLight = 'gray.50';
  const colorContrastDark = useContrastText(bgDark);
  const colorContrastLight = useContrastText(bgLight);

  return (
    <>
      <Button bg={bgDark} _text={{ color: colorContrastDark }} my={6}>
        NativeBase
      </Button>
      <Button bg={bgLight} _text={{ color: colorContrastLight }}>
        NativeBase
      </Button>
    </>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseContrastingTextHook />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Using Accessible Colors

By default, NativeBase provides contrasting colors based on its theme. You can also choose to get colors with better [color and contrast accessibility](https://web.dev/color-and-contrast-accessibility/) with the help of [`useAccessibleColors`](use-accessible-colors) hook.

```jsx isLive=true
import React from 'react';
import {
  Button,
  useContrastText,
  useTheme,
  NativeBaseProvider,
  Center,
  useAccessibleColors,
} from 'native-base';
function UseContrastingTextHook() {
  let [, , toggleAccessibleColors] = useAccessibleColors();
  const { colors } = useTheme();
  return (
    <>
      {Object.keys(colors.teal).map((key) => {
        const colorContrast = useContrastText(`teal.${key}`);
        return (
          <Button
            key={`teal.${key}`}
            bg={`teal.${key}`}
            _text={{ color: colorContrast }}
            mb={1}
          >
            NativeBase
          </Button>
        );
      })}
      <Button mt={2} onPress={toggleAccessibleColors} bg={'indigo.600'}>
        Toggle Accessible Colors
      </Button>
    </>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseContrastingTextHook />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Return value

Accepts and returns a color defined in the theme.
