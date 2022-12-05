---
id: vstack
title: VStack / Column
metaTitle: VStack / Column | NativeBase
metaDescription: Vstack in NativeBase aligns items vertically. Column is an alias for Vstack. You can learn more about the usage of Vstack/Column component in this document.
---

`VStack` aligns items vertically. `Column` is also an alias for `VStack`.

```jsx isShowcase
import React from 'react';
import { VStack, Center, Heading } from 'native-base';

export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <Center w="64" h="10" bg="indigo.200" rounded="md" shadow={3} />
      <Center w="64" h="10" bg="indigo.300" rounded="md" shadow={3} />
      <Center
        w="64"
        h="10"
        _dark={{
          bg: 'indigo.500',
        }}
        _light={{
          bg: 'indigo.400',
        }}
        rounded="md"
        shadow={3}
      />
    </VStack>
  );
}
```

## Import

```jsx
import { VStack } from 'native-base';
```

## Usage

```ComponentSnackPlayer path=components,primitives,VStack,basic.tsx

```

## Props

```ComponentPropTable path=primitives,Stack,VStack.tsx

```
