---
id: popOver
title: PopOver
---

`Popover` is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element.

## Import

- `Popover`: The wrapper that provides props, state, and context to its children.
- `PopoverTrigger`: Used to wrap the reference (or trigger) element.
- `PopoverContent`: The popover itself.
- `PopoverHeader`: The header of the popover.
- `PopoverBody`: The body of the popover.
- `PopoverCloseButton`: A button to close the popover.

```jsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
} from "native-base";
```

## Usage

```SnackPlayer name=PopOver%20Usage
import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
  NativeBaseProvider
} from 'native-base';

function PopoverComponent () {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent width={250}>
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PopoverComponent />
    </NativeBaseProvider>
  );
}
```

## Size Example

```SnackPlayer name=PopOver%20Size
import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
  NativeBaseProvider
} from 'native-base';

function PopoverComponent () {
  return (
    <Popover size="lg">
      <PopoverTrigger>
        <Button>Trigger for size</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PopoverComponent />
    </NativeBaseProvider>
  );
}
```

## initialFocusRef and closeOnBlur Example

```SnackPlayer name=PopOver%20initialFocusRef and closeOnBlur
import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Button,
  Input,
  NativeBaseProvider
} from 'native-base';

function PopoverComponent () {
  const initialFocusRef = React.useRef();
  return (
    <Popover initialFocusRef={initialFocusRef} closeOnBlur={false}>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent width={250}>
        <PopoverCloseButton />
        <PopoverHeader fontSize={20} fontWeight={700}>
          Header
        </PopoverHeader>
        <PopoverBody>
          <Input
            mb={3}
            backgroundColor="white"
            ref={initialFocusRef}
            placeholder="I will get focused on Popover opening"
          />
          This Popover won't close on clicking outside the popover area.
        </PopoverBody>
        <PopoverFooter>This is the footer</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <PopoverComponent />
    </NativeBaseProvider>
  );
}
```

> You can pass custom backgroundColor using bg or backgroundColor, borderColor and borderWidth to Popover.

## Props

- `onOpen` : ( **Function** ) Callback fired when the popover opens.
- `onClose` : ( **Function** ) Callback fired when the popover closes.
- `initialFocusRef` : ( **React.Ref** ) The ref of the element that should receive focus when the popover opens.
- `finalFocusRef` : ( **React.Ref** ) The ref of the element that should receive focus when the popover closes.
- `closeOnBlur` : ( **boolean** ) If `true`, the popover will close when you blur out it by pressing outside.
- `id` : ( **string** ) The top-level id to use for the Popover and it's sub-components.
- `size` : ( **'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string | number** ) Size of the Popover component.
- `children`: ( **JSX.Element | JSX.Element[]** ) Children of Popover.
- `PopoverContent` composes `Box` and has the ability to smartly position itself.
- `PopoverHeader`, `PopoverFooter` and `PopoverBody` composes `Box`.
- `PopoverCloseButton` composes `CloseButton` component.

## Props

### PopOver

| Name            | Type                                     | Description                                                               | Default |
| --------------- | ---------------------------------------- | ------------------------------------------------------------------------- | ------- |
| onOpen          | function                                 | Callback fired when the popover opens.                                    | -       |
| onClose         | function                                 | Callback fired when the popover closes.                                   | -       |
| initialFocusRef | React.Ref                                | The ref of the element that should receive focus when the popover opens.  | -       |
| finalFocusRef   | React.Ref                                | The ref of the element that should receive focus when the popover closes. | -       |
| closeOnBlur     | boolean                                  | If true, the popover will close when you blur out it by pressing outside. | -       |
| id              | string                                   | If true, the popover will close when you blur out it by pressing outside. | -       |
| size            | full, lg, md, number, sm, string, xl, xs | Size of the Popover component.                                            | -       |
| Component       |                                          |                                                                           |         |
