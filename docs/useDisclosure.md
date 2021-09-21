---
id: use-disclosure
title: useDisclose
---

`useDisclose` is a custom hook used to help handle common `open`, `close`, or `toggle` scenarios. It can be used to control feedback component such as **Modal**, **AlertDialog**, **Drawer**, etc.

## Import

```jsx
import { useDisclose } from 'native-base';
```

## Example

```SnackPlayer name=useDisclose%20Usage
import React from "react";
import {
  Modal,
  Button,
  Center,
  Input,
  useDisclose,
  NativeBaseProvider,
} from "native-base";

function UseDiscloseExample() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header fontSize="4xl" fontWeight="bold">
            Delete Customer
          </Modal.Header>
          <Modal.Body>
           This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered.
            <Input mt="4" placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr="1">
              Save
            </Button>
            <Button onPress={onClose}>Close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={onOpen}>Open Modal</Button>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <UseDiscloseExample />
      </Center>
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
