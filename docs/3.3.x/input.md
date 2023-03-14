---
id: input
title: Input
---

import { ComponentTheme } from '../src/components';

```jsx isShowcase
import React from 'react';
import { Input } from 'native-base';

export const Example = () => {
  return (
    <Input
      shadow={2}
      _light={{ bg: 'coolGray.100' }}
      _dark={{ bg: 'coolGray.800' }}
      placeholder="Enter your name"
    />
  );
};
```

The `Input` component allows a user to provide input in a text field.

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Input,Basic.tsx

```

### Input Sizes

```ComponentSnackPlayer path=components,primitives,Input,Size.tsx

```

### Input Variants

```ComponentSnackPlayer path=components,primitives,Input,Variant.tsx

```

### Input Addons

```ComponentSnackPlayer path=components,primitives,Input,Addons.tsx

```

### Input Elements

```ComponentSnackPlayer path=components,primitives,Input,Elements.tsx

```

### Password Input

```ComponentSnackPlayer path=components,primitives,Input,Masked.tsx

```

### Controlled Input

```ComponentSnackPlayer path=components,primitives,Input,Controlled.tsx

```

### Form Controlled

```ComponentSnackPlayer path=components,primitives,Input,FormControlled.tsx

```

## Props

### Input

```ComponentPropTable path=primitives,Input,Input.tsx showStylingProps=true

```

### Input.Group

```ComponentPropTable path=primitives,Input,InputGroup.tsx

```

## Styling

<ComponentTheme name="input" />
