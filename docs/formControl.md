---
id: formControl
title: Form Control
---

`FormControl` provides context such as `isInvalid`, `isDisabled`, and `isRequired` to form elements.

## Import

```jsx
import { FormControl } from 'native-base';
```

## Examples

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
        Default:
      </Text>
      <FormControl>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Input />
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for disable:
      </Text>
      <FormControl isDisabled>
        <FormControl.Label
          _disabled={{
            _text: {
              color: 'gray.400',
              fontWeight: 'bold',
            },
          }}
        >
          Favorite framework
        </FormControl.Label>
        <Input />
        <FormControl.HelperText
          _disabled={{
            borderLeftWidth: 1,
            mt: 1,
            px: 1,
            pl: 2,
            borderColor: 'gray.400',
          }}
        >
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for invalid:
      </Text>
      <FormControl isRequired isInvalid>
        <FormControl.Label
          _invalid={{
            _text: {
              color: 'rose.500',
              fontWeight: 'bold',
            },
          }}
        >
          Favorite framework
        </FormControl.Label>
        <Input />
        <FormControl.HelperText
          _invalid={{
            _text: {
              color: 'red.400',
              underline: true,
            },
          }}
        >
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

**FormControl.Label**, **FormControl.HelperText**, and **FormControl.ErrorMessage** can be styled using pseudo style props like `_invalid` and `_disabled`.
