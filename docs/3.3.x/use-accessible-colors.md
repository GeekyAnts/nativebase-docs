---
id: use-accessible-colors
title: useAccessibleColors
---

`useAccessibleColors` is a custom hook that enhance color settings for better [color and contrast accessibility](https://web.dev/color-and-contrast-accessibility/) in the app. By default, accessible colors are off. This allows better color matching to the theme of the app. You can use this hook if you want to continue using accessible text colors. You can also pass it in the config for [`NativeBaseProvider`](setup-provider.md) with [`extendTheme`](/setup-provider#add-custom-theme-optional).

## Import

```jsx
import { useAccessibleColors } from 'native-base';
```

## Example

```ComponentSnackPlayer path=hooks,useAccessibleColors,Basic.tsx

```

## Return value

Returns an array with values `accessibleColors`, `setAccessibleColors`, `toggleAccessibleColors`.
