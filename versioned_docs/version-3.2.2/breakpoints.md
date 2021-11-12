---
id: breakpoints
title: Breakpoints
---

Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.

NativeBase provides these default breakpoints and you can update with using extendTheme.

```tsx
breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};
```

`useBreakpointValue` is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size.

```ComponentSnackPlayer path=hooks,useBreakpointValue,usage.tsx

```
