---
id: checkBox
title: CheckBox
---

The `Checkbox` component is used in forms when a user needs to select multiple values from several options.

## Implements

- [`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity) form [`React Native`](https://reactnative.dev)
- [`Box`](box.md)

## Examples

### Basic

```SnackPlayer name=CheckBox%20Usage
import React from "react";
import { Checkbox, NativeBaseProvider, Center } from "native-base";

function CheckboxComponent() {
  return <Checkbox />;
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Disabled

```SnackPlayer name=CheckBox%20Disabled
import React from "react";
import { Checkbox, VStack, Text, NativeBaseProvider, Center } from "native-base";

function CheckboxComponent() {
  return (
    <VStack>
      <Checkbox isDisabled>
        <Text m={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        <Text m={2}>Checkbox</Text>
      </Checkbox>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Invalid

```SnackPlayer name=CheckBox%20Invalid
import React from "react";
import { Checkbox, HStack, Text, NativeBaseProvider, Center } from "native-base";

function CheckboxComponent() {
  return (
    <HStack>
      <Checkbox isInvalid>
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
    </HStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom Color

```SnackPlayer name=CheckBox%20Custom%20Color
import React from "react";
import { Checkbox, VStack, Text, NativeBaseProvider, Center } from "native-base";

function CheckboxComponent() {
  return (
    <VStack>
      <Checkbox colorScheme="critical" defaultIsChecked>
        <Text mx={2}>Critical</Text>
      </Checkbox>
      <Checkbox colorScheme="info" defaultIsChecked>
        <Text mx={2}>Info</Text>
      </Checkbox>
      <Checkbox colorScheme="orange" defaultIsChecked>
        <Text mx={2}>Orange</Text>
      </Checkbox>
      <Checkbox colorScheme="purple" defaultIsChecked>
        <Text mx={2}>Purple</Text>
      </Checkbox>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom Icon

```SnackPlayer name=CheckBox%20CustomIcon
import React from "react";
import { Checkbox, VStack, Text, Icon, NativeBaseProvider, Center } from "native-base";

function CheckboxComponent() {
  return (
    <VStack>
      <Checkbox
        colorScheme="orange"
        size="md"
        icon={<Icon name="bullseye" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Darts</Text>
      </Checkbox>
      <Checkbox
        colorScheme="dark"
        size="md"
        icon={<Icon name="bat" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Movie</Text>
      </Checkbox>
      <Checkbox
        colorScheme="red"
        size="md"
        icon={<Icon name="campfire" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Camping</Text>
      </Checkbox>
      <Checkbox
        colorScheme="blue"
        size="md"
        icon={<Icon name="chess-knight" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Chess</Text>
      </Checkbox>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Size

```SnackPlayer name=CheckBox%20Size
import React from "react";
import { Checkbox, HStack, Text, Icon, NativeBaseProvider, Center } from "native-base";

function CheckboxComponent() {
  return (
    <HStack>
      <Checkbox colorScheme="red.200" size="sm" defaultIsChecked>
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox
        colorScheme="green.200"
        size="md"
        icon={<Icon name="done" type="MaterialIcons" size={40} />}
        defaultIsChecked
      >
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox colorScheme="yellow.200" size="lg" defaultIsChecked>
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
    </HStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Checkbox Group

```SnackPlayer name=CheckBox%20Group
import React from "react";
import {
  Checkbox,
  Text,
  View,
  HStack,
  VStack,
  Center,
  Box,
  Heading,
  NativeBaseProvider,
} from "native-base";

function CheckboxComponent() {
  const [groupValue, setGroupValue] = React.useState(["Item 1 ", "Item 3 "]);
  return (
    <View display="flex" justifyContent="space-between" alignItems="center" m={3}>
      <HStack mb={2} alignItems="baseline">
        <Heading mt={3}>CheckboxGroup </Heading>
      </HStack>
      <Checkbox.Group
        colorScheme="green"
        defaultValue={groupValue}
        onChange={(values) => {
          setGroupValue(values || []);
        }}
      >
        <Checkbox value="Item 1 ">
          <Text mx={2}>Item 1</Text>
        </Checkbox>
        <Checkbox value="Item 2 ">
          <Text mx={2}>Item 2</Text>
        </Checkbox>
        <Checkbox value="Item 3 ">
          <Text mx={2}>Item 3</Text>
        </Checkbox>
        <Checkbox
          colorScheme="orange"
          isIndeterminate
          value="Indeterminate Item "
        >
          <Text mx={2}>Indeterminate Item</Text>
        </Checkbox>
      </Checkbox.Group>
      <VStack mt={3}>
        <Box>
          <Text fontSize="md">Selected Values: </Text>
          <Text fontSize="md" bold>
            {groupValue}
          </Text>
        </Box>
      </VStack>
    </View>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Form Controlled

```SnackPlayer name=CheckBox%20Form%20Controlled
import React from "react";
import {
  FormControl,
  Checkbox,
  VStack,
  Text,
  Container,
  NativeBaseProvider,
  Center
} from "native-base";

function CheckboxComponent() {
  const [groupValue, setGroupValue] = React.useState(["Item 1 ", "Item 3 "]);
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Checkbox.Group
          colorScheme="green"
          defaultValue={groupValue}
          onChange={(values) => {
            setGroupValue(values);
          }}
          alignItems="flex-start"
        >
          <Checkbox value="Item 1 ">
            <Text mx={2}>Item 1</Text>
          </Checkbox>
          <Checkbox value="Item 2 ">
            <Text mx={2}>Item 2</Text>
          </Checkbox>
          <Checkbox value="Item 3 ">
            <Text mx={2}>Item 3</Text>
          </Checkbox>
          <Checkbox
            colorScheme="orange"
            isIndeterminate
            value="Indeterminate Item "
          >
            <Text mx={2}>Indeterminate Item</Text>
          </Checkbox>
        </Checkbox.Group>
        <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>

      <VStack mt={3} alignItems="baseline">
        <Text fontSize="md">Selected Values: </Text>
        <Text fontSize="md" bold>
          {groupValue}
        </Text>
      </VStack>
    </Container>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Basic(With Ref)

```SnackPlayer name=CheckBox%20With%20Ref
import React from "react";
import { Checkbox, Icon, NativeBaseProvider, Center } from "native-base";

function CheckboxComponent() {
  const myRef: any = React.useRef({});
  return (
    <Checkbox
      colorScheme="success"
      icon={<Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />}
      ref={myRef}
      onChange={(_, state) => {
        if (state)
          myRef?.current.setNativeProps({ backgroundColor: "#00de0050" });
        else
          myRef?.current.setNativeProps({
            backgroundColor: "#fa000050",
          });
      }}
    >
      {" "}
      label
    </Checkbox>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CheckboxComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Accessibility

Uses React Native ARIA [@react-native-aria/checkbox](https://react-native-aria.geekyants.com/docs/useCheckbox) which follows the [Checkbox WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox).

### Keyboard Interactions

| Key     | Description                   |
| ------- | ----------------------------- |
| `Space` | Checks/unchecks the checkbox. |

## Props

### Checkbox

| Name             | Type             | Description                                                                                                           | Default |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| name             | string           | The name of the input field in a checkbox.                                                                            | -       |
| value            | number, string   | The value to be used in the checkbox input. This is the value that will be returned on form submission.               | -       |
| colorScheme      | string           | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").     | default |
| defaultIsChecked | boolean          | If true, the checkbox will be initially checked. (use `defaultValue` prop if using it inside Checkbox.Group)          | -       |
| isChecked        | boolean          | If true, the checkbox will be checked. You'll need to pass onChange to update it's value (since it's now controlled). | -       |
| isIndeterminate  | boolean          | If true, the checkbox will be indeterminate. This only affects the icon shown inside checkbox.                        | -       |
| size             | `lg`, `md`, `sm` | The size (width and height) of the checkbox.                                                                          | `md`    |
| isDisabled       | boolean          | If true, the checkbox will be disabled                                                                                | -       |
| icon             | JSX.Element      | If given, will use this icon instead of the default.                                                                  | -       |
| isInvalid        | boolean          | If true, the checkbox is marked as invalid. Changes style of unchecked state.                                         | -       |
| onChange         | function         | Function called when the state of the checkbox changes.                                                               | -       |
| children         | JSX.Element      | The children of the checkbox.                                                                                         | -       |

### Checkbox.Group

`Checkbox.Group` implements **[Box](box.md)**.

| Name         | Type     | Description                                                            | Default |
| ------------ | -------- | ---------------------------------------------------------------------- | ------- |
| value        | Array    | The value of the checkbox group.                                       | -       |
| defaultValue | Array    | The initial value of the checkbox group.                               | -       |
| onChange     | function | The callback fired when any children Checkbox is checked or unchecked. | -       |

The following props can be set on `Checkbox.Group` and they will be forwarded to all children `Checkbox` components.

### Shared Style Props

| Name        | Type             | Description                                                                                                       | Default |
| ----------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| colorScheme | string           | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | default |
| size        | `lg`, `md`, `sm` | The size (width and height) of the checkbox.                                                                      | `md`    |
| isDisabled  | boolean          | If true, the checkbox will be disabled                                                                            | -       |
| isInvalid   | boolean          | If true, the checkbox is marked as invalid. Changes style of unchecked state.                                     | -       |
