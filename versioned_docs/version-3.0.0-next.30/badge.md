---
id: badge
title: Badge
---

`Badges` are used to highlight an item's status for quick recognition.

## Import

```jsx
import { Badge } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Badge%20Basic
import React from 'react';
import { Badge, NativeBaseProvider, Center } from 'native-base';

function BadgeComponent () {
  return <Badge>DEFAULT BADGE</Badge>;
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BadgeComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Color Scheme

```SnackPlayer name=Badge%20Color%20Scheme
import React from 'react';
import { Badge, HStack, NativeBaseProvider, Center } from 'native-base';

function BadgeComponent () {
  return (
    <HStack>
      <Badge m={2} colorScheme="success">
        SUCCESS
      </Badge>
      <Badge m={2} colorScheme="danger">
        DANGER
      </Badge>
      <Badge m={2} colorScheme="gray">
        GRAY
      </Badge>
      <Badge m={2} colorScheme="dark">
        DARK
      </Badge>
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BadgeComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Variants

```SnackPlayer name=Badge%20EVariants
import React from 'react';
import { Badge, HStack, NativeBaseProvider, Center } from 'native-base';

function BadgeComponent () {
  return (
    <HStack>
      <Badge mx={2} colorScheme="success" variant="solid">
        SOLID
      </Badge>
      <Badge mx={2} colorScheme="success">
        SUBTLE
      </Badge>
      <Badge mx={2} colorScheme="success" variant="outline">
        OUTLINE
      </Badge>
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BadgeComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

`Badge` compose the [`Box`](box.md) component. So all it's props can be passed to `Badge`.

| Name        | Type                         | Description                                                           | Default  |
| ----------- | ---------------------------- | --------------------------------------------------------------------- | -------- |
| variant     | `outline`, `solid`, `subtle` | The style variant of the badge.                                       | `subtle` |
| colorScheme | string                       | The color scheme to use for the badge. Must be a key in theme.colors. | -        |
