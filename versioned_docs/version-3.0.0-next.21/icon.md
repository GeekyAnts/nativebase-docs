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

## Example

```SnackPlayer name=Icon%20Example
import React from "react";
import { Icon, NativeBaseProvider } from "native-base";
function IconComponent() {
  return (
    <>
      <Icon type="Ionicons" name="md-checkmark-circle" />
      <Icon name="menu" type="MaterialIcons" color="teal.200" size={6} />
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

Apart from the icons provided by [@expo/vector-icon](https://github.com/expo/vector-icons), you can also create custom icons using SVG. You can use all the components from [react-native-svg](https://github.com/react-native-svg/react-native-svg).

## Example (custom)

```SnackPlayer name=Icon%20Example (custom)
import React from "react";
import { Icon, NativeBaseProvider } from "native-base";
import { Rect, Path, Circle } from 'react-native-svg';

function IconComponent() {
  return (
    <Icon viewBox="0 0 200 200" color="blue.300" size={12} strokeWidth="10">
      <Rect x="10" y="15" width="200" height="200" fill="yellow.200" />
      <Path
        fill="blue.300"
        stroke="red.300"
        strokeWidth="10"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
      <Circle cx="100" cy="100" r="50" fill="pink.200" />
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
import { createIcon, NativeBaseProvider } from "native-base";
import { Path, Circle } from 'react-native-svg';

function CreateIconExample() {
  const CustomIcon = createIcon({
    viewBox: "0 0 200 200",
    path: [
      <Path
        fill="blue.200"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />,
      <Circle cx="50" cy="50" r="50" fill="pink.200" />,
    ],
  });
  return <CustomIcon color="red.200" size={12} />;
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

### CreateIcon

| Name    | Type        | Description              | Default |
| ------- | ----------- | ------------------------ | ------- |
| viewBox | string      | The viewBox of the icon  | -       |
| d       | string      | The path of the SVG icon | -       |
| path    | JSX.Element | path element of the icon | -       |
