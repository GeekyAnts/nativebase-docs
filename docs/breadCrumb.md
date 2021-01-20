---
id: breadCrumb
title: BreadCrumb
---

## Implements

- `Link`, `Flex` from nativebase

## Import

```jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "nativebase";
```

## Usage

Add `isCurrentPage` prop to the `BreadcrumbItem` that matches the current path.

```SnackPlayer name=BreadCrumb%20Usage
import React from 'react';
import {
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  Box,
  Heading,
  NativeBaseProvider
} from 'native-base';
function BreadCrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>This is a Default BreadCrumb</Heading>
      <BreadCrumb>
        <BreadCrumbItem isCurrentPage>
          <BreadCrumbLink>Home (This is currently active)</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink>Docs</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadCrumbLink>
        </BreadCrumbItem>
      </BreadCrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BreadCrumbComponent />
    </NativeBaseProvider>
  );
}
```

## Separators

Change the `separator` used in the breadcrumb by passing a string, like `'-'` or any Component.

```SnackPlayer name=BreadCrumb%20Separators
import React from 'react';
import {
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  Box,
  Heading,
  NativeBaseProvider
} from 'native-base';
function BreadCrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>BreadCrumb with String Separator</Heading>
      <BreadCrumb bold italic separator={"-"}>
        <BreadCrumbItem isCurrentPage>
          <BreadCrumbLink>Home (This is currently active)</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink>Docs</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadCrumbLink>
        </BreadCrumbItem>
      </BreadCrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BreadCrumbComponent />
    </NativeBaseProvider>
  );
}
```

<br/>
<br/>

```SnackPlayer name=BreadCrumb%20Example
import React from 'react';
import {
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  Box,
  Heading,
  Icon,
  NativeBaseProvider
} from 'native-base';
function BreadCrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>BreadCrumb with Custom Separator</Heading>
      <BreadCrumb
        spacing={1}
        separator={<Icon name="keyboard-arrow-right" size={5} />}
      >
        <BreadCrumbItem isCurrentPage>
          <BreadCrumbLink>Home (This is currently active)</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink>Docs</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadCrumbLink>
        </BreadCrumbItem>
      </BreadCrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BreadCrumbComponent />
    </NativeBaseProvider>
  );
}
```

## Composition

Breadcrumb composes Box so you can pass all Box props to change the style of the breadcrumbs. Let's say we need to increase the fontSize and change color of the breadcrumbs.

```SnackPlayer name=BreadCrumb%20Composition
import React from 'react';
import {
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  Box,
  Heading,
  NativeBaseProvider
} from 'native-base'
function BreadCrumbComponent () {
  return (
    <Box>
      <Heading mb={4}>BreadCrumb Composition</Heading>
      <BreadCrumb spacing={2} fontSize='lg' color="green.5">
        <BreadCrumbItem isCurrentPage>
          <BreadCrumbLink>Home (This is currently active)</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink>Docs</BreadCrumbLink>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <BreadCrumbLink
            href="https://github.com/GeekyAnts/nativebase-v3"
            isExternal
          >
            Github
          </BreadCrumbLink>
        </BreadCrumbItem>
      </BreadCrumb>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BreadCrumbComponent />
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
