---
id: divider
title: Divider
---

import { ComponentTheme } from '../src/components';

`Divider` can visually separate content in a given list or group.

```jsx isShowcase
import React from 'react';
import { Divider, Heading, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Flex direction="row" h="58" p="4">
        <Text>Simple</Text>
        <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
        <Text>Easy</Text>
        <Divider bg="amber.500" thickness="2" mx="2" orientation="vertical" />
        <Text>Beautiful</Text>
      </Flex>
    </Box>
  );
};
```

## Import

```jsx
import { Divider } from 'native-base';
```

## Examples

### Basic

The Divider displays a thin horizontal or vertical line.

```ComponentSnackPlayer path=components,composites,Divider,Basic.tsx

```

### Divider Orientation

Pass the `orientation` prop and set it to either `horizontal` or `vertical`.

> **Note:** If the horizontal orientation is used, make sure that the parent element is assigned a width. If the vertical orientation is used, make sure that the parent element is assigned a height.

```ComponentSnackPlayer path=components,composites,Divider,Orientation.tsx

```

### Composition

You can use `bg` or `backgroundColor` to change the divider's color and `width` and `height` to change its width and height respectively.

```ComponentSnackPlayer path=components,composites,Divider,Composition.tsx

```

## Props

```ComponentPropTable path=composites,Divider,index.tsx

```

## Styling

<ComponentTheme name="divider" />

## Accessibility

- Divider has role set to `separator` and `aria-orientation` to either `horizontal` or `vertical`.
