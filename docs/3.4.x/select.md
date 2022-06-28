---
id: select
title: Select
---

import { ComponentTheme } from '../src/components';

import { AndroidBadge } from "../src/components/index";

Select creates a dropdown list of items with the selected item in closed view.

```jsx isShowcase
import React from 'react';
import { Select, VStack, CheckIcon } from 'native-base';

export const Example = () => {
  let [service, setService] = React.useState('');

  return (
    <VStack alignItems="center" space={4}>
      <Select
        shadow={2}
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        _light={{ bg: 'coolGray.100' }}
        _dark={{ bg: 'coolGray.800' }}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item shadow={2} label="UX Research" value="ux" />
        <Select.Item shadow={2} label="Web Development" value="web" />
        <Select.Item
          shadow={2}
          label="Cross Platform Development"
          value="cross"
        />
        <Select.Item shadow={2} label="UI Designing" value="ui" />
        <Select.Item shadow={2} label="Backend Development" value="backend" />
      </Select>
    </VStack>
  );
};
```

## Import

```jsx
import { Select } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Select,Basic.tsx

```

### FormControlled

```ComponentSnackPlayer path=components,primitives,Select,FormControlled.tsx

```

### Select

## Props

```ComponentPropTable path=primitives,Select,Select.tsx

```

### Select.Item

## Props

```ComponentPropTable path=primitives,Select,SelectItem.tsx

```

## Styling

<ComponentTheme name="select" />

## Accessibility

- use `native` variant. Accessibility improvements on styled variant is in-progress.
