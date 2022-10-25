---
id: checkbox
title: CheckBox
---

import { ComponentTheme } from '../../src/components';

The `Checkbox` component is used in forms when a user needs to select multiple values from several options.

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Checkbox,basic.tsx

```

### Controlled

```ComponentSnackPlayer path=components,primitives,Checkbox,controlledCheckbox.tsx

```

### Uncontrolled

```ComponentSnackPlayer path=components,primitives,Checkbox,uncontrolledCheckbox.tsx

```

### Disabled

```ComponentSnackPlayer path=components,primitives,Checkbox,disabled.tsx

```

### Invalid

```ComponentSnackPlayer path=components,primitives,Checkbox,invalid.tsx

```

### Custom Color

```ComponentSnackPlayer path=components,primitives,Checkbox,customColor.tsx

```

### Custom Icon

```ComponentSnackPlayer path=components,primitives,Checkbox,customIcon.tsx

```

### Size

```ComponentSnackPlayer path=components,primitives,Checkbox,size.tsx

```

### Checkbox Group

```ComponentSnackPlayer path=components,primitives,Checkbox,checkboxGroup.tsx

```

### Form Controlled

```ComponentSnackPlayer path=components,primitives,Checkbox,FormControlled.tsx

```

### Basic (With Ref)

```ComponentSnackPlayer path=components,primitives,Checkbox,withRef.tsx

```

## Props

### Checkbox

```ComponentPropTable path=primitives,Checkbox,Checkbox.tsx

```

### Checkbox.Group

```ComponentPropTable path=primitives,Checkbox,CheckboxGroup.tsx

```

## Styling

<ComponentTheme name="checkbox" />

## Accessibility

Uses React Native ARIA [@react-native-aria/checkbox](https://react-native-aria.geekyants.com/docs/useCheckbox) which follows the [Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/#checkbox).

### Keyboard Interactions

| Key     | Description                   |
| ------- | ----------------------------- |
| `Space` | Checks/unchecks the checkbox. |
