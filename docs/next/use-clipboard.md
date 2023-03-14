---
id: use-clipboard
title: useClipboard
---

`useClipboard` controls and regulates the copying of content to the clipboard.

## Return Value

The `useClipboard` hook returns an object with the following fields:

- `value` : ( **string** ) The copied value.
- `onCopy` : ( **Function** ) Callback function to copy content.
- `hasCopied` : ( **boolean** ) If **true**, the content has been copied.

## Import

```jsx
import { useClipboard } from 'native-base';
```

## Usage

```ComponentSnackPlayer path=hooks,useClipboard,Usage.tsx

```
