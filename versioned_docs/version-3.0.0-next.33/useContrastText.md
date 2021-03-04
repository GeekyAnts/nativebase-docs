---
id: use-contrast-text
title: useContrastText
---

`useContrastText` is a custom hook used to get a contrasting color (either `lightText` or `darkText`) to the color passed as a parameter.

## Import

```jsx
import { useContrastText } from 'native-base';
```

## Example

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
      <Button bg={bgDark} _text={{ color: colorContrastDark }}>
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

## Return value

Accepts and returns a color defined in the theme.
