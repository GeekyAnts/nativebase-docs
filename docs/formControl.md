---
id: formControl
title: Form Control
---

`FormControl` provides context such as `isInvalid`, `isDisabled`, and `isRequired` to form elements.

## Import

```jsx
import { FormControl } from 'native-base';
```

## Usage

### Basic

```SnackPlayer name=FormControl%20Example
import React from 'react';
import {
  FormControl,
  Input,
  NativeBaseProvider,
  Center
} from 'native-base';

function FormControlComponent () {
  return (
    <FormControl isRequired isInvalid>
      <FormControl.Label>Favorite framework</FormControl.Label>
      <Input p={2} placeholder="Is it react?" />
      <FormControl.HelperText>
        We'll keep this between us.
      </FormControl.HelperText>
      <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
    </FormControl>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormControlComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom Style

```SnackPlayer name=FormControl%20Example(CustomStyle)
import React from 'react';
import {
  FormControl, Input, Stack, Text, NativeBaseProvider, Center
} from 'native-base';

function FormControlComponent () {
  return (
    <Stack width="90%" space={4}>
      <Text bold underline>
        Custom style for disable:
      </Text>
      <FormControl isDisabled>
        <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for invalid:
      </Text>
      <FormControl isRequired isInvalid>
        <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for disable as well as invalid:
      </Text>
      <FormControl isRequired isInvalid isDisabled>
        <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormControlComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### FormControl

| Name       | Type    | Description                                   | Default |
| ---------- | ------- | --------------------------------------------- | ------- |
| isInvalid  | boolean | If true, this prop is passed to its children. | -       |
| isRequired | boolean | If true, this prop is passed to its children. | -       |
| isDisabled | boolean | If true, this prop is passed to its children. | -       |
| isReadOnly | boolean | If true, this prop is passed to its children. | -       |
