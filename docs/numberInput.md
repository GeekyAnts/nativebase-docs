---
id: numberInput
title: NumberInput
---

The `NumberInput` component is similar to the [`Input`](input.md) component, but it has controls for incrementing or decrementing numeric values.

## Implements

- [`Input`](input.md)

## Examples

## Basic

```SnackPlayer name=NumberInput%20Usage
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider,
  Center
} from 'native-base';

function NumberInputComponent () {
  return (
    <NumberInput>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NumberInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Default Value

```SnackPlayer name=NumberInput%20Default Value
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider,
  Center
} from 'native-base';
function NumberInputComponent () {
  return (
    <NumberInput defaultValue="5">
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NumberInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Min Max

```SnackPlayer name=NumberInput%20Min Max
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider,
  Center
} from 'native-base';
function NumberInputComponent () {
  return (
    <NumberInput defaultValue="10" min={5} max={20}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NumberInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Steps

```SnackPlayer name=NumberInput%20Steps
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider,
  Center
} from 'native-base';
function NumberInputComponent () {
  return (
    <NumberInput defaultValue="10" min={5} max={20} step={2}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NumberInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Form Controlled

```SnackPlayer name=NumberInput%20Form Controlled
import React from 'react';
import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  NativeBaseProvider,
  Center
} from 'native-base';

function NumberInputComponent () {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Number of components?</FormControl.Label>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormControl.HelperText>You can make a guess.</FormControl.HelperText>
        <FormControl.ErrorMessage>Don't worry, it's just an example.</FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NumberInputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### NumberInputField

| Name               | Type     | Description                                                                                                    | Default |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| value              | number   | The value of the input for controlled usage. Should be less than max and greater than min.                     | -       |
| defaultValue       | number   | The initial value of the input. Should be less than max and greater than min.                                  | -       |
| onChange           | function | The callback fired when the value changes.                                                                     |         |
| min                | number   | The minimum value of the input.                                                                                |         |
| max                | number   | The maximum value of the input.                                                                                |         |
| step               | number   | The step used to increment or decrement the value.                                                             |         |
| isDisabled         | boolean  | If true, the input will be disabled.                                                                           |         |
| keepWithinRange    | boolean  | If true and you use the stepper or up/down arrow keys, the value will not exceed the max or go lower than min. |         |
| focusInputOnChange | boolean  | If true, the input will be focused as you increment or decrement the value with the stepper.                   |         |

`NumberInput` composes [`Input`](input.md) so you can pass all the [`Input props`](input.md#props).

### NumberInputStepper

`NumberInputStepper` composes [`VStack`](VStack.md) so you can pass all the [`VStack props`](VStack.md#props).

### NumberDecrementStepper and NumberIncrementStepper

`NumberDecrementStepper` and `NumberIncrementStepper` composes the [`Box`](box.md) props so you can pass all the [`Box props`](box.md#props).

### NumberDecrementStepper and NumberIncrementStepper

| Name       | Type       | Description                                 | Default |
| ---------- | ---------- | ------------------------------------------- | ------- |
| \_disabled | StyleProps | Pass custom style object for disabled state | -       |
| \_active   | StyleProps | Pass custom style object for active state   | -       |
