---
id: actionSheet
title: ActionSheet
---

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content.

## Import

NativeBase exports 5 modal-related components:

- **Actionsheet**: Provides the context and state for all components.
- **ActionsheetContent**: Wrapper for the **ActionsheetHeader and ActionsheetItem** components.
- **ActionsheetHeader**: Provides a header to the list.
- **ActionsheetFooter**: A separated footer component for better customisation support. Wrapper for the **ActionsheetItem** components.
- **ActionsheetItem**: A button to wrap the options of the Actionsheet.

```jsx
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
} from "@native-base/v3";
```

## Usage

```SnackPlayer name=ActionSheet%20Usage
import React from "react";
import {
  Button,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
  NativeBaseProvider,
} from "native-base";
function ActionSheetComponent() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <ActionsheetItem>Option 2</ActionsheetItem>
          <ActionsheetItem>Option 3</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <ActionsheetItem onPress={onClose}>Cancel</ActionsheetItem>
        </ActionsheetFooter>
      </Actionsheet>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ActionSheetComponent />
    </NativeBaseProvider>
  );
}
```

## Composition

```SnackPlayer name=ActionSheet%20Composition
import React from "react";
import {
  Button,
  Divider,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
  NativeBaseProvider,
} from "native-base";

function ActionSheetComponent() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <Divider />
          <ActionsheetItem>Option 2</ActionsheetItem>
          <Divider />
          <ActionsheetItem>Option 3</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <ActionsheetItem onPress={onClose}>Cancel</ActionsheetItem>
        </ActionsheetFooter>
      </Actionsheet>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ActionSheetComponent />
    </NativeBaseProvider>
  );
}
```

## DisableOverlay

```SnackPlayer name=ActionSheet%20DisplayOverlay
import React from "react";
import {
  Button,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
  NativeBaseProvider,
} from "native-base";

function ActionSheetComponent() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <ActionsheetItem>Option 2</ActionsheetItem>
          <ActionsheetItem>Option 3</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <ActionsheetItem onPress={onClose}>Cancel</ActionsheetItem>
        </ActionsheetFooter>
      </Actionsheet>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ActionSheetComponent />
    </NativeBaseProvider>
  );
}
```

## Props

Implement `Box`, all props of Box can be passed.

| Name           | Type     | Description                          | Default |
|----------------|----------|--------------------------------------|---------|
| isOpen         | boolean  | If true, actionsheet will be open.   | -       |
| onClose        | function | Callback when actionsheet is closed. | -       |
| disableOverlay | boolean  | If true, disables the overlay.       | -       |
| Component      |          |                                      |         |

ActionsheetContent, ActionsheetHeader, ActionsheetFooter all implement `Box`, all props of Box can be passed.

ActionsheetItem implements `Button`, all props of Button can be passed here.

