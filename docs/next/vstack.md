---
id: v-stack
title: VStack / Column
---

`VStack` aligns items vertically.`Column` is also an alias for `VStack`.

```jsx isShowcase
import React from "react";
import { VStack, Center, Heading } from "native-base";

export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <Center w="64" h="10" bg="primary.500" rounded="md" shadow={3} />
      <Center w="64" h="10" bg="secondary.500" rounded="md" shadow={3} />
      <Center w="64" h="10" bg="emerald.500" rounded="md" shadow={3} />
    </VStack>
  );
}
```

## Import

```jsx
import { VStack } from "native-base";
```

## Usage

```ComponentSnackPlayer path=components,primitives,VStack,basic.tsx

```

## Props

```ComponentPropTable path=primitives,Stack,VStack.tsx

```
