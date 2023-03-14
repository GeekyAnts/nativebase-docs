---
id: design-tokens
title: Design tokens
---

Design tokens are the values or constants needed to construct a design system. These values can represent spacing, color, typography etc. Design tokens help to achieve consistency in building user interfaces across all platforms.

Let's take an example by defining a space and color design token.

```jsx title="colors"
const colors = {
  primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
};
```

```jsx title="spacing"
export const spacing = {
  px: 1,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
};
```

We can use the above tokens in our code instead of using absolute values.

```jsx title="using the above tokens in Box component"
<Box mt="4" bg="primary.500"></Box>
```

The above Box will be translated to

```jsx title="actual applied styles"
<View style={{ marginTop: 16, backgroundColor: 'cyan.500' }} />
```

With NativeBase, you can create your own design system. NativeBase follows the [styled-system's specification](https://styled-system.com/theme-specification/) to construct design systems.

Checkout the **[default NativeBase theme](default-theme)** and how to customize it **[here](customizing-theme)**.
