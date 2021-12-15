---
id: typescript
title: Typescript
---

To enable typescript for custom theme tokens or variants, we'll follow two simple steps.

Below, in the [extendTheme](http://localhost:3002/customizing-theme) function, we're adding a space token and a custom variant for the Button.

```jsx
import { extendTheme } from 'native-base';

const customTheme = extendTheme({
  space: {
    'space-2': '29px',
  },
  components: {
    Button: {
      variants: {
        brand: {
          p: '10',
          bg: 'brand.500',
        },
      },
    },
  },
});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
```

## Result

<Image source={{ uri:"/img/ts-gif.gif"}} alt="Typescript intellisense with custom theme tokens"/>
