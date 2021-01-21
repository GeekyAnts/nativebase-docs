---
id: hook
title: Hook
---

### useTheme

`useTheme` is a custom hook used to get the theme object from context.

## Import

```jsx
import { useTheme } from "native-base";
```

## Example

```jsx
function Example() {
  const theme = useTheme();

  return <Box>{/* Do something with the theme */}</Box>;
}
```

### useToken

`useToken` is a custom hook used to resolve design tokens from the theme.

## Import

```jsx
import { useToken } from "native-base";
```

## Example

```jsx
function Example() {
  const [warning1, red2] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.warning.1`
    ["warning.1", "red.2"]
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <Box bg={warning1}>
      <Text color={red2}>wonderful gradients</Text>
    </Box>
  );
}
```

## useDisclose

`useDisclosure` is a custom hook used to help handle common `open`, `close`, or `toggle` scenarios. It can be used to control feedback component such as **Modal**, **AlertDialog**, **Drawer**, etc.

## Import

```jsx
import { useDisclose } from "native-base";
```

### Usage

```SnackPlayer name=Hook%20Usage
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Center,
  Input,
  useDisclose,
  NativeBaseProvider
} from "native-base";

function UseDiscloseExample() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontSize="4xl" fontWeight="bold">
            Hello World
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button onPress={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button onPress={onOpen}>Open Modal</Button>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <UseDiscloseExample />
    </NativeBaseProvider>
  );
}
```

## Return value

The `useDisclosure` hook returns an object with the following fields:

`isOpen`: ( **boolean** ) Show the component; triggers the enter or exit states.

`onClose`: ( **function** ) Callback function to set a falsy value for the `isOpen` parameter.

`onOpen`: ( **function** ) Callback function to set a truthy value for the `isOpen` parameter.

`onToggle`: ( **function** ) Callback function to toggle the value of the `isOpen` parameter.
