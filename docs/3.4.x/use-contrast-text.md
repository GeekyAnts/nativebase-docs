---
id: use-contrast-text
title: useContrastText
---

`useContrastText` is a custom hook that provides color contrast text color (either `lightText` or `darkText`) against the background color that is passed as a parameter.

## Import

```jsx
import { useContrastText } from "native-base";
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

Accepts a background color and returns a text color that maintains the contrast ratio for better accessibility.
