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
import { PinInput, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <PinInput inputSize="md" value="32" defaultValue="98">
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
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
import { PinInput, Stack, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <Stack space={5}>
      <PinInput inputSize="2xl">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput inputSize="xl">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput inputSize="lg">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput inputSize="md">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput inputSize="sm">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput inputSize="xsm">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
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
import { PinInput, Stack, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <Stack space={5}>
      <PinInput defaultValue="123">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput defaultValue="45">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
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
import { PinInput, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <PinInput placeholder="🥳">
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
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
import { PinInput, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <PinInput manageFocus={false}>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
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
import { PinInput, Stack, NativeBaseProvider } from 'native-base';

function PinInputComponent () {
  return (
    <Stack space={5}>
      <PinInput variant="outline">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="underlined">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="rounded">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="filled">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="unstyled">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
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
  Center,
  FormControl,
  NativeBaseProvider
} from 'native-base';

function PinInputComponent () {
  return (
    <Center>
      <FormControl isRequired isInvalid>
        <FormControl.Label>OTP</FormControl.Label>
        <PinInput>
          <PinInput.Field />
          <PinInput.Field />
          <PinInput.Field />
          <PinInput.Field />
        </PinInput>
        <FormControl.HelperText>
          An otp is send to number ending with +91-XXXXX-XX007.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Please Retry.</FormControl.ErrorMessage>
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

PinInput passes all the props to it's children (`PinInput.Field` only).

| Name         | Type        | Description                                                                                           | Default |
| ------------ | ----------- | ----------------------------------------------------------------------------------------------------- | ------- |
| manageFocus  | boolean     | The style variant of the badge.                                                                       | true    |
| defaultValue | string      | The default value of the pin input. Example '32'.                                                     | -       |
| value        | string      | The value of the the pin input. This is the value that will be returned when the pin input is filled. | -       |
| space        | MarginProps | The space between each stack item.                                                                    | -       |
| onChange     | function    | Function called on input change                                                                       | -       |

### **PinInput.Field**

PinInput.Field composes `Input` so you can pass all the `Input` props.
