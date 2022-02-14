---
id: heading
title: Heading
---

import { ComponentTheme } from '../src/components';

`Heading` composes [`Text`](/text) so one can use all the style props to render headlines.

```jsx isShowcase
import React from 'react';
import { Heading } from 'native-base';

export function Example() {
  return <Heading>I'm a Heading</Heading>;
}
```

## Import

```jsx
import { Heading } from 'native-base';
```

## Example

### Basic

```ComponentSnackPlayer path=components,primitives,Heading,Basic.tsx

```

### Sizes

```ComponentSnackPlayer path=components,primitives,Heading,Sizes.tsx

```

### Truncate

```ComponentSnackPlayer path=components,primitives,Heading,Truncate.tsx

```

### Override

```ComponentSnackPlayer path=components,primitives,Heading,OverridenStyle.tsx

```

### Composition

```ComponentSnackPlayer path=components,primitives,Heading,Composition.tsx

```

## Props

```ComponentPropTable path=primitives,Heading,index.tsx

```

## Styling

<ComponentTheme name="heading" fileName="heading" />
