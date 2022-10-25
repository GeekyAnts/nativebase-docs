---
id: icon-button
title: IconButton
---

import { ComponentTheme } from '../../src/components';

`IconButton` consists of the `Button` component. It is generally used to make an Icon pressable.

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,IconButton,Basic.tsx

```

### Sizes

```ComponentSnackPlayer path=components,composites,IconButton,Sizes.tsx

```

### Variants

```ComponentSnackPlayer path=components,composites,IconButton,Variant.tsx

```

## Props

```ComponentPropTable path=composites,IconButton,index.tsx

```

## Styling

<ComponentTheme   name="iconButton" fileName="icon-button" />

## Accessibility

- Use accessibilityLabel for labelling icon buttons to make sure it's announced by screen reader devices.
- IconButton has a `role` set to [button](https://www.w3.org/WAI/ARIA/apg/#button).
