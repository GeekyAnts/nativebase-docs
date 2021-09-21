---
id: overlay
title: Overlay
---

`Overlay` is the fundamental component for positioning and controlling new components on top of existing ones.

## Import

```jsx
import { Overlay, useOverlay } from 'native-base';
```

## Examples

### Usage

```SnackPlayer name=Overlay%20Usage
import React from 'react';
import { Button, useOverlay, NativeBaseProvider, Center } from 'native-base';

function OverlayComponent () {
  const { closeOverlay, setOverlay } = useOverlay();
  return (
    <Button
      onPress={() =>
        setOverlay(
          <Button onPress={closeOverlay}>Press to close Overlay</Button>
        )
      }>
      Show Overlay
    </Button>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <OverlayComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Customised

```SnackPlayer name=Overlay%20Customized
import React from 'react';
import { Button, useOverlay, VStack, NativeBaseProvider, Center } from 'native-base';

function OverlayComponent () {
	const [disableOverlay, setDisableOverlay] = React.useState(false);
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlay(
            <Button onPress={closeOverlay}>Press to close Overlay</Button>,
            { disableOverlay, position: 'center', backgroundColor: '#5511ff44' }
          )
        }
      >
        Show Overlay
      </Button>
      <Button
        onPress={() => {
          setDisableOverlay(!disableOverlay);
        }}
      >
        {disableOverlay ? 'Enable ' : 'Disable '}Overlay
      </Button>
      <Button onPress={closeOverlay}>Hide Overlay</Button>
    </VStack>
	);
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <OverlayComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name                   | Type                      | Description                                       | Default |
| ---------------------- | ------------------------- | ------------------------------------------------- | ------- |
| disableOverlay         | boolean                   | If true, it disables the overlay.                 | false   |
| position               | `bottom`, `center`, `top` | Vertically position the component on the overlay. | -       |
| defaultBackgroundColor | string                    | Set background color of overlay.                  | -       |
| animationDuration      | number                    | Duration for fade animation of the overlay.       | -       |
