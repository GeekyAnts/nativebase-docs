`ZStack` aligns items absolutely in the z-axis.

## Implements

- [`View`](view.md)

## Import

```jsx
import { ZStack } from 'native-base';
```

## Examples

```SnackPlayer name=ZStack%20Usage
import React from "react";
import { ZStack, Box, NativeBaseProvider, Center } from "native-base";

function ZStackComponent() {
  return (
    <ZStack alignItems="center">
      <Box size={20} bg="black" />
      <Box size={10} bg="red.200" />
    </ZStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ZStackComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

You can pass `alignItems="center"` `justifyContent="center"` to vertically and horizontally center the children.

```SnackPlayer name=ZStack%20Center
import React from "react";
import { ZStack, Box, Text, NativeBaseProvider, Center } from "native-base";

function ZStackComponent() {
  return (
      <ZStack alignItems="center" justifyContent="center">
        <Box size={24} bg="blue.500" />
        <Box size={16} bg="emerald.500" />
        <Box size={10} bg="indigo.300" />
        <Text>Not Inside</Text>
      </ZStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ZStackComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name     | Type    | Description                          | Default |
| -------- | ------- | ------------------------------------ | ------- |
| reversed | boolean | The direction to stack the elements. | -       |
