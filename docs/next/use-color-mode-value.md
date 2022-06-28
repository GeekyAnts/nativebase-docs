---
id: use-color-mode-value
title: useColorModeValue
---

`useColorModeValue` is a custom hook that can retrieve a value from parameters passed based on active color mode value.

## Import

```jsx
import { useColorModeValue } from 'native-base';
```

## Example

```ComponentSnackPlayer path=hooks,useColorModeValue,Basic.tsx

```

## Return value

Accepts 2 parameters and returns either of the two, based on current color-mode (first parameter for light mode and second parameter for dark mode).
