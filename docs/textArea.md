---
id: textArea
title: TextArea
---

The `Textarea` component allows you to easily create multi-line text inputs.

## Implements

- `Input` from nativebase

## Usage

```SnackPlayer name=TextArea%20Usage
import React from 'react';
import { TextArea, Heading, Center, Text, Stack, NativeBaseProvider } from 'native-base';

function TextAreaComponent () {
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>Default TextArea</Text>
      </Center>
      <TextArea w="90%" h="100" placeholder="Text Area Placeholder" />
    </Stack>
  );
}
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

## Invalid and Disabled TextArea

```SnackPlayer name=TextArea%20Invalid and Disabled TextArea
import React from 'react';
import { TextArea, Heading, Center, Text, Stack, NativeBaseProvider } from 'native-base';

function TextAreaComponent () {
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>Invalid TextArea</Text>
      </Center>
      <TextArea placeholder="Invalid TextArea" w="90%" isInvalid />
      <Center>
        <Text>Disabled TextArea</Text>
      </Center>
      <TextArea placeholder="Disabled TextArea" w="90%" isDisabled />
    </Stack>
  );
}
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

## TextArea Sizes

```SnackPlayer name=TextArea%20TextArea Sizes
import React from 'react';
import { TextArea, Heading, Center, Text, Stack, NativeBaseProvider } from 'native-base';

function TextAreaComponent () {
  const Sizes: any = ['xsm', 'sm', 'md', 'lg', 'xl', '2xl'];
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>TextArea with different font sizes</Text>
      </Center>
      {Sizes.map((value: string) => {
        return <TextArea w="90%" inputSize={value} placeholder={value} />;
      })}
    </Stack>
  );
}
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

## Value Controlled TextArea

```SnackPlayer name=TextArea%20Value Controlled TextArea
import React, { useState } from 'react';
import { TextArea, Heading, Center, Text, Stack, NativeBaseProvider } from 'native-base';

function TextAreaComponent () {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>Value Controlled TextArea</Text>
      </Center>
      <TextArea
        w="90%"
        value={textAreaValue}
        onChange={demoValueControlledTextArea}
      />
    </Stack>
  );
}
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

### TextArea

| Name       | Type   | Description                                     | Default |
| ---------- | ------ | ----------------------------------------------- | ------- |
| totalLines | number | maps to react-native TextInput's numberOfLines. | -       |

As `TextArea` extends `Input`, all Input Props can be passed to TextArea.
