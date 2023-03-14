---
id: use-contrast-text
title: useContrastText
---

`useContrastText` is a custom hook that provides color contrast (either `lightText` or `darkText`) to the color being used as a parameter.

## Import

```jsx
import { useContrastText } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=hooks,useContrastText,Basic.tsx

```

### Using Accessible Colors

By default, NativeBase provides contrasting colors based on its theme. You can also choose to get colors with better [color and contrast accessibility](https://web.dev/color-and-contrast-accessibility/) with the help of [`useAccessibleColors`](use-accessible-colors) hook.

```ComponentSnackPlayer path=hooks,useAccessibleColors,Basic.tsx

```

## Return value

Accepts and returns a color defined in the theme.
