---
id: customizing-theme
title: Customizing Theme
---

import { NativeBaseProvider, Box } from 'native-base';

The Theme is one of the core elements of NativeBase. You can customize NativeBase's theme as per your liking. NativeBase theme is a complex object. Here is what it looks like.

```tsx
// theme
{
	colors: {...},
    fontSizes: {...},
 	fonts: {...},
	.
	.
	.
	config: {...},
}
```

It has many [other properties](default-theme) but in this recipe, we will update only a few of them (namely colors, fonts, and config) using NativeBase's `extendTheme` function.

```tsx
import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Content } from './Content';

export default function () {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Content />
    </NativeBaseProvider>
  );
}
```

In the above example, the following changes have been made:

- Added a new color named **primary**.
- Updated one of the shades of **amber** color.
- Updated the initial color mode to **dark**. Default is **light**.
- Passed the new **theme** object to the **NativeBaseProvider**.

### Using the new tokens in components

```jsx isLive
export function Example() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Box bg="primary.500" p="4" />
    </NativeBaseProvider>
  );
}
```
