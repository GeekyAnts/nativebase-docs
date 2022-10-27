---
id: radio
title: Radio
---

import { ComponentTheme } from '../src/components';

`Radio` limits the selection from a series of options to only one.

```jsx isShowcase
import React from 'react';
import { Radio, Center, NativeBaseProvider } from 'native-base';
export const Example = () => {
  const [value, setValue] = React.useState('one');
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio shadow={2} value="one" my="2">
        One
      </Radio>
      <Radio shadow={2} value="two" my="2">
        Two
      </Radio>
    </Radio.Group>
  );
};
```

## Examples

### Controlled

```ComponentSnackPlayer path=components,primitives,Radio,controlledRadio.tsx

```

### Uncontrolled

```ComponentSnackPlayer path=components,primitives,Radio,uncontrolledRadio.tsx

```

### Disabled

```ComponentSnackPlayer path=components,primitives,Radio,disabled.tsx

```

### Invalid

```ComponentSnackPlayer path=components,primitives,Radio,invalid.tsx

```

### Size

```ComponentSnackPlayer path=components,primitives,Radio,size.tsx

```

### Custom Color

```ComponentSnackPlayer path=components,primitives,Radio,customColor.tsx

```

### Custom Icon

```ComponentSnackPlayer path=components,primitives,Radio,customIcon.tsx

```

### Form Controlled

```ComponentSnackPlayer path=components,primitives,Radio,formControlled.tsx

```

### Basic (With Ref)

```ComponentSnackPlayer path=components,primitives,Radio,withRef.tsx

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
