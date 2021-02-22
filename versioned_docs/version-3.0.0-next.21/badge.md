---
id: badge
title: Badge
---

Badges are used to highlight an item's status for quick recognition.

## Import

```jsx
import { Badge } from 'native-base';
```

## Example

```SnackPlayer name=Badge%20Example
import React from 'react';
import { Badge, NativeBaseProvider } from 'native-base';

function BadgeComponent () {
  return <Badge>DEFAULT BADGE</Badge>;
}
export default function () {
  return (
    <NativeBaseProvider>
      <BadgeComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Colors)

```SnackPlayer name=Badge%20Example(Colors)
import React from 'react';
import { Badge, HStack, NativeBaseProvider } from 'native-base';

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
      <BadgeComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Variants)

```SnackPlayer name=Badge%20Example(Variants)
import React from 'react';
import { Badge, HStack, NativeBaseProvider } from 'native-base';

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
      <BadgeComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Badge

| Name        | Type                   | Description                                                           | Default |
| ----------- | ---------------------- | --------------------------------------------------------------------- | ------- |
| variant     | outline, solid, subtle | The style variant of the badge.                                       | subtle  |
| colorScheme | string                 | The color scheme to use for the badge. Must be a key in theme.colors. | -       |
