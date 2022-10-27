---
id: toast
title: Toast
---

import { ComponentTheme } from '../../src/components';

`Toast` is used to show alerts on top of an overlay. `Toast` will close itself when the close button is clicked on or after a timeout — the default is 5 seconds. The toast component is used to give feeback to users after an action has taken place.

Toasts can be configured to appear at either the top or the bottom of an application window, and it is possible to have more than one toast onscreen at a time.

## Import

```jsx
import { useToast } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=composites,Toast,Basic.tsx

```

### Position

```ComponentSnackPlayer path=composites,Toast,ToastPositions.tsx

```

### Custom component

Display a custom component instead of the default Toast UI.

```ComponentSnackPlayer path=composites,Toast,CustomComponent.tsx

```

### Closing Toasts

Toasts can be closed imperatively, individually (via the close instance method), or all together (via the closeAll instance method).

```ComponentSnackPlayer path=composites,Toast,CloseToast.tsx

```

### Status

You can use status to change the color of your toasts.
`Toast` uses the same variants as the [Alert](alert.md) component.

```ComponentSnackPlayer path=composites,Toast,ToastStatus.tsx

```

### Preventing Duplicate Toast

In some cases, you might need to prevent duplicates of specific toasts. To achieve this, you need to pass an id and use the toast.isActive method to determine when to call toast.show(...).

```ComponentSnackPlayer path=composites,Toast,PreventDuplicate.tsx

```

### Standalone Toast

You can use standalone toast where you don't have access to `useToast` hook, for example, in a different file, out of a React component.

```ComponentSnackPlayer path=composites,Toast,StandaloneToast.tsx

```

## Props

The following props can be passed while calling toast.show.

```ComponentPropTable path=composites,Toast,ToastDummy.tsx

```

## Accessibility

- On Android and Web, Toast renders under a View with accessibilityLiveRegion which announces the content rendered inside it to screen reader devices.
- On iOS, accessibilityLiveRegion is not supported yet, so we use the [accessibilityAnnouncement](https://reactnative.dev/docs/accessibilityinfo#announceforaccessibility) to announce the content.

## Styling

<ComponentTheme name="toast" />
