---
id: use-color-mode
title: useColorMode
metaTitle: useColorMode | NativeBase
metaDescription: useColorMode in NativeBase is a custom hook that can set the color mode or retrieve it. Read this document to know more about useColorMode hook with examples.
---

`useColorMode` is a custom hook used to get and set the color mode.

## Import

```jsx
import { useColorMode } from "native-base";
```

## Example

```ComponentSnackPlayer path=hooks,useColorMode,Basic.tsx

```

## Return

| Name            | Type            | Description                                | Default |
| --------------- | --------------- | ------------------------------------------ | ------- |
| colorMode       | `light`, `dark` | The active color mode.                     | `light` |
| setColorMode    | function        | Use to set color mode.                     | -       |
| toggleColorMode | function        | Use to toggle between light and dark mode. | -       |
