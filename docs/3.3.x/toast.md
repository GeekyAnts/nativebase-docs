---
id: toast
title: Toast
---

import { ComponentTheme } from '../src/components';

`Toast` displays alerts on top of an overlay. The `Toast` terminates itself when the close button is clicked on or after a preset timeout — the default is 5 seconds. The component also allows users to give feedback when an action is completed.

Toasts can also be configured to pop up at different areas of the application window—top or bottom. More than one instance of toast can be present onscreen at one time.

```jsx isShowcase
import React from 'react';
import { Button, useToast } from 'native-base';

export const Example = () => {
  const toast = useToast();

  return (
    <Button
      shadow={2}
      onPress={() =>
        toast.show({
          description: 'Hello world',
        })
      }
    >
      Bottom
    </Button>
  );
};
```

## Import

```jsx
import { useToast } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Toast,Basic.tsx

```

### Position

```ComponentSnackPlayer path=components,composites,Toast,ToastPositions.tsx

```

### Custom component

Display a custom component instead of the default Toast UI.

```ComponentSnackPlayer path=components,composites,Toast,CustomComponent.tsx

```

### Closing Toasts

Toasts can be closed imperatively, individually (via the close instance method), or all together (via the closeAll instance method).

```ComponentSnackPlayer path=components,composites,Toast,CloseToast.tsx

```

### Status

You can use status to change the color of your toasts.
`Toast` uses the same variants as the [Alert](alert.md) component.

```ComponentSnackPlayer path=components,composites,Toast,ToastStatus.tsx

```

### Preventing Duplicate Toast

In some cases, you might need to prevent duplicates of specific toasts. To achieve this, you need to pass an id and use the toast.isActive method to determine when to call toast.show(...).

```ComponentSnackPlayer path=components,composites,Toast,PreventDuplicate.tsx

```

### Standalone Toast

You can use standalone toast where you don't have access to `useToast` hook, for example, in a different file, out of a React component.

```ComponentSnackPlayer path=components,composites,Toast,StandaloneToast.tsx

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
