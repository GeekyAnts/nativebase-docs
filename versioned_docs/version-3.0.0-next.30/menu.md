---
id: menu
title: Menu
---

A dropdown menu for the common dropdown menu button design pattern.

## Import

NativeBase uses 5 components for rendering menus:

- `Menu`: The wrapper component provides context, state, and focus management.
- `Menu.Item`: The trigger that handles menu selection. Must be a direct child of a `MenuList`.
- `Menu.Group`: A wrapper to group related menu items.
- `Menu.OptionGroup`: A wrapper for checkable menu items (radio and checkbox).
- `Menu.ItemOption`: The checkable menu item, to be used with `MenuOptionGroup`.

```jsx
import { Menu } from 'native-base';
```

## Basic

```SnackPlayer name=Menu%20Basic
import React from 'react';
import { Menu, Divider, IconButton, Icon, NativeBaseProvider, Center } from 'native-base';

function MenuComponent () {
  return (
	<Menu
      trigger={(triggerProps: any) => {
        return <IconButton icon={<Icon name="menu" />} {...triggerProps} />;
      }}
    >
      <Menu.Item isDisabled>Menu item 1</Menu.Item>
      <Menu.Item>Menu item 2</Menu.Item>
      <Menu.Item isDisabled>Menu item 3</Menu.Item>
      <Divider />
      <Menu.Item>Menu item 4</Menu.Item>
    </Menu>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <MenuComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Group

```SnackPlayer name=Menu%20Example (MenuGroup)
import React from 'react';
import { Menu, Divider, IconButton, Icon, NativeBaseProvider, Center} from 'native-base';

function MenuComponent () {
  return (
    <Menu
      closeOnSelect={false}
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
      trigger={(triggerProps) => {
        return (
          <IconButton icon={<Icon name="menu" />} {...triggerProps}>
            Show Menu
          </IconButton>
        );
      }}
    >
      <Menu.Group title="Profile">
        <Menu.Item>Menu item 1</Menu.Item>
        <Menu.Item>Menu item 2</Menu.Item>
      </Menu.Group>
      <Divider />
      <Menu.Group title="Help">
        <Menu.Item isDisabled>Menu item 3</Menu.Item>
        <Menu.Item>Menu item 4</Menu.Item>
      </Menu.Group>
    </Menu>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <MenuComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## MenuOptionGroups

```SnackPlayer name=Menu%20Example (MenuOptionGroups)
import React from 'react';
import { Menu, IconButton, Divider, Icon, NativeBaseProvider, Center } from 'native-base';

function MenuComponent () {
  return (
    <Menu
      closeOnSelect={false}
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
      trigger={(triggerProps) => {
        return (
          <IconButton icon={<Icon name="menu" />} {...triggerProps}>
            Show Menu
          </IconButton>
        );
      }}
    >
      <Menu.OptionGroup defaultValue="asc" title="Order" type="radio">
        <Menu.ItemOption value="asc">Ascending</Menu.ItemOption>
        <Menu.ItemOption value="desc">Descending</Menu.ItemOption>
      </Menu.OptionGroup>
      <Divider />
      <Menu.OptionGroup title="Country" type="checkbox">
        <Menu.ItemOption value="email" _text={{ fontWeight: 'bold' }}>
          Email
        </Menu.ItemOption>
        <Menu.ItemOption value="phone">Phone</Menu.ItemOption>
        <Menu.ItemOption value="country">Country</Menu.ItemOption>
      </Menu.OptionGroup>
    </Menu>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <MenuComponent />
      </Center>
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

### MenuItem

| Name          | Type      | Description                                               | Default |
| ------------- | --------- | --------------------------------------------------------- | ------- |
| isDisabled    | boolean   | If true, the menu item will be disabled.                  | -       |
| onPress       | function  | Function that is called on press.                         | -       |
| \_text        | TextStyle | Props to pass on to Text.                                 | -       |
| closeOnSelect | boolean   | If true, the menu will close when a menu item is clicked. | -       |

### **MenuItemOption**

Extends MenuItem.

### MenuItemOption

| Name  | Type           | Description                     | Default |
| ----- | -------------- | ------------------------------- | ------- |
| value | number, string | The value of the MenuItemOption | -       |

### MenuGroup

| Name    | Type      | Description                 | Default |
| ------- | --------- | --------------------------- | ------- |
| title   | string    | The title of the menu group | -       |
| \_title | TextStyle | Props to pass on to Text.   | -       |

### MenuOptionGroup

| Name         | Type                               | Description                                         | Default |
| ------------ | ---------------------------------- | --------------------------------------------------- | ------- |
| type         | checkbox, radio                    | Used to add roles menuitemradio or menuitemcheckbox | -       |
| defaultValue | number, number[], string, string[] | The initial value of the option group.              | -       |
| value        | number, string                     | The value of the option group.                      | -       |
| onChange     | function                           | Function called when selection changes              | -       |
