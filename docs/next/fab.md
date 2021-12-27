---
id: FAB
title: FAB
---

import { ComponentTheme } from '../src/components';

A floating action button is a circular icon button that hovers over content to promote a primary action in the application.

```jsx isShowcase
import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base"
import React from "react"
import { AntDesign } from "@expo/vector-icons"
export const Example = () => {
  return (
    <Box position="relative">
      <Fab
        shadow={2}
        position="absolute"
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
  )
}
```

## Import

```jsx
import { Fab } from 'native-base';
```

## Example

### Basic

```ComponentSnackPlayer path=components,composites,Fab,Basic.tsx

```

### Placement

```ComponentSnackPlayer path=components,composites,Fab,Placement.tsx

```

### Custom Position

```ComponentSnackPlayer path=components,composites,Fab,CustomPosition.tsx

```

## Styling

<ComponentTheme name="fab" componentName="FAB" />

## Props

```ComponentPropTable path=composites,Fab,Fab.tsx

```
