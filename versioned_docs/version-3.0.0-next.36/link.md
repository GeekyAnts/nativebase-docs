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

- `View`, `Linking`, `TouchableWithoutFeedback` from [`React Native`](https://reactnative.dev).

## Examples

### Basic

```SnackPlayer name=Link%20Basic
import React from "react";
import { Link, NativeBaseProvider, Center } from 'native-base';

function LinkComponent() {
  return (
    <Link>
      Default Link
    </Link>
  );
}

// Example template which wraps component with NativeBaseProvider
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
  Text,
  Box,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  return (
      <Link href="https://nativebase.io" isExternal>
        https://nativebase.io
      </Link>
  );
}

// Example template which wraps component with NativeBaseProvider
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
  Text,
  Box,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  return (
      <Link href="https://nativebase.io" isExternal isUnderlined={false}>
        https://nativebase.io
      </Link>
  );
}

// Example template which wraps component with NativeBaseProvider
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
    <>
      <Link onClick={toggleState}>
        Click here to toggle the color of box.
      </Link>
      <Box mt={4} size={16} bg={state ? "orange.300" : "blue.300"} rounded="lg"/>
    </>
  );
}

// Example template which wraps component with NativeBaseProvider
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
  Text,
  NativeBaseProvider,
  Center
} from "native-base";

function LinkComponent() {
  return (
      <Link href="https://nativebase.io" isExternal>
        <Center bg="emerald.400" size={20} rounded="lg" _text={{color: "white"}}>
            Click here
        </Center>
      </Link>
  );
}

// Example template which wraps component with NativeBaseProvider
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
