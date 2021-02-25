---
id: code
title: Code
---

Code is a component used to display inline code. It is composed from the Box component with a mono font family for displaying code

## Import

```jsx
import { Code } from 'native-base';
```

## Example

```SnackPlayer name=Code%20Example
import React from 'react';
import { Code, NativeBaseProvider, Center } from 'native-base';
function CodeComponent () {
  return <Code colorScheme="success">Hello World!</Code>;
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CodeComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (Colors)

```SnackPlayer name=Code%20Example(Colors)
import React from 'react';
import { Code, Stack, NativeBaseProvider, Center } from 'native-base';
function CodeComponent () {
  return (
    <Stack space={4}>
      <Code>let direction = "row";</Code>
      <Code colorScheme="danger">console.log('Hey there!');</Code>
      <Code colorScheme="success">yarn add native-base</Code>
      <Code colorScheme="dark">React Native</Code>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CodeComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Code

`Code` implements `Box`.

| Name        | Type            | Description                                                                                                       | Default |
| ----------- | --------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| children    | React.ReactNode | The content of the code.                                                                                          | -       |
| colorScheme | string          | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | -       |
