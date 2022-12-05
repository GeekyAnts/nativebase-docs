---
id: use-theme
title: useTheme
metaTitle: useTheme | NativeBase
metaDescription: In NativeBase useTheme is a custom hook to call theme object from the context. Read this document to know more about useTheme hook and its uses with examples.
---

`useTheme` is a custom hook used to get the theme object from context.

## Import

```jsx
import { useTheme } from "native-base";
```

## Example

```jsx
function Example() {
  const theme = useTheme();

  return <Box>{/* Do something with the theme */}</Box>;
}
```
