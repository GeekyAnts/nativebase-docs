---
id: use-disclosure
title: useDisclosure
---

`useDisclosure` is a custom hook used to help handle common `open`, `close`, or `toggle` scenarios. It can be used to control feedback component such as **Modal**, **AlertDialog**, **Drawer**, etc.

## Import

```jsx
import { useDisclose } from "native-base";
```

### Usage

```jsx
import React from "react";
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
} from "@native-base/v3";

export default function () {
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
```

## Return value

The `useDisclosure` hook returns an object with the following fields:

`isOpen`: ( **boolean** ) Show the component; triggers the enter or exit states.

`onClose`: ( **function** ) Callback function to set a falsy value for the `isOpen` parameter.

`onOpen`: ( **function** ) Callback function to set a truthy value for the `isOpen` parameter.

`onToggle`: ( **function** ) Callback function to toggle the value of the `isOpen` parameter.
