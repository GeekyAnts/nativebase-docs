---
id: breadcrumb
title: Breadcrumb
---

## Implements

- [`Link`](link.md), [`Flex`](flex.md).

## Import

```jsx
import { Breadcrumb } from 'nativebase';
```

## Examples

### Basic

Add `isCurrentPage` prop to the `Breadcrumb.Item` that matches the current path.

```SnackPlayer name=Breadcrumb%20Basic
import React from 'react';
import {
  Breadcrumb,
  Box,
  Heading,
  NativeBaseProvider,
  Center
} from 'native-base';
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>This is a Default Breadcrumb</Heading>
      <Breadcrumb>
        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link>Home (This is currently active)</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            Github
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreadcrumbComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Icon Separators

Change the `separator` used in the breadcrumb by passing a string, like `'-'` or any Component.

```SnackPlayer name=Breadcrumb%20Component%20Separator
import React from 'react';
import {
  Breadcrumb,
  Box,
  Heading,
  NativeBaseProvider,
  Center,
  Icon
} from 'native-base';
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb with Custom Separator</Heading>
      <Breadcrumb
        spacing={1}
        separator={<Icon name="keyboard-arrow-right" size={5} />}
      >
        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link>Home (This is currently active)</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            Github
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreadcrumbComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Text Separators

```SnackPlayer name=Breadcrumb%20String%20Separator
import React from 'react';
import {
  Breadcrumb,
  Box,
  Heading,
  Icon,
  NativeBaseProvider,
  Center
} from 'native-base';
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb with String Separator</Heading>
      <Breadcrumb bold italic separator="-">
        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link>Home (This is currently active)</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            Github
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreadcrumbComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Composition

Breadcrumb composes Box so you can pass all Box props to change the style of the breadcrumbs. Let's say we need to increase the fontSize and change color of the breadcrumbs.

```SnackPlayer name=Breadcrumb%20Composition
import React from 'react';
import { NativeBaseProvider, Breadcrumb, Box, Heading, Icon, Center } from 'native-base';
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} fontSize="lg">
        <Breadcrumb.Item>
          <Breadcrumb.Link>
            <Icon name="home" mr={1} />
            Home
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            <Icon name="file-document" type="MaterialCommunityIcons" mr={1} />
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <Icon name="github" type="AntDesign" mr={1} />
            Github (This is currently active)
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <BreadcrumbComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Breadcrumb

| Name      | Type                                                  | Description                                       | Default |
| --------- | ----------------------------------------------------- | ------------------------------------------------- | ------- |
| separator | JSX.Element, string                                   | The visual separator between the breadcrumb item. | -       |
| spacing   | [`MarginProps`](https://styled-system.com/api/#space) | The space between each stack item.                | -       |

### Breadcrumb.Item

| Name          | Type    | Description                                                    | Default |
| ------------- | ------- | -------------------------------------------------------------- | ------- |
| isCurrentPage | boolean | If true, it indicates that the breadcrumb link is active page. | -       |

### Breadcrumb.Link

`Breadcrumb.Link` composes the [`Link`](link.md) component so you can use all Link props.
