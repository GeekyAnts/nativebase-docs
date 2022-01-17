---
id: h-stack
title: HStack / Row
---

`HStack` aligns items horizontally. `Row` is also an alias for `HStack`.

```jsx isShowcase
import React from "react";
import { HStack, Stack, Center, Heading } from "native-base";

export function Example() {
  return (
    <Stack shadow={2} space={3} alignItems="center">
      <HStack space={3} alignItems="center">
        <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="secondary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="emerald.500" rounded="md" shadow={3} />
      </HStack>
    </Stack>
  );
}
```

## Import

```jsx
import { HStack } from "native-base";
```

## Examples

```ComponentSnackPlayer path=components,primitives,HStack,basic.tsx

```

## Props

```ComponentPropTable path=primitives,Stack,HStack.tsx

```
