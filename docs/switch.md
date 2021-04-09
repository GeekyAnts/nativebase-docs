---
id: switch
title: Switch
---

The `Switch` component is an alternative to the Checkbox component. You can switch between enabled or disabled states.

## Implements

- [`Switch`](https://reactnative.dev/docs/switch) from [`React Native`](https://reactnative.dev)

## Examples

### Basic

```SnackPlayer name=Switch%20Example
import React from 'react';
import { Switch, HStack, Text, NativeBaseProvider, Center } from 'native-base';

function SwitchComponent () {
  return (
    <HStack alignItems="center" space={8}>
      <Text fontSize="lg">Setting 1</Text>
      <Switch />
    </HStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SwitchComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Sizes

```SnackPlayer name=Switch%20Sizes
import React from 'react';
import { Switch, VStack, Heading, NativeBaseProvider, Center } from 'native-base';

function SwitchComponent () {
  return (
    <VStack space={4} alignItems="center">
      <Heading>Switch Sizes</Heading>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SwitchComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Track & Thumb Color

```SnackPlayer name=Switch%20Track%20&%20Thumb%20Color
import React from 'react';
import { Switch, VStack, Heading, NativeBaseProvider, Center } from 'native-base';

function SwitchComponent () {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center">Switch Track & Thumb Color</Heading>
      <Switch />
      <Switch offTrackColor="rose.200" onTrackColor="lime.200" />
      <Switch offThumbColor="rose.200" onThumbColor="lime.200" />
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SwitchComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### ColorScheme

```SnackPlayer name=Switch%20ColorScheme
import React from 'react';
import { Switch, VStack, Heading, NativeBaseProvider, Center } from 'native-base';

function SwitchComponent () {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center">Switch ColorScheme</Heading>
      <Switch colorScheme="primary" />
      <Switch colorScheme="secondary" />
      <Switch colorScheme="emerald" />
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SwitchComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Accessibility

```SnackPlayer name=Switch%20Accessibility
import React from 'react';
import { Switch, HStack, Text, NativeBaseProvider, Center } from 'native-base';

function SwitchComponent () {
  return (
    <HStack space={8} alignItems="center">
      <Text fontSize="lg">Accessibility</Text>
      <Switch
        accessibilityLabel="switch-accessible"
        accessibilityHint="turn on or off"
      />
    </HStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SwitchComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name               | Type                                          | Description                                                                                          | Default   |
| ------------------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------- |
| name               | string                                        | The input name of the Switch when used in a form.                                                    | -         |
| size               | `lg`, `md`, `sm`                              | The size (width and height) of the switch.                                                           | `md`      |
| colorScheme        | [`color`](default-theme.md#colors) , `string` | Switch colorScheme.                                                                                  | `primary` |
| isChecked          | boolean                                       | If true, set the Switch to the checked state.                                                        | -         |
| defaultIsChecked   | boolean                                       | If true, the checkbox will be initially checked.                                                     | -         |
| isDisabled         | boolean                                       | If true, set the disabled to the invalid state.                                                      | -         |
| isInvalid          | boolean                                       | If true, set the switch to the invalid state.                                                        | -         |
| onTrackColor       | string                                        | The track color of the Switch when on.                                                               | -         |
| offTrackColor      | string                                        | The track color of the Switch when off.                                                              | -         |
| onThumbColor       | string                                        | The thumb color of the Switch when on.                                                               | -         |
| offThumbColor      | string                                        | The thumb color of the Switch when off.                                                              | -         |
| onToggle           | function                                      | Function called when the state of the Switch changes.                                                | -         |
| \_hover            | Object                                        | Props for on hover.                                                                                  | -         |
| accessibilityLabel | string                                        | [`Accessibilty label`](https://reactnative.dev/docs/accessibility#accessibilitylabel) for component. | -         |
| accessibilityHint  | string                                        | [`Accessibilty hint`](https://reactnative.dev/docs/accessibility#accessibilityhint) for component    |           |

## Accessibility

- On mobile, uses native switch which is fully accessible.
- On web, it uses checkbox with a `role` set to `switch`.
- `Spacebar` toggles the switch.
