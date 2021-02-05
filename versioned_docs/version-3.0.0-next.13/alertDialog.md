---
id: alertDialog
title: AlertDialog
---

AlertDialog component is used to interrupt the user with a mandatory confirmation or action.

`Heading` composes `Modal` so you can use all its props.

## Import

NativeBase exports 7 alert dialog related components.

- `AlertDialog`: provides context and state for the dialog.
- `AlertDialogHeader`: should contain the title announced by screen readers.
- `AlertDialogBody`: should contain the description announced by screen readers.
- `AlertDialogFooter`: should contain the actions of the dialog.
- `AlertDialogOverlay`: The dimmed overlay behind the dialog.
- `AlertDialogContent`: The wrapper for the alert dialog's content.
- `AlertDialogCloseButton`: The button that closes the dialog.

```jsx
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from 'native-base';
```

## Example

```SnackPlayer name=AlertDialog%20Example
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base";

function AlertDialogComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={"fade"}
      >
        <AlertDialogOverlay justifyContent="center">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onPress={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onPress={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Delete Customer
      </Button>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AlertDialogComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Transition)

```SnackPlayer name=AlertDialog%20ExampleTransition
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  Center,
  NativeBaseProvider,
} from "native-base";

function AlertDialogComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Center>
      <AlertDialog
        motionPreset="fade"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogCloseButton />
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onPress={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AlertDialogComponent />
    </NativeBaseProvider>
  );
}
```

## Props

AlertDialog and its components compose the Modal component. The only exception is that it requires a `leastDestructiveRef` which is similar to the `initialFocusRef` of Modal.

### AlertDialog

| Name                | Type      | Description                                                    | Default |
| ------------------- | --------- | -------------------------------------------------------------- | ------- |
| leastDestructiveRef | React.Ref | The least destructive action to get focus when dialog is open. | -       |
