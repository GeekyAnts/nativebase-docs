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

### Background

```ComponentSnackPlayer path=primitives,Switch,SwitchBgColor.tsx

```

### Color Schemes

```ComponentSnackPlayer path=primitives,Switch,ColorSchemes.tsx

```

## Props

```ComponentPropTable path=primitives,Switch,index.tsx showStylingProps=true

```

<!--
| Name               | Type             | Description                                                                                          | Default |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| name               | string           | The input name of the Switch when used in a form.                                                    | -       |
| size               | `lg`, `md`, `sm` | The size (width and height) of the switch.                                                           | `md`    |
| isChecked          | boolean          | If true, set the Switch to the checked state.                                                        | -       |
| defaultIsChecked   | boolean          | If true, the checkbox will be initially checked.                                                     | -       |
| isDisabled         | boolean          | If true, set the disabled to the invalid state.                                                      | -       |
| isInvalid          | boolean          | If true, set the switch to the invalid state.                                                        | -       |
| onTrackColor       | string           | The track color of the Switch when on.                                                               | -       |
| offTrackColor      | string           | The track color of the Switch when off.                                                              | -       |
| onThumbColor       | string           | The thumb color of the Switch when on.                                                               | -       |
| offThumbColor      | string           | The thumb color of the Switch when off.                                                              | -       |
| onToggle           | function         | Function called when the state of the Switch changes.                                                | -       |
| accessibilityLabel | string           | [`Accessibilty label`](https://reactnative.dev/docs/accessibility#accessibilitylabel) for component. | -       |
| accessibilityHint  | string           | [`Accessibilty hint`](https://reactnative.dev/docs/accessibility#accessibilityhint) for component    |         | -->

## Accessibility

- On mobile, uses native switch which is fully accessible.
- On web, it uses checkbox with a `role` set to `switch`.
- `Spacebar` toggles the switch.
