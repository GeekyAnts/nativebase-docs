---
id: numberInput
title: NumberInput
---

The `NumberInput` component is similar to the `Input` component, but it has controls for incrementing or decrementing numeric values.

## Implements

- `Input` from native-base/Input

## Usage

```SnackPlayer name=NumberInput%20Usage
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider
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
      <NumberInputComponent />
    </NativeBaseProvider>
  );
}
```

## Default Value

```SnackPlayer name=NumberInput%20Default Value
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider
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
      <NumberInputComponent />
    </NativeBaseProvider>
  );
}
```

## Min Max

```SnackPlayer name=NumberInput%20Min Max
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider
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
      <NumberInputComponent />
    </NativeBaseProvider>
  );
}
```

## Steps

```SnackPlayer name=NumberInput%20Steps
import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider
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
      <NumberInputComponent />
    </NativeBaseProvider>
  );
}
```

## Form Controlled

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
  NativeBaseProvider
} from 'native-base';

function NumberInputComponent () {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>How many components we have</FormControl.Label>
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
      <NumberInputComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### **NumberInputField Props**

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

`NumberInput` composes `Input` so you can pass all `Input` props.

### **NumberInputStepper Props**

`NumberInputStepper` composes `VStack` so you can pass all `VStack` props.

### **NumberDecrementStepper and NumberIncrementStepper Props**

`NumberDecrementStepper` and `NumberIncrementStepper` composes the `Box` props so you can pass all `Box` props.

### NumberDecrementStepper and NumberIncrementStepper

| Name       | Type | Description                                 | Default |
| ---------- | ---- | ------------------------------------------- | ------- |
| \_disabled | any  | Pass custom style object for disabled state | -       |
| \_active   | any  | Pass custom style object for active state   | -       |
