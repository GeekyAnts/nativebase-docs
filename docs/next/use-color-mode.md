---
id: use-color-mode
title: useColorMode
---

`useColorMode` is a custom hook that can set the color mode or retrieve it.

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
