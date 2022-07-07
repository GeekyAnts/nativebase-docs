---
id: icon-button
title: IconButton
---

import { ComponentTheme } from '../../src/components';

`IconButton` composes the `Button` component. It is generally used to make an Icon pressable.

## Examples

### Basic

```ComponentSnackPlayer path=composites,IconButton,Basic.tsx

```

### Sizes

```ComponentSnackPlayer path=composites,IconButton,Basic.tsx

```

### Variants

```ComponentSnackPlayer path=composites,IconButton,Basic.tsx

```

## Props

```ComponentPropTable path=composites,IconButton,index.tsx

```

## Styling

<ComponentTheme name="iconButton" />

## Accessibility

- Use accessibilityLabel for labelling icon buttons to make sure it's announced by screen reader devices.
- IconButton has a `role` set to [button](https://www.w3.org/TR/wai-aria-practices-1.2/#button).
