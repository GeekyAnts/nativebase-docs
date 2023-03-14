---
id: modal
title: Modal
---

import { ComponentTheme } from '../../src/components';

A Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is **inert**, meaning that users cannot interact with it.

## Import

NativeBase exports a Modal Compound component:

- `Modal`: The wrapper that provides context for its children.
- `Modal.Content`: The container for the modal dialog's content.
- `Modal.Header`: The header that labels the modal dialog.
- `Modal.Footer`: The footer that houses the modal actions.
- `Modal.Body`: The wrapper that houses the modal's main content.
- `Modal.CloseButton`: The button that closes the modal.

```jsx
import { Modal } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=composites,Modal,Basic.tsx

```

### Modal Sizes

You can pass `size` prop to NativeBase Modal , it can take `sm`, `md`, `lg`, `full` that maps to **60%**, **75%**, **90%**, **100%**, or a string or a numerical width of the Modal.

```ComponentSnackPlayer path=composites,Modal,Size.tsx

```

### intialFocusRef and finalFocusRef Example

```ComponentSnackPlayer path=composites,Modal,ModalRefEg.tsx

```

### Modal with avoidKeyboard

```ComponentSnackPlayer path=composites,Modal,ModalWithAvoidKeyboard.tsx

```

### Modal Placement

```ComponentSnackPlayer path=composites,Modal,ModalPlacement.tsx

```

<br/>

:::tip

If you want a specifically aligned Modal, pass `justifyContent` and `alignItems` to Modal.

:::

## Accessibility

Uses React Native ARIA [@react-native-aria/focus](https://react-native-aria.geekyants.com/docs/FocusScope) which follows the [Dialog Modal WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/#dialog_modal).

### Keyboard Interactions

| Key             | Description                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Tab`           | Moves focus to the next tabbable element inside the dialog. If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.     |
| `Shift` + `Tab` | Moves focus to the previous tabbable element inside the dialog. If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog. |
| `Escape`        | Closes the dialog                                                                                                                                                                        |

## Props

### Modal

```ComponentPropTable path=composites,Modal,Modal.tsx

```

### Children components

- `Modal.Header`, `Modal.Footer` and `Modal.Body` composes the [`Box`](box.md) component.
- `Modal.CloseButton` composes the [`Button`](button).

## Styling

<ComponentTheme name="modal" />
