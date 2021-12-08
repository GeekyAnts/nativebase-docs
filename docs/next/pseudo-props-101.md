---
id: pseudo-props-101
title: "Pseudo props: Do’s & Dont’s"
---

Before getting into details of all the common Pseudo Props NativeBase has to offer let's check some key points that these pseudo props follow.

## Nesting pseudo props:

In versions before 3.2.0 there was a set order in which pseudo props can be nested, but it had a some learning curve so we have simplified it. Pseudo props can now be nested in any combination with one small thing to keep in mind.

Example: So assume you want to change the text color of a button on its hover state.

### Do's

```jsx
<Button
  _hover={{
    _text: { color: "secondary.400" },
  }}
>
  Change My Color
</Button>
```

### Dont's

```jsx
<Button
  _text={{
    _hover: { color: "secondary.400" },
  }}
>
  Change My Color
</Button>
```

The above thing translates to a Text(not Button) when hovered changes its color to `secondary.400` .

## Precedence Order for Pseudo Props:

Now all the pseudo props follow a specific order that defines which pseudo prop can override the other pseudo prop. You can find the precedence values associated with each pseudo prop. Higher number means higher precedence.

| Pseudo Props   | Precedence Value |
| -------------- | ---------------- |
| \_disabled     | 100              |
| \_pressed      | 70               |
| \_hover        | 60               |
| \_focus        | 50               |
| \_focusVisible | 55               |
| \_readOnly     | 40               |
| \_invalid      | 40               |
| \_active       | 30               |
| \_checked      | 30               |
| \_web          | 10               |
| \_android      | 10               |
| \_ios          | 10               |
| \_light        | 10               |
| \_dark         | 10               |

```jsx isLive=true
import React from "react";
import { Button, NativeBaseProvider, Center } from "native-base";

function Component() {
  return (
    // Here you can see _hover will be overrided by _pressed
    <Button _hover={{ bg: "red.500" }} _pressed={{ bg: "green.500" }}>
      Press and Hover here
    </Button>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```
