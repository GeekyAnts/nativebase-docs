---
id: use-media-query
title: useMediaQuery
---

`useMediaQuery` is a custom hook used to help detect whether a single media query or multiple media queries individually match. React Native does not natively support media queries, so `useMediaQuery` is still limited.

## Import

```jsx
import { useMediaQuery } from 'native-base';
```

## Example

### max-height

```ComponentSnackPlayer path=hooks,useMediaQuery,max-height.tsx

```

### min-width

```ComponentSnackPlayer path=hooks,useMediaQuery,min-width.tsx

```

### orientation

```ComponentSnackPlayer path=hooks,useMediaQuery,orientation.tsx

```

## Return value

The `useMediaQuery` hook returns an array of booleans, indicating whether the given query matches or queries match.

Why an array? `useMediaQuery` accepts both an object and an array of object, but will always return an array. This way, you can combine multiple media queries which will be individually matched in a single call. The options to use are still limited to `maxWidth`, `minWidth`, `maxHeight`, `minHeight`, `orientation`.
