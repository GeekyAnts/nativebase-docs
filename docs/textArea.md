---
id: textArea
title: TextArea
---

The `Textarea` component allows you to easily create multi-line text inputs.

## Implements

- [`Input`](input.md)

## Examples

### Usage

```SnackPlayer name=TextArea%20Usage
import React from 'react';
import { TextArea, Heading, Center, Stack, NativeBaseProvider } from 'native-base';

function TextAreaComponent () {
  return (
    <Stack space={4} mx={8}>
      <Heading>Default</Heading>
      <TextArea h={24} placeholder="Type here" />
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextAreaComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Invalid and Disabled TextArea

```SnackPlayer name=TextArea%20Invalid and Disabled TextArea
import React from 'react';
import { TextArea, Heading, Center, Stack, NativeBaseProvider } from 'native-base';

function TextAreaComponent () {
  return (
    <Stack space={4} mx={8}>
      <Heading>Invalid</Heading>
      <TextArea placeholder="Type here" h={24} isInvalid />
      <Heading>Disabled</Heading>
      <TextArea placeholder="Type here" h={24} isDisabled />
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextAreaComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Value Controlled TextArea

```SnackPlayer name=TextArea%20Value Controlled TextArea
import React, { useState } from 'react';
import { TextArea, Heading, Center, Stack, NativeBaseProvider } from 'native-base';

function TextAreaComponent () {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <Stack space={4} mx={8}>
      <Heading>Value Controlled</Heading>
      <TextArea
        h={24}
        value={textAreaValue}
        onChange={demoValueControlledTextArea}
      />
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextAreaComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name       | Type   | Description                                     | Default |
| ---------- | ------ | ----------------------------------------------- | ------- |
| totalLines | number | maps to react-native TextInput's numberOfLines. | -       |

As `TextArea` composes [`Input`](input.md), all [`Input Props`](input.md#props) can be passed to it.
