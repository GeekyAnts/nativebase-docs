---
id: pinInput
title: PinInput
---

The `PinInput` component is similar to the `Input` component, but it is optimized for entering sequences of digits.

## Implements

- `Input` from native-base/Input

## Usage

```SnackPlayer name=PinInput%20Usage
import React from 'react';
import { PinInput, PinInputField, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <PinInput inputSize="md" value="32" defaultValue="98">
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PinInputComponent />
    </NativeBaseProvider>
  );
}
```

## Size

```SnackPlayer name=PinInput%20Sizes
import React from 'react';
import { PinInput, PinInputField, Stack, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <Stack space={5}>
      <PinInput inputSize="2xl">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="xl">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="lg">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="md">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="sm">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="xsm">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PinInputComponent />
    </NativeBaseProvider>
  );
}
```

## Default Value

```SnackPlayer name=PinInput%20DefaultValue
import React from 'react';
import { PinInput, PinInputField, Stack, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <Stack space={5}>
      <PinInput defaultValue="123">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput defaultValue="45">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PinInputComponent />
    </NativeBaseProvider>
  );
}
```

## Placeholder

```SnackPlayer name=PinInput%20Placeholder
import React from 'react';
import { PinInput, PinInputField, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <PinInput placeholder="🥳">
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PinInputComponent />
    </NativeBaseProvider>
  );
}
```

## Manage Focus

```SnackPlayer name=PinInput%20Manage Focus
import React from 'react';
import { PinInput, PinInputField, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <PinInput manageFocus={false}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PinInputComponent />
    </NativeBaseProvider>
  );
}
```

## Variants

```SnackPlayer name=PinInput%20Variants
import React from 'react';
import { PinInput, PinInputField, Stack, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <Stack space={5}>
      <PinInput variant="outline">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput variant="underlined">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput variant="rounded">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput variant="filled">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput variant="unstyled">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PinInputComponent />
    </NativeBaseProvider>
  );
}
```

## Form Controlled

```SnackPlayer name=PinInput%20Form
import React from 'react';
import {
  PinInput,
  PinInputField,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NativeBaseProvider
} from 'native-base';

function PinInputComponent () {
  return (
    <Center>
      <FormControl isRequired isInvalid>
        <FormLabel>OTP</FormLabel>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <FormHelperText>
          An otp is send to number ending with +91-XXXXX-XX007.
        </FormHelperText>
        <FormErrorMessage>Please Retry.</FormErrorMessage>
      </FormControl>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PinInputComponent />
    </NativeBaseProvider>
  );
}
```

## **Props**

PinInput passes all the props to it's children (`PinInputField` only).

| Name         | Type        | Description                                                                                           | Default |
| ------------ | ----------- | ----------------------------------------------------------------------------------------------------- | ------- |
| manageFocus  | boolean     | The style variant of the badge.                                                                       | true    |
| defaultValue | string      | The default value of the pin input. Example '32'.                                                     | -       |
| value        | string      | The value of the the pin input. This is the value that will be returned when the pin input is filled. | -       |
| space        | MarginProps | The space between each stack item.                                                                    | -       |
| onChange     | function    | Function called on input change                                                                       | -       |

### **PinInputField**

PinInputField composes `Input` so you can pass all `Input` props.
