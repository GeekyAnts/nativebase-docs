---
id: radio
title: Radio
---

`Radio` is used when only one choice may be selected in a series of options.

## Implements

- [`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity) form [`React Native`](https://reactnative.dev)
- [`Box`](box.md)

## Examples

### Basic

```SnackPlayer name=Radio%20Basic
import React from 'react';
import { Stack, Radio, Text, NativeBaseProvider, Center } from 'native-base';

function RadioComponent () {
  return (
    <Radio.Group defaultValue="1">
      <Stack space={2} alignItems="flex-start">
        <Radio value="1">
          <Text mx={2}>First</Text>
        </Radio>
        <Radio value="2">
          <Text mx={2}>Second</Text>
        </Radio>
        <Radio value="3">
          <Text mx={2}>Third</Text>
        </Radio>
      </Stack>
    </Radio.Group>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Disabled

```SnackPlayer name=Radio%20Disabled
import React from 'react';
import { Stack, Radio, Text,  NativeBaseProvider, Center } from 'native-base';

function RadioComponent () {
  return (
    <Radio.Group defaultValue="1">
      <Stack space={2} alignItems="flex-start">
        <Radio value="1" isDisabled>
          <Text mx={2}>First</Text>
        </Radio>
        <Radio value="2">
          <Text mx={2}>Second</Text>
        </Radio>
        <Radio value="3">
          <Text mx={2}>Third</Text>
        </Radio>
      </Stack>
    </Radio.Group>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Invalid

```SnackPlayer name=Radio%20Invalid
import React from 'react';
import { Radio, Text, NativeBaseProvider, Center } from 'native-base';

function RadioComponent () {
  return (
    <Radio.Group defaultValue="1">
      <Radio isInvalid>
        <Text mx={2}>Invalid Radio</Text>
      </Radio>
    </Radio.Group>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Size

```SnackPlayer name=Radio%20Sizes
import React from 'react';
import { Radio, Stack, Text, NativeBaseProvider, Center } from 'native-base';

function RadioComponent () {
  return (
    <Radio.Group defaultValue="1">
      <Stack space={2} alignItems="flex-start">
        <Radio value="1" colorScheme="red" size="sm">
          <Text mx={2}>Small</Text>
        </Radio>
        <Radio value="2" colorScheme="green" size="md">
          <Text mx={2}>Medium</Text>
        </Radio>
        <Radio value="3" colorScheme="yellow" size="lg">
          <Text mx={2}>Large</Text>
        </Radio>
      </Stack>
    </Radio.Group>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom Color

```SnackPlayer name=Radio%20Custom Color
import React from 'react';
import { Radio, Stack, Text, NativeBaseProvider, Center } from 'native-base';

function RadioComponent () {
  return (
    <Radio.Group defaultValue="1">
    <Stack space={2} alignItems="flex-start">
        <Radio colorScheme="red" value="1">
          <Text mx={2}>red</Text>
        </Radio>
        <Radio colorScheme="black" value="2">
          <Text mx={2}>black</Text>
        </Radio>
        <Radio colorScheme="success" value="3">
          <Text mx={2}>success</Text>
        </Radio>
      </Stack>
    </Radio.Group>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom Icon

```SnackPlayer name=Radio%20Custom Icon
import React from 'react';
import { Radio, Stack, Text, Icon, NativeBaseProvider, Center } from 'native-base';

function RadioComponent () {
  return (
    <Radio.Group defaultValue="1" size="lg">
      <Stack space={2} alignItems="flex-start">
        <Radio
          colorScheme="green"
          value="1"
          icon={<Icon name="alien" type="MaterialCommunityIcons" />}
        >
          <Text mx={2}>Alien</Text>
        </Radio>
        <Radio
          colorScheme="red"
          value="2"
          icon={<Icon name="fire" type="MaterialCommunityIcons" />}
          mt={2}
        >
          <Text mx={2}>Fire</Text>
        </Radio>
        <Radio
          colorScheme="warning"
          value="3"
          icon={<Icon name="exclamation-thick" type="MaterialCommunityIcons" />}
          mt={2}
        >
          <Text mx={2}>Warning</Text>
        </Radio>
      </Stack>
    </Radio.Group>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Form Controlled

```SnackPlayer name=Radio%20Form Controlled
import React from 'react';
import {
  Radio,
  Text,
  FormControl,
  Container,
  NativeBaseProvider,
  Center,
  Stack
} from 'native-base';

function RadioComponent () {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select One</FormControl.Label>
        <Radio.Group defaultValue="1">
          <Stack space={2} alignItems="flex-start">
            <Radio value="1">
              <Text mx={2}>First</Text>
            </Radio>
            <Radio value="2">
              <Text mx={2}>Second</Text>
            </Radio>
            <Radio value="3">
              <Text mx={2}>Third</Text>
            </Radio>
            </Stack>
        </Radio.Group>
        <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Basic (With Ref)

```SnackPlayer name=Radio%20With Ref
import React from 'react';
import { Stack, Radio, Icon, NativeBaseProvider, Center } from 'native-base';

function RadioComponent () {
  const myRef: any = React.useRef({});
  return (
    <Radio.Group
      colorScheme="success"
      onChange={(value) => {
        if (value === '2')
          myRef?.current.setNativeProps({ backgroundColor: '#00de0050' });
        else
          myRef?.current.setNativeProps({
            backgroundColor: '#fa000050',
          });
      }}
    >
      <Stack space={2} alignItems="flex-start">
        <Radio
          colorScheme="success"
          icon={
            <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
          }
          value="1"
        >
          Wrong
        </Radio>
        <Radio
          colorScheme="success"
          icon={
            <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
          }
          ref={myRef}
          value="2"
        >
          Correct
        </Radio>
      </Stack>
    </Radio.Group>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RadioComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Accessibility

Uses React Native ARIA [@react-native-aria/radio](https://react-native-aria.geekyants.com/docs/useRadioGroup) which follows the [Radio Group WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton).

### Keyboard Interactions

| Key          | Description                                                                        |
| ------------ | ---------------------------------------------------------------------------------- |
| `Tab`        | Moves focus to either the checked radio item or the first radio item in the group. |
| `Space`      | When focus is on an unchecked radio item, checks it.                               |
| `ArrowDown`  | Moves focus to the next radio item in the group.                                   |
| `ArrowRight` | Moves focus to the next radio item in the group.                                   |
| `ArrowUp`    | Moves focus to the previous radio item in the group.                               |
| `ArrowLeft`  | Moves focus to the previous radio item in the group.                               |

## Props

### Radio

| Name             | Type             | Description                                                                                                       | Default |
| ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| name             | string           | The name of the input field in a radio (Useful for form submission).                                              | -       |
| id               | string           | The id assigned to input field.                                                                                   |         |
| value            | number, string   | The value to be used in the radio input. This is the value that will be returned on form submission               | -       |
| colorScheme      | string           | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | default |
| defaultIsChecked | boolean          | If true, the radio will be initially checked.                                                                     | -       |
| size             | `lg`, `md`, `sm` | The size (width and height) of the radio.                                                                         | `md`    |
| isDisabled       | boolean          | If true, the radio will be disabled                                                                               | -       |
| icon             | JSX.Element      | If given, will use this icon instead of the default.                                                              | -       |
| isInvalid        | boolean          | If true, the radio is marked as invalid. Changes style of unchecked state.                                        | -       |
| onChange         | function         | Function called when the state of the radio changes.                                                              | -       |
| children         | JSX.Element      | The children of the radio.                                                                                        | -       |
| ariaLabel        | string           | An accessible label for the radio in event there's no visible label or children was passed                        | -       |

### Radio Group

`Radio.Group` implements **[Box](box.md)**, so all the Box Props can be passed to it.

| Name         | Type     | Description                                                         | Default |
| ------------ | -------- | ------------------------------------------------------------------- | ------- |
| value        | Array    | The value of the radio group.                                       | -       |
| defaultValue | Array    | The initial value of the radio group.                               | -       |
| onChange     | function | The callback fired when any children radio is checked or unchecked. | -       |

### Shared Style Props

The following props can be set on `Radio.Group` and they will be forwarded to all children `Radio` components.

| Name        | Type             | Description                                                                                                       | Default   |
| ----------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- | --------- |
| colorScheme | string           | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | `default` |
| size        | `lg`, `md`, `sm` | The size (width and height) of the radio.                                                                         | `md`      |
| isDisabled  | boolean          | If true, the radio will be disabled                                                                               | -         |
| isInvalid   | boolean          | If true, the radio is marked as invalid. Changes style of unchecked state.                                        | -         |
