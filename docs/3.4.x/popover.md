---
id: popover
title: Popover
---

import { ComponentTheme } from '../src/components';

`Popover` floats around a trigger. It is a non-modal dialog used to provide contextual information to the user. It should be paired with a pressable trigger element.

```jsx isShowcase
import React from 'react';
import { Popover, Button, Box } from 'native-base';

export function Example() {
  return (
    <Box h="60%" w="100%" alignItems="center">
      <Popover
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps} shadow={2} colorScheme="danger">
              Delete Customer
            </Button>
          );
        }}
      >
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Delete Customer</Popover.Header>
          <Popover.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button colorScheme="danger">Delete</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>
  );
}
```

## Import

- `Popover`: The wrapper that provides props, state, and context to its children.
- `Popover.Arrow`: The popover arrow.
- `Popover.Body`: The body of the popover.
- `Popover.Content`: The popover itself.
- `Popover.CloseButton`: A button to close the popover.
- `Popover.Header`: The header of the popover.
- `Popover.Trigger`: Used to wrap the reference (or trigger) element.

```jsx
import { Popover } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Popover,Basic.tsx

```

### initialFocusRef

```ComponentSnackPlayer path=components,composites,Popover,RefEg.tsx

```

### Positions

```ComponentSnackPlayer path=components,composites,Popover,PopoverPositions.tsx

```

<br/>

:::tip

You can pass custom backgroundColor using `bg` or `backgroundColor`, `borderColor` and `borderWidth` to Popover.Content.

:::

## Props

```ComponentPropTable path=composites,Popover,Popover.tsx

```

### Popover.Arrow

`Popover.Arrow` composes the [`Box`](box) component.

### Popover.Content

`Popover.Content` composes the [`Box`](box) component.

### Popover.Header

`Popover.Header` composes the [`Box`](box) component.

### Popover.Footer

`Popover.Footer` composes the [`Box`](box) component.

### Popover.Body

`Popover.Body` composes the [`Box`](box) component.

### Popover.CloseButton 

`Popover.CloseButton` composes the [`Button`](button) component.

## Styling

<ComponentTheme name="popover" />

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/#dialog_modal)

### Keyboard Interactions

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| Space       | Opens/closes the popover.                              |
| Enter       | Opens/closes the popover.                              |
| Tab         | Moves focus to the next focusable element.             |
| Shift + Tab | Moves focus to the previous focusable element.         |
| Esc         | Closes the popover and moves focus to Popover.Trigger. |
