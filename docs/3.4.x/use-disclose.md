---
id: use-disclosure
title: useDisclose
metaTitle: useDisclose | NativeBase
metaDescription: useDisclose in NativeBase handles common open, close, or toggle scenarios. It can be used to control feedback components. Know more here about useDisclose.
---

`useDisclose` handles common open, close, or toggle scenarios and can control feedback components such as **Modal**, **AlertDialog**, **Drawer**, etc.

## Import

```jsx
import { useDisclose } from "native-base";
```

## Example

```ComponentSnackPlayer path=hooks,useDisclose,Usage.tsx

```

## Return value

The `useDisclosure` hook returns an object with the following fields:

`isOpen`: ( **boolean** ) Show the component; triggers the enter or exit states.

`onClose`: ( **function** ) Callback function to set a falsy value for the `isOpen` parameter.

`onOpen`: ( **function** ) Callback function to set a truthy value for the `isOpen` parameter.

`onToggle`: ( **function** ) Callback function to toggle the value of the `isOpen` parameter.
