---
id: link
title: Link
---

`Links` are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink.

## **Import**

```jsx
import { Link } from 'native-base';
```

## Implements

- `View`, `Linking`, `TouchableWithoutFeedback` from [`React Native`](https://reactnative.dev)

## Examples

### Basic

```SnackPlayer name=Link%20Basic
import React from "react";
import {
  Heading,
  Link,
  View,
  Text,
  Box,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  return (
    <View>
      <Heading>This is default Link</Heading>
      <Link mt={4} fontSize="xl">
        Default Link
      </Link>
    </View>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <LinkComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### External Link

```SnackPlayer name=Link%20External link
import React from "react";
import {
  Heading,
  Link,
  View,
  Text,
  Box,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  return (
    <View>
      <Heading>External Link</Heading>
      <Link href="https://nativebase.io" isExternal mt={4}>
        https://nativebase.io
      </Link>
    </View>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <LinkComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Link without Underline

```SnackPlayer name=Link%20Link without Underline
import React from "react";
import {
  Heading,
  Link,
  View,
  Text,
  Box,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  return (
    <View>
      <Heading>Link without underline</Heading>
      <Link isUnderlined={false} mt={4}>
        www.google.com
      </Link>
    </View>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <LinkComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Link custom OnClick

```SnackPlayer name=Link%20Link custom OnClick
import React from "react";
import {
  Heading,
  Link,
  View,
  Text,
  Box,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  const [state, setState] = React.useState(false);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <View>
      <Heading>Custom onClick Functionality</Heading>
      <Link onClick={toggleState} mt={4}>
        Click here to toggle the color of box.
      </Link>
      <Box h="100" w="100" bg={state ? "orange.300" : "blue.300"} />
    </View>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <LinkComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Link around containers

```SnackPlayer name=Link%20Link around containers
import React from "react";
import {
  Heading,
  Link,
  View,
  Text,
  Box,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  return (
    <View>
      <Heading>Composite Link Example</Heading>
      <Link href="https://nativebase.io" isExternal mt={4}>
        <Box my={3} p={8} bg="seagreen">
          <Text color="white" fontSize={16}>
            Box
          </Text>
        </Box>
        <Text style={{ color: "gray" }}>
          Clicking anywhere will trigger the link
        </Text>
        <Box my={3} p={8} bg="blue.300">
          <Text color="white" fontSize={16}>
            Box
          </Text>
        </Box>
      </Link>
    </View>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <LinkComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

Link implements **[Box](box.md)**, so all the Box Props can be passed to it.

| Name       | Type     | Description                               | Default |
| ---------- | -------- | ----------------------------------------- | ------- |
| isExternal | boolean  | If true, the link will open in a browser. | -       |
| onClick    | function | Function called when the link is clicked. | -       |
