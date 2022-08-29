---
id: action-sheet
title: ActionSheet
---

import { ComponentTheme } from '../src/components';

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content.

```jsx isShowcase
import React from "react";
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen} shadow={2}>
        Actionsheet
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
```

## Import

NativeBase exports 3 modal-related components:

- **Actionsheet**: Provides the context and state for all components.
- **Actionsheet.Content**: Component to wrap the list of **Actionsheet.Item** components.
- **Actionsheet.Item**: A button to wrap the options of the Actionsheet.

```jsx
import { Actionsheet } from "native-base";
```

## Examples

### Usage

```ComponentSnackPlayer path=components,composites,Actionsheet,Usage.tsx

```

### Composition

```ComponentSnackPlayer path=components,composites,Actionsheet,Composition.tsx

```

### DisableOverlay

```ComponentSnackPlayer path=components,composites,Actionsheet,DisableOverlay.tsx

```

### Icons

```ComponentSnackPlayer path=components,composites,Actionsheet,Icon.tsx

```

## Props

### Actionsheet

```ComponentPropTable path=composites,Actionsheet,Actionsheet.tsx

```

### Actionsheet.Content

```ComponentPropTable path=composites,Actionsheet,ActionsheetContent.tsx

```

### Actionsheet.Item

ActionsheetItem implements [Button](button#h2-props)

## Styling

<ComponentTheme name="actionsheet" />

## Accessibility

- ActionSheet has `aria-modal` set to true.
- ActionSheet has `role` set to `dialog`.
- When the ActionSheet opens, focus is trapped within it.
- Pressing Esc closes the ActionSheet.
- When the ActionSheet opens, focus is automatically set to the first enabled element.
- Clicking on the overlay closes the ActionSheet.
- Scrolling is blocked on the elements behind the ActionSheet.
