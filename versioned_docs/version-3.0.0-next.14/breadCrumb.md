---
id: breadCrumb
title: Breadcrumb
---

## Implements

- `Link`, `Flex` from nativebase

## Import

```jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from 'nativebase';
```

## Usage

Add `isCurrentPage` prop to the `BreadcrumbItem` that matches the current path.

```SnackPlayer name=Breadcrumb%20Usage
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  NativeBaseProvider
} from 'native-base';
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>This is a Default Breadcrumb</Heading>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Home (This is currently active)</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadcrumbLink>
        </BreadcrumbItem>
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

```SnackPlayer name=Breadcrumb%20Separators
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  NativeBaseProvider
} from 'native-base';
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb with String Separator</Heading>
      <Breadcrumb bold italic separator={"-"}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Home (This is currently active)</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadcrumbLink>
        </BreadcrumbItem>
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

```SnackPlayer name=Breadcrumb%20Example
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  Icon,
  NativeBaseProvider
} from 'native-base';
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb with Custom Separator</Heading>
      <Breadcrumb
        spacing={1}
        separator={<Icon name="keyboard-arrow-right" size={5} />}
      >
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Home (This is currently active)</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadcrumbLink>
        </BreadcrumbItem>
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  NativeBaseProvider
} from 'native-base'
function BreadcrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>Breadcrumb Composition</Heading>
      <Breadcrumb spacing={2} fontSize='lg' color="green.500">
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Home (This is currently active)</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadcrumbLink>
        </BreadcrumbItem>
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
| Component |                          |                                                     |         |

### BreadcrumbItem

| Name          | Type    | Description                                                    | Default |
| ------------- | ------- | -------------------------------------------------------------- | ------- |
| isCurrentPage | boolean | If true, it indicates that the breadcrumb link is active page. | -       |
| Component     |         |                                                                |         |

### **BreadcrumbLink Props**

The BreadcrumbLink composes the `Link` component so you can use all Link props.
