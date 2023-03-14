---
id: menu
title: Menu
---

import { ComponentTheme } from '../src/components';

`Menu` generates a dropdown menu along with the menu button design pattern.

```jsx isShowcase
import React from 'react';
import { Menu, HamburgerIcon, Box, Pressable } from 'native-base';

export function Example() {
  return (
    <Box h="80%" w="90%" alignItems="flex-start">
      <Menu
        shadow={2}
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          );
        }}
      >
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  );
}
```

## Import

NativeBase uses 5 components for rendering menus:

- `Menu`: The wrapper component provides context, state, and focus management.
- `Menu.Item`: The trigger that handles menu selection.
- `Menu.Group`: A wrapper to group related menu items.
- `Menu.OptionGroup`: A wrapper for checkable menu items (radio and checkbox).
- `Menu.ItemOption`: The checkable menu item, to be used with `MenuOptionGroup`.

```jsx
import { Menu } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Menu,Basic.tsx

```

### Group

```ComponentSnackPlayer path=components,composites,Menu,Group.tsx

```

### MenuOptionGroups

```ComponentSnackPlayer path=components,composites,Menu,MenuOptionsGroup.tsx

```

### Menu Placement

```ComponentSnackPlayer path=components,composites,Menu,MenuPositions.tsx

```

## Props

### Menu

```ComponentPropTable path=composites,Menu,Menu.tsx

```

### MenuItem

```ComponentPropTable path=composites,Menu,MenuItem.tsx

```

MenuItem implements [Pressable]

### MenuItemOption

Extends `MenuItem`.

### MenuItemOption

```ComponentPropTable path=composites,Menu,MenuItemOption.tsx

```

### MenuGroup

```ComponentPropTable path=composites,Menu,MenuGroup.tsx

```

### MenuOptionGroup

```ComponentPropTable path=composites,Menu,MenuOptionGroup.tsx

```

## Styling

<ComponentTheme name="menu" />

## Accessibility

Adheres to the [Menu WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/#menu)
