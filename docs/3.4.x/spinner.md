---
id: spinner
title: Spinner
---

Spinners gives visual cues to actions that are processing or awaiting a course change or results.

```jsx isShowcase
import React from 'react';
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
export const Example = () => {
  return (
    <HStack space={2} alignItems="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
```

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Spinner,usage.tsx

```

### Colors

```ComponentSnackPlayer path=components,primitives,Spinner,color.tsx

```

### Sizes

```ComponentSnackPlayer path=components,primitives,Spinner,size.tsx

```

## Props

```ComponentPropTable path=primitives,Spinner,index.tsx

```

Spinner composes [`ActivityIndicator`](https://reactnative.dev/docs/activityindicator) so all `ActivityIndicator` Props can be passed to Spinner.
