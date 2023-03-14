---
id: switch
title: Switch
---

The `Switch` provides an alternative to the Checkbox component. It also allows a user to switch between enabled or disabled states.

```jsx isShowcase
import React from 'react';
import { Switch, HStack, Text } from 'native-base';

export const Example = () => {
  return <Switch size="lg" />;
};
```

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Switch,Basic.tsx

```

### Sizes

```ComponentSnackPlayer path=components,primitives,Switch,Sizes.tsx

```

### Track & Thumb Color

```ComponentSnackPlayer path=components,primitives,Switch,SwitchBgColor.tsx

```

### Color Schemes

```ComponentSnackPlayer path=components,primitives,Switch,ColorSchemes.tsx

```

## Props

```ComponentPropTable path=primitives,Switch,index.tsx showStylingProps=true

```

## Accessibility

- On mobile, uses native switch which is fully accessible.
- On web, it uses checkbox with a [role](https://www.w3.org/TR/wai-aria-1.2/#switch) set to `switch`.

### Keyboard Interactions

| Name  | Description                    |
| ----- | ------------------------------ |
| Space | Toggles the component's state. |
