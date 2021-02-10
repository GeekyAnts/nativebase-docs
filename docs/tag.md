---
id: tag
title: Tag
---

Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.

## Import

NativeBase exports 5 Tag related components:

- **Tag**: The wrapper for all the tag elements
- **TagLabel**: The label for tag's text content.
- **TagLeftIcon**: The icon placed on the left side of the tag
- **TagRightIcon**: The icon placed on the right side of the tag
- **TagCloseButton**: The close button for the tag.

```jsx
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from 'native-base';
```

## Example

```SnackPlayer name=Tag%20Example
import React from 'react';
import { Tag, NativeBaseProvider } from 'native-base';

function TagComponent () {
  return <Tag colorScheme="green">NativeBase</Tag>;
}
export default function () {
  return (
    <NativeBaseProvider>
      <TagComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=Tag%20Example(Sizes)
import React from 'react';
import { Tag, HStack, NativeBaseProvider } from 'native-base';

function TagComponent() {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag size={size} key={size} variant="solid" colorScheme="green">
          NativeBase
        </Tag>
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TagComponent />
    </NativeBaseProvider>
  );
}
```

## Example (with left icon)

```SnackPlayer name=Tag%20Example(with left icon)
import React from 'react';
import { Tag, TagLabel, TagLeftIcon, HStack, NativeBaseProvider } from 'native-base';

function TagComponent() {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag
          colorScheme="green"
          variant="solid"
          bg="red.200"
          rounded={100}
          size={size}
        >
          <TagLeftIcon name={'menu'} type="MaterialIcons" color="white" />
          <TagLabel>Menu</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TagComponent />
    </NativeBaseProvider>
  );
}
```

## Example (with right icon)

```SnackPlayer name=Tag%20Example(with right icon)
import React from 'react';
import { Tag, TagLabel, TagRightIcon, HStack, NativeBaseProvider } from 'native-base';

function TagComponent() {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag
          colorScheme="green"
          variant="solid"
          bg="red.200"
          rounded={100}
          size={size}
        >
          <TagLabel>Menu</TagLabel>
          <TagRightIcon name={'menu'} type="MaterialIcons" color="white" />
        </Tag>
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TagComponent />
    </NativeBaseProvider>
  );
}
```

## Example (custom)

```SnackPlayer name=Tag%20Example(custom)
import React from 'react';
import {
  Tag,
  TagCloseButton,
  TagLabel,
  Avatar,
  NativeBaseProvider
} from 'native-base';

function TagComponent() {
  return (
    <Tag colorScheme="red" rounded={100} size="md">
      <Avatar
        mr={3}
        src={'https://nativebase.io/assets/img/front-page-icon.png'}
        name={'Native Base'}
        width={10}
        height={10}
        my={1}
      >
        <Avatar.Badge bg={'blue.100'} boxSize={2} />
      </Avatar>
      <TagLabel>Custom Tag</TagLabel>
      <TagCloseButton />
    </Tag>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TagComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Tag

| Name        | Type                   | Description                                                                                                       | Default |
| ----------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| variant     | outline, solid, subtle | The variant style of the tag component.                                                                           | -       |
| colorScheme | string                 | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | -       |
| size        | lg, md, sm             | The size of the tag component.                                                                                    | md      |
