---
id: action-sheet
title: ActionSheet
---

import { ComponentTheme } from '../../src/components';

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content.

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

```ComponentSnackPlayer path=composites,Actionsheet,Usage.tsx

```

### Composition

```ComponentSnackPlayer path=composites,Actionsheet,Composition.tsx

```

### DisableOverlay

```ComponentSnackPlayer path=composites,Actionsheet,DisableOverlay.tsx

```

### Icons

```ComponentSnackPlayer path=composites,Actionsheet,Icon.tsx

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
