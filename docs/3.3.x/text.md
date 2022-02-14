---
id: text
title: Text
---

import { ComponentTheme } from '../src/components';

`Text` allows the rendering of text and paragraphs within an interface.

```jsx isShowcase
import React from 'react';
import { Text } from 'native-base';

export const Example = () => {
  return <Text>This is Text.</Text>;
};
```

## Examples

### ChangingFontSize

```ComponentSnackPlayer path=components,primitives,Text,ChangingFontSize.tsx

```

### Truncated

```ComponentSnackPlayer path=components,primitives,Text,Truncated.tsx

```

### Nested

```ComponentSnackPlayer path=components,primitives,Text,Nested.tsx

```

### Overridden

```ComponentSnackPlayer path=components,primitives,Text,Overriden.tsx

```

## Props

```ComponentPropTable path=primitives,Text,index.tsx showStylingProps=true

```

## Styling

<ComponentTheme name="text" />
