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

```ComponentSnackPlayer path=hooks,useAccessibleColors,Basic.tsx

```

## Return value

Returns an array with values `accessibleColors`, `setAccessibleColors`, `toggleAccessibleColors`.
