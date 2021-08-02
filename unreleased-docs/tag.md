---
id: tag
title: Tag
---

`Tag` component is used for items that need to be labeled, categorized, or organized using keywords that describe them.

## Import

```jsx
import { Tag } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Tag%20Example
import React from 'react';
import { Tag, NativeBaseProvider, Center } from 'native-base';

function TagComponent() {
  return <Tag colorScheme="emerald">NativeBase</Tag>;
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TagComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Variants

```SnackPlayer name=Tag%20Example(Variants)
import React from 'react';
import { Tag, Stack, NativeBaseProvider, Center } from 'native-base';

function TagComponent() {
  return (
    <Stack space={4} alignItems="flex-start">
      {['solid', 'subtle', 'outline'].map((variant: any) => (
        <Tag key={variant} variant={variant} colorScheme="green">
          NativeBase
        </Tag>
      ))}
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TagComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Sizes

```SnackPlayer name=Tag%20Example(Sizes)
import React from 'react';
import { Tag, Stack, NativeBaseProvider, Center } from 'native-base';

function TagComponent() {
  return (
    <Stack space={4} alignItems="center">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag size={size} key={size} variant="solid" colorScheme="green">
          NativeBase
        </Tag>
      ))}
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TagComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### With icon

```SnackPlayer name=Tag%20Example(with icon)
import React from 'react';
import { Tag, Icon, NativeBaseProvider, Center } from 'native-base';

function TagComponent() {
  return (
    <Tag colorScheme="green" variant="solid" rounded={100}>
      <Icon name={'menu'} type="MaterialIcons" color="white" mr={1} />
      Menu
    </Tag>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TagComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom

```SnackPlayer name=Tag%20Example(custom)
import React from 'react';
import {
  Tag,
  Avatar,
  NativeBaseProvider,
  Center
} from 'native-base';

function TagComponent() {
  return (
    <Tag colorScheme="emerald" size="sm" rounded={'full'}>
      <Avatar
        mr={2}
        source={{ uri: 'https://nativebase.io/assets/img/front-page-icon.png' }}
        name={'NativeBase'}
        width={6}
        height={6}
      />
      NativeBase
    </Tag>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TagComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name        | Type                         | Description                                                                                                       | Default |
| ----------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| variant     | `outline`, `solid`, `subtle` | The variant style of the tag component.                                                                           | -       |
| colorScheme | string                       | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | -       |
| size        | `lg`, `md`, `sm`             | The size of the tag component.                                                                                    | `md`    |
