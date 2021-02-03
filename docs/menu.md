---
id: menu
title: Menu
---

A dropdown menu for the common dropdown menu button design pattern.

## Import

NativeBase exports 8 components for rendering menus:

- `Menu`: The wrapper component provides context, state, and focus management.
- `MenuList`: The wrapper for the menu items. Must be a direct child of `Menu`.
- `MenuButton`: The trigger for the menu list. Must be a direct child of `Menu`.
- `MenuItem`: The trigger that handles menu selection. Must be a direct child of a `MenuList`.
- `MenuGroup`: A wrapper to group related menu items.
- `MenuDivider`: A visual separator for menu items and groups.
- `MenuOptionGroup`: A wrapper for checkable menu items (radio and checkbox)
- `MenuItemOption`: The checkable menu item, to be used with `MenuOptionGroup`

```jsx
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from 'native-base';
```

## Example (Usage)

```SnackPlayer name=Menu%20Usage
import React from 'react';
import { Menu, MenuItem, Divider, IconButton, NativeBaseProvider } from 'native-base';

function MenuComponent () {
  return (
    <Menu
      trigger={(triggerProps: any) => {
        return (
          <IconButton name="menu" {...triggerProps} >
            Show Menu
          </IconButton>
        );
      }}
    >
      <MenuItem isDisabled>Menu item 1</MenuItem>
      <MenuItem>Menu item 2</MenuItem>
      <MenuItem isDisabled>Menu item 3</MenuItem>
      <Divider />
      <MenuItem>Menu item 4</MenuItem>
    </Menu>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <MenuComponent />
    </NativeBaseProvider>
  );
}
```

## Example (MenuGroup)

```SnackPlayer name=Menu%20Example (MenuGroup)
import React from 'react';
import { Menu, MenuItem, Divider, IconButton, MenuGroup, NativeBaseProvider} from 'native-base';

function MenuComponent () {
  return (
    <Menu
      closeOnSelect={false}
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
      trigger={(triggerProps) => {
        return (
          <IconButton name="menu" {...triggerProps} bg="teal.200">
            Show Menu
          </IconButton>
        );
      }}
    >
      <MenuGroup title="Profile">
        <MenuItem>Menu item 1</MenuItem>
        <MenuItem>Menu item 2</MenuItem>
      </MenuGroup>
      <Divider />
      <MenuGroup title="Help">
        <MenuItem isDisabled>Menu item 3</MenuItem>
        <MenuItem>Menu item 4</MenuItem>
      </MenuGroup>
    </Menu>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <MenuComponent />
    </NativeBaseProvider>
  );
}
```

## Example (MenuOptionGroups)

```SnackPlayer name=Menu%20Example (MenuOptionGroups)
import React from 'react';
import {
  Menu,
  MenuItemOption,
  IconButton,
  MenuOptionGroup,
  Divider,
  NativeBaseProvider
} from 'native-base';

function MenuComponent () {
  return (
    <Menu
      closeOnSelect={false}
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
      trigger={(triggerProps) => {
        return (
          <IconButton name="menu" {...triggerProps} bg="teal.200">
            Show Menu
          </IconButton>
        );
      }}
    >
      <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
        <MenuItemOption value="asc">Ascending</MenuItemOption>
        <MenuItemOption value="desc">Descending</MenuItemOption>
      </MenuOptionGroup>
      <Divider />
      <MenuOptionGroup title="Country" type="checkbox">
        <MenuItemOption value="email">Email</MenuItemOption>
        <MenuItemOption value="phone">Phone</MenuItemOption>
        <MenuItemOption value="country">Country</MenuItemOption>
      </MenuOptionGroup>
    </Menu>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <MenuComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Menu

| Name          | Type     | Description                                               | Default |
| ------------- | -------- | --------------------------------------------------------- | ------- |
| trigger       | function | Pressable element to apply the trigger of menu.           | -       |
| onOpen        | function | Function to be called when menu opens.                    | -       |
| onClose       | function | Function to be called when menu closes.                   | -       |
| closeOnSelect | boolean  | If true, the menu will close when a menu item is clicked. | -       |
| Component     |          |                                                           |         |

### MenuItem

| Name          | Type      | Description                                               | Default |
| ------------- | --------- | --------------------------------------------------------- | ------- |
| isDisabled    | boolean   | If true, the menu item will be disabled.                  | -       |
| onPress       | function  | Function that is called on press.                         | -       |
| textStyle     | TextStyle | Style to apply on Text.                                   | -       |
| closeOnSelect | boolean   | If true, the menu will close when a menu item is clicked. | -       |
| Component     |           |                                                           |         |

### **MenuItemOption**

Extends MenuItem.

### MenuItemOption

| Name      | Type           | Description                     | Default |
| --------- | -------------- | ------------------------------- | ------- |
| value     | number, string | The value of the MenuItemOption | -       |
| Component |                |                                 |         |

### MenuGroup

| Name      | Type   | Description                 | Default |
| --------- | ------ | --------------------------- | ------- |
| title     | string | The title of the menu group | -       |
| Component |        |                             |         |

### MenuOptionGroup

| Name         | Type                               | Description                                         | Default |
| ------------ | ---------------------------------- | --------------------------------------------------- | ------- |
| type         | checkbox, radio                    | Used to add roles menuitemradio or menuitemcheckbox | -       |
| defaultValue | number, number[], string, string[] | The initial value of the option group.              | -       |
| value        | number, string                     | The value of the option group.                      | -       |
| onChange     | function                           | Function called when selection changes              | -       |
| Component    |                                    |                                                     |         |
