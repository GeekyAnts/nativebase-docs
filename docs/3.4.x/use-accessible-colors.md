---
id: use-accessible-colors
title: useAccessibleColors
metaTitle: useAccessibleColors | NativeBase
metaDescription: useAccessibleColors in NativeBase is a custom hook that updates your color config for better color contrast and accessibility in the app. Read on for more info.
---

`useAccessibleColors` is a custom hook that updates your color config for better [color and contrast accessibility](https://web.dev/color-and-contrast-accessibility/) in the app. By default, accessible colors are off. You can use this hook if you want to continue using accessible text colors. You can also pass it in the config for [`NativeBaseProvider`](setup-provider.md) with [`extendTheme`](/setup-provider#h2-add-custom-theme-optional).

## Import

```jsx
import { useAccessibleColors } from "native-base";
```

## Example

```ComponentSnackPlayer path=hooks,useAccessibleColors,Basic.tsx

```

## Return value

Returns an array with values `accessibleColors`, `setAccessibleColors`, `toggleAccessibleColors`.
