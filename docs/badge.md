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

function BadgeComponent() {
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
import { Badge, Stack, NativeBaseProvider, Center } from 'native-base';

function BadgeComponent() {
  return (
    <Stack space={4} alignItems="center">
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="gray">GRAY</Badge>
      <Badge colorScheme="dark">DARK</Badge>
    </Stack>
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

```SnackPlayer name=Badge%20Variants
import React from 'react';
import { Badge, Stack, NativeBaseProvider, Center } from 'native-base';

function BadgeComponent() {
  return (
    <Stack space={4} alignItems="center">
      <Badge colorScheme="success" variant="solid">
        SOLID
      </Badge>
      <Badge colorScheme="success">SUBTLE</Badge>
      <Badge colorScheme="success" variant="outline">
        OUTLINE
      </Badge>
    </Stack>
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

### Composition

```SnackPlayer name=Badge%20Composition
import React from 'react';
import { Badge, Text, Stack, Button, Center, NativeBaseProvider } from 'native-base';

function BadgeComponent() {
  return (
    <Button colorScheme='emerald'>
      <Text color='white'>Notifications</Text>
      <Badge ml={2}>10</Badge>
    </Button>
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
