---
id: FAB
title: FAB
---

import { ComponentTheme } from '../src/components';

A floating action button (FAB) is a circular icon button that hovers over content to execute a primary action in the application.

```jsx isShowcase
import { Fab, Icon, Box, Center, NativeBaseProvider } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
export const Example = () => {
  return (
    <Box height="200" w="400" shadow="2" rounded="lg" bg="white:alpha.20">
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
  );
};
```

## Import

```jsx
import { Fab } from 'native-base';
```

## Example

### Basic

```ComponentSnackPlayer path=components,composites,Fab,DocsBasic.tsx

```

### Placement

```ComponentSnackPlayer path=components,composites,Fab,DocsPlacement.tsx

```

### Custom Position

```ComponentSnackPlayer path=components,composites,Fab,DocsCustomPosition.tsx

```

## Styling

<ComponentTheme name="fab" componentName="FAB" />

## Props

```ComponentPropTable path=composites,Fab,Fab.tsx

```
