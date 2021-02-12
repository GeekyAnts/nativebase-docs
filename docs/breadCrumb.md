---
id: breadcrumb
title: Breadcrumb
---

## Implements

- `Link`, `Flex` from nativebase

## Import

```jsx
import { Breadcrumb } from 'nativebase';
```

## Basic

Add `isCurrentPage` prop to the `Breadcrumb.Item` that matches the current path.

```SnackPlayer name=Breadcrumb%20Basic
import React from 'react';
import {
  Breadcrumb,
  Box,
  Heading,
  NativeBaseProvider
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
      <BreadcrumbComponent />
    </NativeBaseProvider>
  );
}
```

## Separators

Change the `separator` used in the breadcrumb by passing a string, like `'-'` or any Component.

```SnackPlayer name=Breadcrumb%20Component%20Separator
import React from 'react';
import {
  Breadcrumb,
  Box,
  Heading,
  NativeBaseProvider,
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
      <BreadcrumbComponent />
    </NativeBaseProvider>
  );
}
```

<br/>
<br/>

```SnackPlayer name=Breadcrumb%20String%20Separator
import React from 'react';
import {
  Breadcrumb,
  Box,
  Heading,
  Icon,
  NativeBaseProvider
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
      <BreadcrumbComponent />
    </NativeBaseProvider>
  );
}
```

## Composition

Breadcrumb composes Box so you can pass all Box props to change the style of the breadcrumbs. Let's say we need to increase the fontSize and change color of the breadcrumbs.

```SnackPlayer name=Breadcrumb%20Composition
import React from 'react';
import { NativeBaseProvider, Breadcrumb, Box, Heading, Icon } from 'native-base';
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
      <BreadcrumbComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Breadcrumb

| Name      | Type                     | Description                                         | Default |
| --------- | ------------------------ | --------------------------------------------------- | ------- |
| separator | JSX.Element, string      | The visual separator between the breadcrumb item.   | -       |
| spacing   | StyledSystem.MarginProps | The left and right margin applied to the separator. | -       |

### Breadcrumb.Item

| Name          | Type    | Description                                                    | Default |
| ------------- | ------- | -------------------------------------------------------------- | ------- |
| isCurrentPage | boolean | If true, it indicates that the breadcrumb link is active page. | -       |

### **Breadcrumb.Link Props**

The Breadcrumb.Link composes the `Link` component so you can use all Link props.
