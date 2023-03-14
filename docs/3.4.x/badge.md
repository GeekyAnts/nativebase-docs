---
id: badge
title: Badge
---

import { ComponentTheme } from '../src/components';

`Badges` allow the highlighting of an item’s status. This provides quick recognition.

```jsx isShowcase
import React from 'react';
import { Badge, Center, NativeBaseProvider } from 'native-base';
export function Example() {
  return <Badge shadow={2}>NEW FEATURE</Badge>;
}
```

## Import

```jsx
import { Badge } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Badge,usage.tsx

```

### Color Scheme

```ComponentSnackPlayer path=components,composites,Badge,color.tsx

```

### Variants

```ComponentSnackPlayer path=components,composites,Badge,variants.tsx

```

### Composition

```ComponentSnackPlayer path=components,composites,Badge,composition.tsx

```

## Props

```ComponentPropTable path=composites,Badge,index.tsx

```

## Styling

<ComponentTheme name="badge" />
