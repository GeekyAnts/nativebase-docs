---
id: hidden
title: Hidden
---

import { ComponentTheme } from '../../src/components';

Hidden is used to toggle the visibility value of child components responsively, based on the colorMode or based on the platform. It does not mount the child components in the restricted values of props.

## Import

```jsx
import { Hidden } from 'native-base';
```

## Example

### Basic

```jsx
<Hidden>
  <Box bg="red.400" p="2">
    <Text>This text will be always hidden.</Text>
  </Box>
</Hidden>
```

### Hidden according to breakpoints

```jsx
<>
  <Hidden from="sm" till="lg">
    <Box bg="red.400" p="2">
      <Text>This text will be hidden from sm to lg screens.</Text>
    </Box>
  </Hidden>
  <Hidden only={['sm', 'lg']}>
    <Box bg="red.400" p="2">
      <Text>This text will be hidden on sm and lg screens only.</Text>
    </Box>
  </Hidden>
</>
```

### Hidden according to colorMode

```ComponentSnackPlayer path=components,primitives,Hidden,hiddenOnColorModes.tsx

```

## Hidden according to platform

```jsx
<Hidden platform={['android', 'web']}>
  <Box bg="red.400" p="2">
    <Text>This text will be hidden on android and web.</Text>
  </Box>
</Hidden>
```

## Props

```ComponentPropTable path=primitives,Hidden,index.tsx

```
