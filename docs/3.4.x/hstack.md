---
id: h-stack
title: HStack / Row
metaTitle: HStack / Row | NativeBase
metaDescription: HStack in NativeBase aligns items horizontally. Row is also an alias for HStack. Learn more about aligning with this component with examples in this document.
---

`HStack` aligns items horizontally. `Row` is also an alias for `HStack`.

```jsx isShowcase
import React from 'react';
import { HStack, Stack, Center, Heading } from 'native-base';

export function Example() {
  return (
    <Stack space={3} alignItems="center">
      <HStack space={3} alignItems="center">
        <Center h="40" w="20" bg="primary.200" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
        <Center
          h="40"
          w="20"
          _dark={{ bg: 'primary.500' }}
          _light={{ bg: 'primary.400' }}
          rounded="md"
          shadow={3}
        />
      </HStack>
    </Stack>
  );
}
```

## Import

```jsx
import { HStack } from 'native-base';
```

## Examples

```ComponentSnackPlayer path=components,primitives,HStack,basic.tsx

```

## Props

```ComponentPropTable path=primitives,Stack,HStack.tsx

```
