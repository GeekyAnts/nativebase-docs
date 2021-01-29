---
id: customizingTheme
title: Customising Theme
---

Theme is one core elements of Nativebase. And the extent of customising you can bring to your application by updating it, is only limited your imagination. Nativebase theme is complex object which looks like

```tsx
// theme
{
	colors: {...},
	fonts: {...},
	.
	.
	.
	config: {...},
}
```

It have many other properties but in this recipe, well only few of them (namely colors, fonts, and config) and well update it using NB's `extendTheme` function, we can update theme object. A simple example to illustrate the process of updating the theme.

```tsx
import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Content } from "./Content";

export default function () {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Content />
    </NativeBaseProvider>
  );
}
```

In the above example, the following changes we have made:

- Added a new color named **primary**.
- Updated one of the shade of **amber** color.
- Updated the initial color mode to **dark**. Default is **light**.
- Finally passed the new **theme** object to the **NativeBaseProvide**.
