---
id: use-token
title: useToken
---

`useToken` is a custom hook used to resolve design tokens from the theme.

## Import

```jsx
import { useToken } from "native-base";
```

## Example

```jsx
function Example() {
  const [warning1, red2] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.warning.1`
    ["warning.1", "red.2"]
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <Box bg={warning1}>
      <Text color={red2}>wonderful gradients</Text>
    </Box>
  );
}
```
