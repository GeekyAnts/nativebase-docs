---
id: select
title: Select
---

import { ComponentTheme } from '../../src/components';

import { AndroidBadge } from "../../src/components/index";

Select creates a dropdown list of items with the selected item in closed view.

## Import

```jsx
import { Select } from "native-base";
```

## Examples

### Basic

```ComponentSnackPlayer path=primitives,Select,Basic.tsx

```

### FormControlled

```ComponentSnackPlayer path=primitives,Select,FormControlled.tsx

```

### Select

## Props

```ComponentPropTable path=primitives,Select,Select.tsx

```

### Select.Item

## Props

```ComponentPropTable path=primitives,Select,SelectItem.tsx

```

<!--
| Name                             | Type                         | Description                                                                                                                          | Default    |
| -------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| variant                          | `native`, `styled`           | The variant of the select style to use.                                                                                              | `native`   |
| placeholder                      | string                       | The placeholder attribute specifies a short hint that describes the expected value of a selected field (only for styled variant).    | -          |
| \_placeholder                    | [`TextProps`](text.md#h2-props) | Text props to be applied to placeholder (only for styled variant).                                                                   | -          |
| selectedValue                    | string                       | The default value which is selected.                                                                                                 | -          |
| onValueChange                    | function                     | Callback for on change on the input value.                                                                                           | -          |
| selectedItemBg                   | string                       | Background color for the selected item (only for styled variant).                                                                    | `blue.500` |
| \_selectedItem                   | [`TextProps`](text.md#h2-props) | Text prop for selected item (only for styled variant).                                                                               | -          |
| isDisabled                       | boolean                      | If true, the button will be disabled (not supported on ios for native variant).                                                      | -          |
| dropdownIcon                     | JSX.Element                  | If given, updates the dropdown Icon (only for styled variant).                                                                       | -          |
| dropdownOpenIcon                 | JSX.Element                  | If given, updates the dropdown Icon when opened (only for styled variant).                                                           | -          |
| dropdownCloseIcon                | JSX.Element                  | If given, updates the dropdown Icon when closed (only for styled variant).                                                           | -          |
| \_ios                            | _StyleProps_                 | Props which you only want to pass to ios device.                                                                                     | -          |
| \_android                        | _StyleProps_                 | Props which you only want to pass to android device.                                                                                 | -          |
| \_web                            | _StyleProps_                 | Props which you only want to pass to web device.                                                                                     | -          |
| \_item                           | [`TextProps`](text.md#h2-props) | TextProps to be applied to the label (only for styled variant).                                                                      | -          |
| androidMode <AndroidBadge/>      | `dialog`, `dropdown`         | On Android, specifies how to display the selection items when the user taps on the picker (only for native variant).                 | `dialog`   |
| androidIconColor <AndroidBadge/> | string                       | On Android, specifies color of dropdown triangle. Input value can any color from theme like `default.300` (only for native variant). | -          |
| androidPrompt <AndroidBadge/>    | string                       | On Android, prompt string for this picker, used on Android in dialog mode as the title of the dialog (only for native variant).      | -          |

**Select** can be styled using pseudo style props like `_isInvalid`, `_isDisabled` and `_hover`. -->

<!-- ### Select Item

| Name       | Type                         | Description                                                                                    | Default |
| ---------- | ---------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| label      | string                       | The label which will be displayed.                                                             | -       |
| value      | string                       | The value to be used for the item. This is the value that will be returned on form submission. | -       |
| isDisabled | boolean                      | If true, the item will be disabled (only for `styled` variant).                                | -       |
| \_label    | [`TextProps`](text.md#h2-props) | TextProps to be applied to label (only for `styled` variant).                                  | -       | -->

## Styling

<ComponentTheme name="select" />

## Accessibility

- use `native` variant. Accessibility improvements on styled variant is in-progress.
