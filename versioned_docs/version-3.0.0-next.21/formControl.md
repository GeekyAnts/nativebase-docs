---
id: formControl
title: Form Control
---

`FormControl` provides context such as `isInvalid`, `isDisabled`, and `isRequired` to form elements.

## Implements

- `Context` from react

## Example

```SnackPlayer name=FormControl%20Example
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  NativeBaseProvider
} from 'native-base';

function FormControlComponent () {
  return (
    <FormControl isRequired isInvalid>
      <FormLabel>Favorite framework</FormLabel>
      <Input p={2} placeholder="Is it react?" />
      <FormHelperText>We'll keep this between us.</FormHelperText>
      <FormErrorMessage>Something is wrong.</FormErrorMessage>
    </FormControl>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormControlComponent />
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
