---
id: pinInput
title: PinInput
---

The `PinInput` component is similar to the [`Input`](input.md) component, but it is optimized for entering sequences of digits.

## Implements

- [`Input`](input.md)

## Examples

### Usage

```SnackPlayer name=PinInput%20Usage
import React from 'react';
import { PinInput, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <PinInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Size

```SnackPlayer name=PinInput%20Sizes
import React from 'react';
import { PinInput, Stack, NativeBaseProvider, Center } from 'native-base';

function PinInputComponent () {
  return (
    <Stack space={5}>
      <PinInput size="2xl">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="xl">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="lg">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="md">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="sm">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="xs">
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
      <Center flex={1}>
        <PinInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Default Value

```SnackPlayer name=PinInput%20DefaultValue
import React from 'react';
import { PinInput, Stack, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <PinInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Placeholder

```SnackPlayer name=PinInput%20Placeholder
import React from 'react';
import { PinInput, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <PinInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Manage Focus

```SnackPlayer name=PinInput%20Manage Focus
import React from 'react';
import { PinInput, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <PinInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Variants

```SnackPlayer name=PinInput%20Variants
import React from 'react';
import { PinInput, Stack, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <PinInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Form Controlled

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
          OTP will be sent to the number.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Please Retry.</FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <PinInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## **Props**

### PinInput

PinInput passes all the props to its children (`PinInput.Field`) only.

| Name         | Type                                                  | Description                                                                                           | Default |
| ------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| manageFocus  | boolean                                               | The style variant of the badge.                                                                       | true    |
| defaultValue | string                                                | The default value of the pin input. Example '32'.                                                     | -       |
| value        | string                                                | The value of the the pin input. This is the value that will be returned when the pin input is filled. | -       |
| space        | [`MarginProps`](https://styled-system.com/api/#space) | The space between each stack item.                                                                    | -       |
| onChange     | function                                              | Function called on input change                                                                       | -       |

### PinInput.Field

PinInput.Field composes [`Input`](input.md) so you can pass all the [`Input props`](input.md#props).
