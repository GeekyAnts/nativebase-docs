---
id: pressable
title: Pressable
---

Pressable is a lower level primitive if you need more flexibility than a button and access to hover, pressed and focus events.

```jsx isShowcase
import React from 'react';
import { Pressable, Text, Box, HStack, Spacer, Flex } from 'native-base';

export function Example() {
  return (
    <Pressable
      onPress={() => {
        console.log('Hello world');
      }}
    >
      <Box p="5" rounded="8" bg="cyan.700" shadow={2}>
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            Business
          </Text>
          <Spacer />
          <Text fontSize={10} color="cyan.100">
            1 month ago
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
          Marketing License
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
          Unlock powerfull time-saving tools for creating email delivery and
          collecting marketing data
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            Read More
          </Text>
        </Flex>
      </Box>
    </Pressable>
  );
}
```

## Examples

### Basic

Pressable accepts most of the utility style system props.

```ComponentSnackPlayer path=components,primitives,Pressable,Basic.tsx

```

### Accessing events (hover, focus and pressed)

Pressable accepts a render prop children, which receives isHovered, isFocused and isPressed props.

```ComponentSnackPlayer path=components,primitives,Pressable,Events.tsx

```

## Props

### Pressable

```ComponentPropTable path=primitives,Pressable,Pressable.tsx showStylingProps=true

```
