---
id: z-stack
title: ZStack
---

`ZStack` aligns items absolutely in the z-axis.

```jsx isShowcase
import React from "react";
import { ZStack, Box } from "native-base";

export const Example = () => {
  return (
    <ZStack shadow={2} alignItems="center" justifyContent="center">
      <Box bg="primary.500" size="40" rounded="lg" />
      <Box bg="secondary.500" size="32" rounded="lg" shadow={8} />
      <Box bg="emerald.500" size="24" rounded="lg" shadow={8} />
    </ZStack>
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
