---
id: alert-dialog
title: AlertDialog
---

import { ComponentTheme } from '../../src/components';

`AlertDialog` component is used to interrupt the user with a mandatory confirmation or action. AlertDialog composes [`Modal`](/modal) so you can use all its props.

## Import

- `AlertDialog`: Provides context and state for the dialog.
- `AlertDialog.Header`: Contains the title announced by screen readers.
- `AlertDialog.Body`: Contains the description announced by screen readers.
- `AlertDialog.Footer`: Contains the actions of the dialog.
- `AlertDialog.Content`: The wrapper for the alert dialog's content.
- `AlertDialog.CloseButton`: The button that closes the dialog.

```jsx
import { AlertDialog } from "native-base";
```

## Examples

### Basic

```jsx isLive=true
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
      </AlertDialog>
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Delete Customer
      </Button>
    </Center>
  );
}
export function Example() {
  return (
    <Center flex={1}>
      <AlertDialogComponent />
    </Center>
  );
}
```

### Transition

```jsx isLive=true
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
export function Example() {
  return (
    <Center flex={1}>
      <AlertDialogComponent />
    </Center>
  );
}
```

## Styling

<ComponentTheme name="alertDialog" />

## Props

AlertDialog and its components compose the **[Modal](/modal)** component, so all the [`Modal props`](/modal#h2-props) can be passed to it. The only exception is that it requires `leastDestructiveRef` which is similar to `initialFocusRef` of `Modal`.

| Name                | Type      | Description                                                    | Default |
| ------------------- | --------- | -------------------------------------------------------------- | ------- |
| leastDestructiveRef | React.Ref | The least destructive action to get focus when dialog is open. | -       |

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/#alertdialog)

### Keyboard Interactions

| Name        | Description                                               |
| ----------- | --------------------------------------------------------- |
| Space       | Opens/closes the dialog.                                  |
| Enter       | Opens/closes the dialog.                                  |
| Tab         | Moves focus to the next focusable element.                |
| Shift + Tab | Moves focus to the previous focusable element.            |
| Esc         | Closes the dialog and moves focus to AlertDialog.Trigger. |
