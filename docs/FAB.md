---
id: FAB
title: FAB
---

A floating action button is a circular icon button that hovers over content to promote a primary action in the application.

## Implements

- [`IconButton`](iconButton.md)

## Import

```jsx
import { Fab } from 'native-base';
```

## Example

### Basic

```SnackPlayer name=FAB%20Example
import React from 'react';
import { Fab, Icon, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <FabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom Position

```SnackPlayer name=FAB%20Custom Position
import { Fab, Icon, Text, NativeBaseProvider, Center } from 'native-base';
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
      <Center flex={1}>
        <FabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

`FAB` implements **[IconButton](iconButton.md)**, so all the [`IconButton Props`](iconButton.md#props) can be passed to it.

| Name      | Type                                             | Description         | Default       |
| --------- | ------------------------------------------------ | ------------------- | ------------- |
| placement | `topRight`,`topLeft`,`bottomRight`, `bottomLeft` | Applies placements. | `bottomRight` |
