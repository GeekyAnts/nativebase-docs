---
id: actionSheet
title: ActionSheet
---

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content.

## Import

NativeBase exports 5 modal-related components:

- **Actionsheet**: Provides the context and state for all components.
- **Actionsheet.Content**: Wrapper for the **Actionsheet.Header and Actionsheet.Item** components.
- **Actionsheet.Header**: Provides a header to the list.
- **Actionsheet.Footer**: A separated footer component for better customisation support. Wrapper for the **Actionsheet.Item** components.
- **Actionsheet.Item**: A button to wrap the options of the Actionsheet.

```jsx
import { Actionsheet } from 'native-base';
```

## Examples

### Usage

```SnackPlayer name=ActionSheet%20Usage
import React from "react";
import { Button, Actionsheet, useDisclose, NativeBaseProvider, Center } from "native-base";
function ActionSheetComponent() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>Header</Actionsheet.Header>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Actionsheet.Item>Option 3</Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer>
          <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
        </Actionsheet.Footer>
      </Actionsheet>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ActionSheetComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Composition

```SnackPlayer name=ActionSheet%20Composition
import React from "react";
import { Button, Divider, Actionsheet, useDisclose, NativeBaseProvider, Center } from "native-base";

function ActionSheetComponent() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>Header</Actionsheet.Header>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Divider />
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Divider />
          <Actionsheet.Item>Option 3</Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer>
          <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
        </Actionsheet.Footer>
      </Actionsheet>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ActionSheetComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### DisableOverlay

```SnackPlayer name=ActionSheet%20DisplayOverlay
import React from "react";
import { Button, Actionsheet, useDisclose, NativeBaseProvider, Center } from "native-base";

function ActionSheetComponent() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
        <Actionsheet.Content>
          <Actionsheet.Header>Header</Actionsheet.Header>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Actionsheet.Item>Option 3</Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer>
          <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
        </Actionsheet.Footer>
      </Actionsheet>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ActionSheetComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name           | Type     | Description                          | Default |
| -------------- | -------- | ------------------------------------ | ------- |
| isOpen         | boolean  | If true, actionsheet will be open.   | -       |
| onClose        | function | Callback when actionsheet is closed. | -       |
| disableOverlay | boolean  | If true, disables the overlay.       | -       |

`ActionSheet`, `Actionsheet.Content`, `Actionsheet.Header`, `Actionsheet.Footer` implement **[Box](box.md)**. All the props of Box can be passed to them.

Actionsheet.Item implements [`Button`](button.md), all the props of `Button` can be passed here.
