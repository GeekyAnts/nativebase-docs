---
id: switch
title: Switch
---

The `Switch` component is used as an alternative for the Checkbox component. You can switch between enabled or disabled states.

## Implements

- `Switch` from react-native

## Example

```SnackPlayer name=Switch%20Example
import React from 'react';
import { Switch, HStack, Text, NativeBaseProvider } from 'native-base';

function SwitchComponent () {
  return (
    <HStack>
      <Text>Enable email alerts?</Text>
      <Switch />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SwitchComponent />
    </NativeBaseProvider>
  );
}
```

## Example(Sizes)

```SnackPlayer name=Switch%20Sizes
import React from 'react';
import { Switch, NativeBaseProvider } from 'native-base';

function SwitchComponent () {
  return (
    <>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SwitchComponent />
    </NativeBaseProvider>
  );
}
```

## Example(Background)

```SnackPlayer name=Switch%20Background
import React from 'react';
import { Switch, NativeBaseProvider } from 'native-base';

function SwitchComponent () {
  return (
    <>
      <Switch colorScheme="red" />
      <Switch colorScheme="teal" size="lg" />
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SwitchComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Switch

| Name               | Type       | Description                                                                                                       | Default |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| name               | string     | The input name of the Switch when used in a form.                                                                 | -       |
| size               | lg, md, sm | The size (width and height) of the switch.                                                                        | md      |
| colorScheme        | string     | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | -       |
| isChecked          | boolean    | If true, set the Switch to the checked state.                                                                     | -       |
| defaultIsChecked   | boolean    | If true, the checkbox will be initially checked.                                                                  | -       |
| isDisabled         | boolean    | If true, set the disabled to the invalid state.                                                                   | -       |
| isInvalid          | boolean    | If true, set the switch to the invalid state.                                                                     | -       |
| onColor            | string     | The background color of the Switch when on.                                                                       | -       |
| offColor           | string     | The background color of the Switch when off.                                                                      | -       |
| onToggle           | function   | Function called when the state of the Switch changes.                                                             | -       |
| iosBgColor         | string     | The background color of the Switch ( Only for IOS ).                                                              | -       |
| accessibilityLabel | string     | The https://reactnative.dev/docs/accessibility#accessibilitylabel for component.                                  | -       |
| accessibilityHint  | string     | https://reactnative.dev/docs/accessibility#accessibilityhint for component                                        |         |
