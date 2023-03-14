---
id: z-stack
title: ZStack
---

`ZStack` aligns items to the z-axis.

```jsx isShowcase
import React from 'react';
import { ZStack, Box } from 'native-base';

export const Example = () => {
  return (
    <Box mt="-20">
      <ZStack mt="3" ml={-50}>
        <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
        <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
        <Box
          bg="primary.300"
          mt="10"
          ml="10"
          size="20"
          rounded="lg"
          shadow={7}
        />
      </ZStack>
    </Box>
  );
};
```

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,ZStack,example.tsx

```

### Items Centered

You can pass `alignItems="center"` `justifyContent="center"` to vertically and horizontally center the children.

```ComponentSnackPlayer path=components,primitives,ZStack,CenterStack.tsx

```

## Props

```ComponentPropTable path=primitives,ZStack,index.tsx

```
