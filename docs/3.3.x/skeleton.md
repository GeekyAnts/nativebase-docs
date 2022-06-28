---
id: skeleton
title: Skeleton
---

import { ComponentTheme } from '../src/components';

`Skeleton` showcases the loading state of a component.

```jsx isShowcase
import React from 'react';
import { Skeleton, VStack } from 'native-base';
export const Example = () => {
  return (
    <Center w="350">
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={8}
        overflow="hidden"
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
      >
        <Skeleton h="40" />
        <Skeleton.Text px="4" />
        <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
      </VStack>
    </Center>
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
