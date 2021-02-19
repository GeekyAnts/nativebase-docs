---
id: FAB
title: FAB
---

A floating action button is a circular icon button that hovers over content to promote a primary action in the application.

## Implements

- `IconButton` from `native-base`.

## Import

```jsx
import { Fab } from 'native-base';
```

## Example

```SnackPlayer name=FAB%20Example
import React from 'react';
import { Fab, Icon, NativeBaseProvider } from 'native-base';

function FabComponent() {
  return (
    <Fab
      placement={'bottomRight'}
      bg="teal.200"
      icon={<Icon name="plus" type="AntDesign" />}
    />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FabComponent />
    </NativeBaseProvider>
  );
}
```

## Custom Position

```SnackPlayer name=FAB%20Custom Position
import { Fab, Icon, Text, NativeBaseProvider } from 'native-base';
import React from 'react';

function FabComponent () {
  return (
      <Fab
        bg="teal.200"
        position="absolute"
        bottom={4}
        right={24}
        icon={<Icon name="plus" type="AntDesign" />}
        label={<Text fontSize="sm">Click</Text>}
      />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FabComponent />
    </NativeBaseProvider>
  );
}
```

## Extra props

Takes `IconButtonProps`

## Props

### FAB

| Name      | Type   | Description                                                                                  | Default |
| --------- | ------ | -------------------------------------------------------------------------------------------- | ------- |
| placement | string | Applies pre-defined placements and accepts topRight \| topLeft \| bottomRight \| bottomLeft. | -       |
