---
id: menu
title: Menu
---

import { ComponentTheme } from '../../src/components';

A dropdown menu for the common dropdown menu button design pattern.

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

```ComponentSnackPlayer path=composites,Menu,Basic.tsx

```

### Group

```ComponentSnackPlayer path=composites,Menu,Group.tsx

```

### MenuOptionGroups

```ComponentSnackPlayer path=composites,Menu,MenuOptionsGroup.tsx

```

### Menu Placement

```ComponentSnackPlayer path=composites,Menu,MenuPositions.tsx

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
