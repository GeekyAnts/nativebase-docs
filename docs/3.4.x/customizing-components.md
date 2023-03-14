---
id: customizing-components
title: Customizing Components
---

Theme customisation is at the heart of NativeBase. Using NativeBase's `extendTheme` function, we can customise components.

Components can be customised by overriding baseStyle/defaultProps or adding a new variant.

Let's customise a Button component to include rounded borders and red colorScheme.

## Basic

```tsx
import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function () {
  const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
        },
        defaultProps: {
          colorScheme: 'red',
        },
      },
      Heading: {
        // Can pass also function, giving you access theming tools
        baseStyle: ({ colorMode }) => {
          return {
            color: colorMode === 'dark' ? 'red.300' : 'blue.300',
            fontWeight: 'normal',
          };
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>{/* components */}</NativeBaseProvider>
  );
}
```

As shown above, we can customize components by passing the **components** object with the **key** being the **name** of the **component**. Whereas you set `defaultProps` or `baseStyle` to customize the components.

### Difference between baseStyle and defaultProps

#### Base Style

- As the name suggests, it's used to define the base style of a component.
- Base style can be a function or a plain object. Use function if you want to get access to defaultProps, current colorMode (light/dark) and theme object.

Take a look at an [example here](https://github.com/GeekyAnts/NativeBase/blob/v3.1.0/src/theme/components/button.ts#L5).

#### Default Props

- Default props can be used to initialize props of a component.
- For e.g. You have a Button component and it has 2 variants. i.e. outline, solid. 

Take a look at an [example here](https://github.com/GeekyAnts/NativeBase/blob/v3.1.0/src/theme/components/button.ts#L201).

```jsx
<Button variant="ghost">
<Button variant="outline">


// What variant should it pick if it's not passed?
<Button />
```

When variant in defaultProps is `solid` the above button will use solid variant.

## Customizing Base Style

You can specify the base style of the component and use it across project.

```jsx isLive=true
import React from 'react';
import { Text, NativeBaseProvider, Center, extendTheme } from 'native-base';

export function Example() {
  const theme = extendTheme({
    components: {
      Text: {
        baseStyle: {
          color: 'emerald.400',
        },
        defaultProps: { size: 'lg' },
        sizes: {
          xl: { fontSize: '64px' },
          lg: { fontSize: '32px' },
          md: { fontSize: '16px' },
          sm: { fontSize: '12px' },
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <Text>NativeBase</Text>
      </Center>
    </NativeBaseProvider>
  );
}
```

## Adding Variants

You can also add the variants to the components and use it across project.

```ComponentSnackPlayer path=theme,Custom,CustomizingVariant.tsx

```

<br />

NativeBase ships with default styles for each components. [You can find it here](https://github.com/GeekyAnts/NativeBase/tree/v3.1.0/src/theme/components).
