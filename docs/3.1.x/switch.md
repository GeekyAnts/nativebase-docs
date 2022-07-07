---
id: switch
title: Switch
---

The `Switch` component is an alternative to the Checkbox component. You can switch between enabled or disabled states.

## Examples

### Basic

```ComponentSnackPlayer path=primitives,Switch,Basic.tsx

```

### Sizes

```ComponentSnackPlayer path=primitives,Switch,Sizes.tsx

```

### Track & Thumb Color

```ComponentSnackPlayer path=primitives,Switch,SwitchBgColor.tsx

```

### Color Schemes

```ComponentSnackPlayer path=primitives,Switch,ColorSchemes.tsx

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
