---
id: icon
title: Icon
---

You can use icons in multiple ways in NativeBase:

- Use `@expo/vector-icons` in your components.
- Create icon by creating an SVG Icon
- Create icon using createIcon function and use it as component

## Implements

- All icons types from [@expo/vector-icon](https://github.com/expo/vector-icons)
- `color`, `space`, `typography` from style-system

## Example

```SnackPlayer name=Icon%20Example
import React from "react";
import { Icon, NativeBaseProvider } from "native-base";
function IconComponent() {
  return (
    <>
      <Icon type="Ionicons" name="md-checkmark-circle" />
      <Icon name="menu" type="MaterialIcons" color="teal.2" size={20} />
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <IconComponent />
    </NativeBaseProvider>
  );
}
```

## Example (custom)

```SnackPlayer name=Icon%20Example (custom)
import React from "react";
import { Icon, NativeBaseProvider,Path } from "native-base";
function IconComponent() {
  return (
    <Icon viewBox="0 0 200 200" color="blue.3" size={12}>
      <Path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <IconComponent />
    </NativeBaseProvider>
  );
}
```

## Example (createIcon)

```SnackPlayer name=Icon%20Example (createIcon)
import React from "react";
import { createIcon, Path, NativeBaseProvider } from "native-base";
function CreateIconExample() {
  const CustomIcon = createIcon({
    viewBox: "0 0 200 200",
    path: [
      <Path
        fill="blue"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />,
      <Path
        fill="blue"
        d="M 200, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />,
    ],
  });
  return <CustomIcon color="red.2" size={12} />;
}
export default function () {
  return (
    <NativeBaseProvider>
      <CreateIconExample />
    </NativeBaseProvider>
  );
}
```

## Props

### Icon

| Name        | Type     | Description                                         | Default |
| ----------- | -------- | --------------------------------------------------- | ------- |
| name        | string   | The name of icon.                                   | -       |
| type        | IconType | The type of the icon.                               | -       |
| viewBox     | string   | The viewBox of the icon.                            | -       |
| color       | string   | The color of the icon.                              | -       |
| focusable   | boolean  | Denotes whether the icon is an interactive element. | -       |
| stroke      | string   |                                                     | -       |
| strokeWidth | string   |                                                     | -       |
| Component   |          |                                                     |         |

### CreateIcon

| Name      | Type        | Description              | Default |
| --------- | ----------- | ------------------------ | ------- |
| viewBox   | string      | The viewBox of the icon  | -       |
| d         | string      | The path of the SVG icon | -       |
| path      | JSX.Element | path element of the icon | -       |
| Component |             |                          |         |
