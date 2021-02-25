---
id: alertDialog
title: AlertDialog
---

AlertDialog component is used to interrupt the user with a mandatory confirmation or action. AlertDialog composes `Modal` so you can use all its props.

## Import

- `AlertDialog`: provides context and state for the dialog.
- `AlertDialog.Header`: contains the title announced by screen readers.
- `AlertDialog.Body`: contains the description announced by screen readers.
- `AlertDialog.Footer`: contains the actions of the dialog.
- `AlertDialog.Overlay`: The dimmed overlay behind the dialog.
- `AlertDialog.Content`: The wrapper for the alert dialog's content.
- `AlertDialog.CloseButton`: The button that closes the dialog.

```jsx
import { AlertDialog } from 'native-base';
```

## Basic

```SnackPlayer name=AlertDialog%20Basic
import React from "react";
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";


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
        <AlertDialog.Overlay justifyContent="center">
          <AlertDialog.Content>
            <AlertDialog.Header fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialog.Header>
            <AlertDialog.Body>
              Are you sure? You can't undo this action afterwards.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button ref={cancelRef} onPress={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onPress={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
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
      <Center flex={1}>
        <AlertDialogComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Transition

```SnackPlayer name=AlertDialog%20Transition
import React from "react";
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";

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
        <AlertDialog.Overlay />

        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Discard Changes?</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button ref={cancelRef} onPress={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AlertDialogComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

AlertDialog and its components compose the Modal component. The only exception is that it requires `leastDestructiveRef` which is similar to `initialFocusRef` of Modal.

### AlertDialog

| Name                | Type      | Description                                                    | Default |
| ------------------- | --------- | -------------------------------------------------------------- | ------- |
| leastDestructiveRef | React.Ref | The least destructive action to get focus when dialog is open. | -       |
