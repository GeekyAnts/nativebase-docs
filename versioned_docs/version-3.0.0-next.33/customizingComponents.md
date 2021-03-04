---
id: customizingComponents
title: Customising Components
---

NativeBase theme is complex object which looks like

```tsx
// theme
{
	colors: {...},
	fonts: {...},
	.
	.
	.
	config: {...},
}
```

using NativeBase's `extendTheme` function, we can update theme object. You can customize the components at multiple levels.

## Basic

```tsx
import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function () {
  const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
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

From the above example we can observe that we customize components by passing the **components** object with the **key** being the **name** of the **component**. Whereas you set `defaultProps` or `baseStyle` to customize the components.

Both defaultProps and baseStyle can either be simple object or function. You can use object simple use cases while the function when you want to use `themeTools`.

## Customizing Base Style

You can specify the base style of the component and use it across project.

```SnackPlayer name=Customizing%20BaseStyle
import React from 'react';
import { Text, NativeBaseProvider, Center, extendTheme } from 'native-base';

export default function () {
  const theme = extendTheme({
    components: {
      Text: {
        baseStyle: {
          color: 'emerald.400'
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

```SnackPlayer name=Customizing%20Variants
import React from 'react';
import {
  NativeBaseProvider,
  Button,
  extendTheme,
  Center,
  VStack,
} from 'native-base';

export default function () {
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          rounded: ({ colorScheme }: any) => {
            return {
              bg: `${colorScheme}.500`,
              rounded: 'full',
            };
          },
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <VStack space={2}>
          <Button colorScheme="emerald">Default Button</Button>
          <Button colorScheme="emerald" variant="rounded">
            Rounded Button
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

```
