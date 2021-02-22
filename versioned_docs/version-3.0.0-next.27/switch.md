---
id: switch
title: Switch
---

The `Switch` component is an alternative to the Checkbox component. You can switch between enabled or disabled states.

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
import { VStack,Switch, NativeBaseProvider } from 'native-base';

function SwitchComponent () {
  return (
		<VStack space={4}>
      <Switch />
      <Switch offTrackColor="rose.200" onTrackColor="lime.200" />
      <Switch offThumbColor="rose.200" onThumbColor="lime.200" />
    </VStack>
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

| Name               | Type       | Description                                                                      | Default |
| ------------------ | ---------- | -------------------------------------------------------------------------------- | ------- |
| name               | string     | The input name of the Switch when used in a form.                                | -       |
| size               | lg, md, sm | The size (width and height) of the switch.                                       | md      |
| isChecked          | boolean    | If true, set the Switch to the checked state.                                    | -       |
| defaultIsChecked   | boolean    | If true, the checkbox will be initially checked.                                 | -       |
| isDisabled         | boolean    | If true, set the disabled to the invalid state.                                  | -       |
| isInvalid          | boolean    | If true, set the switch to the invalid state.                                    | -       |
| onTrackColor       | string     | The track color of the Switch when on.                                           | -       |
| offTrackColor      | string     | The track color of the Switch when off.                                          | -       |
| onThumbColor       | string     | The thumb color of the Switch when on.                                           | -       |
| offThumbColor      | string     | The thumb color of the Switch when off.                                          | -       |
| onToggle           | function   | Function called when the state of the Switch changes.                            | -       |
| accessibilityLabel | string     | The https://reactnative.dev/docs/accessibility#accessibilitylabel for component. | -       |
| accessibilityHint  | string     | https://reactnative.dev/docs/accessibility#accessibilityhint for component       |         |
