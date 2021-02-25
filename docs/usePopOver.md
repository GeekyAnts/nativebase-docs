---
id: use-popOver
title: usePopover
---

`usePopover` is a custom hook which helps in mounting any children component in a popover at a position relative to the parent.

## Import

```jsx
import { usePopover } from 'native-base';
```

### Usage

```SnackPlayer name=usePopover%20Usage
import React from "react";
import { Button, usePopover, Box, NativeBaseProvider, Center } from "native-base";

function UsePopoverExample() {
  const { setPopover } = usePopover();
  let buttonRef = React.useRef(null);
  return (
    <Button
      position="absolute"
      colorScheme="teal"
      height={10}
      width={150}
      ref={buttonRef}
      onPress={() =>
        setPopover(<Box height={200} width={200} bg="lime.300" />, {
          triggerRef: buttonRef,
          animationDuration: 500,
          placeOverTriggerElement: false,
        })
      }
    >
      Show Overlay
    </Button>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UsePopoverExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Return value

The `usePopover` hook returns an object with the following fields:

`closePopover` : ( function ) Callback function to close the popover.

`setPopover`: ( **function** ) Callback function to set the children of the popover.

`parentComponentConfig`: ( Object ) Object that contains the configurations passed from parent prop to be available to children in popover

## Configurations for setPopover

`triggerRef`: ref of the parent element of the popover

`animationDuration`: Time in ms for the popover to open and close

`placeOverTriggerElement`: (boolean) Whether to place the popover element over parent of not

`onClose`: (function) Callback for closing the popover

`parentComponentConfig`: (object) The config which can be passed from parent to children
