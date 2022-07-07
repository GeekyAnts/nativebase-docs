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

```jsx isLive=true
import React from 'react';
import {
  Modal,
  Button,
  Center,
  Input,
  useDisclose,
  NativeBaseProvider,
} from 'native-base';

function UseDiscloseExample() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header fontSize="4xl" fontWeight="bold">
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
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
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
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
