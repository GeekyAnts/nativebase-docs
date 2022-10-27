---
id: radio
title: Radio
---

import { ComponentTheme } from '../../src/components';

`Radio` is used when only one choice may be selected in a series of options.

## Examples

### Controlled

```ComponentSnackPlayer path=primitives,Radio,controlledRadio.tsx

```

### Uncontrolled

```ComponentSnackPlayer path=primitives,Radio,uncontrolledRadio.tsx

```

### Disabled

```ComponentSnackPlayer path=primitives,Radio,disabled.tsx

```

### Invalid

```ComponentSnackPlayer path=primitives,Radio,invalid.tsx

```

### Size

```ComponentSnackPlayer path=primitives,Radio,size.tsx

```

### Custom Color

```ComponentSnackPlayer path=primitives,Radio,customColor.tsx

```

### Custom Icon

```ComponentSnackPlayer path=primitives,Radio,customIcon.tsx

```

### Form Controlled

```ComponentSnackPlayer path=primitives,Radio,formControlled.tsx

```

### Basic (With Ref)

```ComponentSnackPlayer path=primitives,Radio,withRef.tsx

```

## Props

### Radio

```ComponentPropTable path=primitives,Radio,Radio.tsx

```

### Radio Group

```ComponentPropTable path=primitives,Radio,RadioGroup.tsx

```

## Accessibility

Uses React Native ARIA [@react-native-aria/radio](https://react-native-aria.geekyants.com/docs/useRadioGroup) which follows the [Radio Group WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/#radiobutton).

### Keyboard Interactions

| Key          | Description                                                                        |
| ------------ | ---------------------------------------------------------------------------------- |
| `Tab`        | Moves focus to either the checked radio item or the first radio item in the group. |
| `Space`      | When focus is on an unchecked radio item, checks it.                               |
| `ArrowDown`  | Moves focus to the next radio item in the group.                                   |
| `ArrowRight` | Moves focus to the next radio item in the group.                                   |
| `ArrowUp`    | Moves focus to the previous radio item in the group.                               |
| `ArrowLeft`  | Moves focus to the previous radio item in the group.                               |

## Styling

<ComponentTheme name="radio" />
