---
id: alert-dialog
title: AlertDialog
---

import { ComponentTheme } from '../../src/components';

`AlertDialog` component is used to interrupt the user with a mandatory confirmation or action. AlertDialog composes [`Modal`](/modal) so you can use all its props.

## Import

- `AlertDialog`: provides context and state for the dialog.
- `AlertDialog.Header`: contains the title announced by screen readers.
- `AlertDialog.Body`: contains the description announced by screen readers.
- `AlertDialog.Footer`: contains the actions of the dialog.
- `AlertDialog.Content`: The wrapper for the alert dialog's content.
- `AlertDialog.CloseButton`: The button that closes the dialog.

```jsx
import { AlertDialog } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,AlertDialog,Basic.tsx

```

## Styling

<ComponentTheme name="alertDialog" />

## Props

AlertDialog and its components compose the **[Modal](/modal)** component, so all the [`Modal props`](/modal#props) can be passed to it. The only exception is that it requires `leastDestructiveRef` which is similar to `initialFocusRef` of `Modal`.

| Name                | Type      | Description                                                    | Default |
| ------------------- | --------- | -------------------------------------------------------------- | ------- |
| leastDestructiveRef | React.Ref | The least destructive action to get focus when dialog is open. | -       |

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern.](https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog)

### Keyboard Interactions

| Name        | Description                                               |
| ----------- | --------------------------------------------------------- |
| Space       | Opens/closes the dialog.                                  |
| Enter       | Opens/closes the dialog.                                  |
| Tab         | Moves focus to the next focusable element.                |
| Shift + Tab | Moves focus to the previous focusable element.            |
| Esc         | Closes the dialog and moves focus to AlertDialog.Trigger. |
