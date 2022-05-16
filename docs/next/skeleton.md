---
id: skeleton
title: Skeleton
---

import { ComponentTheme } from '../src/components';

`Skeleton` is used to display the loading state of a component.

```jsx isShowcase
import React from 'react';
import { Skeleton, VStack } from 'native-base';
export const Example = () => {
  return (
    <VStack
    shadow={2}
      w="400"
      borderWidth="1"
      space={8}
      overflow="hidden"
      rounded="md"
      borderColor="coolGray.200"
    >
      <Skeleton h="20" />
      <Skeleton.Text px="4" />
      <Skeleton m="4" rounded="md" startColor="primary.100" />
    </VStack>
  );
};
```

## Examples

### Usage

```ComponentSnackPlayer path=components,composites,Skeleton,Basic.tsx

```

### Color

```ComponentSnackPlayer path=components,composites,Skeleton,Color.tsx

```

### Composition

```ComponentSnackPlayer path=components,composites,Skeleton,Composition.tsx

```

### IsLoaded

```ComponentSnackPlayer path=components,composites,Skeleton,isLoaded.tsx

```

## Props

### Skeleton

```ComponentPropTable path=composites,Skeleton,Skeleton.tsx

```

### SkeletonText

```ComponentPropTable path=composites,Skeleton,SkeletonText.tsx

```

## Styling

<ComponentTheme name="skeleton" />
