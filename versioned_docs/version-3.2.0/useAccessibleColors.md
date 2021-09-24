---
id: use-accessible-colors
title: useAccessibleColors
---

`useAccessibleColors` is a custom hook used to get the setting for using color with better [color and contrast accessibility](https://web.dev/color-and-contrast-accessibility/) in the app. By default, accessible colors are turned off to get better color matching the theme of the app. You can use this hook if you always want to use accessible text colors. You can also pass it in the config for [`NativeBaseProvider`](setup-provider.md) with [`extendTheme`](setup-provider.md#add-custom-theme-optional).

## Import

```jsx
import { useAccessibleColors } from 'native-base';
```

## Example

```SnackPlayer name=useAccessibleColors

import React from 'react';
import { Button, useContrastText, useTheme, NativeBaseProvider, Center, useAccessibleColors } from 'native-base';

const ButtonTemplate = ({ shade }: any) => {
  const colorContrast = useContrastText(`yellow.${shade}`);
  return (
    <Button
      colorScheme="yellow"
      key={`yellow.${shade}`}
      bg={`yellow.${shade}`}
      _text={{ color: colorContrast }}
      mb="1"
    >
      Save Changes
    </Button>
  );
};

function UseContrastingTextHook () {
  let [, , toggleAccessibleColors] = useAccessibleColors();
  const { colors } = useTheme();
  return (
    <>
      {Object.keys(colors.yellow).map((key, index) => {
        if (index > 2 && index < 9) return <ButtonTemplate shade={key} />;
      })}
      <Button mt="10" onPress={toggleAccessibleColors} colorScheme="primary">
        Toggle Accessible Colors
      </Button>
    </>
  );
}

export default function () {
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
