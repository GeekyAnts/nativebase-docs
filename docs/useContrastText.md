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

```SnackPlayer name=useContrastText

import React from 'react';
import { Button, useContrastText, NativeBaseProvider, Center } from 'native-base';
function UseContrastingTextHook () {
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

### Using Accessible Colors

By default, NativeBase provides contrasting color based on its theme. You can also choose to get color with better [color and contrast accessibility](https://web.dev/color-and-contrast-accessibility/) with the help of [`useAccessibleColors`](useAccessibleColors.md) hook.

```SnackPlayer name=usingAccessibleColors

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
      mb={1}
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

Accepts and returns a color defined in the theme.
