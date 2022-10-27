---
id: dark-mode
title: Making Components Dark Mode Compatible
---

By default, most of NativeBase's components are dark mode compatible. In some scenario, you might need to make your component respond to color mode. There are 2 ways to achieve this:

- By updating component's theme
- By using useColorModeValue

## 1. By updating component's theme

In this approach we use NativeBase's `extendTheme` function to customise the components and then use _light and _dark props to make the component dark mode compatible.

Note: Changes on the theme will be reflected on the entire application.

```tsx
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { extendTheme } from 'native-base';
import { Content } from './Content';

export default function () {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props: any) => {
          return {
            _light: { color: 'red.300' },
            _dark: { color: 'blue.300' },
          };
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Content />
    </NativeBaseProvider>
  );
}
```

In the above example, the Heading component's color property will now respond to change in color, namely in light mode it will be red (red.300) colored and in dark mode it will be blue (blue.300) colored.

## 2. By using useColorModeValue

In this approach we use NativeBase's `useColorModeValue` hook and update specific props instead of updating the entire theme.

Note: Changes on the theme will be reflected on the entire application.

```tsx
import React from 'react';
import { useColorModeValue, Button } from 'native-base';

export default function () {
  const colorScheme = useColorModeValue('teal', 'amber');
  const variant = useColorModeValue('solid', 'outline');

  return (
    <Button colorScheme={colorScheme} variant={variant}>
      Sample
    </Button>
  );
}
```

In the above example, you'll get a **solid teal Button** in **light** mode whereas an **outline amber Button** in **dark** mode. You can get creative and make other properties respond to the color mode as well.

## 3. By using _light and _dark props

In this approach we pass the required props inside \_light and \_dark based on the requirement.

```tsx
import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button
      _light={{ bg: 'teal', _text: { color: 'white' } }}
      _dark={{ bg: 'amber' }}
    >
      Sample
    </Button>
  );
}
```

In the above example, you'll get a **teal Button** in **light** mode whereas an **amber Button** in **dark** mode. You can get creative and make other properties respond to the color mode as well.
