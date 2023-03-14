---
id: use-accessible-colors
title: useAccessibleColors
---

`useAccessibleColors` is a custom hook used to get the setting for using color with better [color and contrast accessibility](https://web.dev/color-and-contrast-accessibility/) in the app. By default, accessible colors are turned off to get better color matching the theme of the app. You can use this hook if you always want to use accessible text colors. You can also pass it in the config for [`NativeBaseProvider`](setup-provider.md) with [`extendTheme`](/setup-provider#add-custom-theme-optional).

## Import

```jsx
import { useAccessibleColors } from 'native-base';
```

## Example

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

Returns an array with values `accessibleColors`, `setAccessibleColors`, `toggleAccessibleColors`.
