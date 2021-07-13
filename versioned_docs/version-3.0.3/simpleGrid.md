---
id: simpleGrid
title: SimpleGrid
---

`SimpleGrid` provides an interface to create responsive grids using simple props.

## Import

```jsx
import { SimpleGrid } from 'native-base';
```

## Usage

### Using columns

```SnackPlayer name=SimpleGrid%20Usage
import { SimpleGrid, Box, NativeBaseProvider, Center } from 'native-base';
import React from 'react';

const items = 12;
const data = Array(items).fill(0);

function SimpleGridComponent() {
  return (
    <SimpleGrid columns={3} spacing={2}>
      {data.map((_item, index) => {
        return <Box key={index} bg="emerald.400" size={16} rounded="lg"/>;
      })}
    </SimpleGrid>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SimpleGridComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Using minChildWidth

```SnackPlayer name=SimpleGrid%20minWidthChild
import { SimpleGrid, Box, NativeBaseProvider, Center } from 'native-base';
import React from 'react';

const items = 12;
const data = Array(items).fill(0);

function SimpleGridComponent() {
  return (
    <SimpleGrid minChildWidth={10} spacing={3}>
      {data.map((_item, index) => {
        return <Box key={index} bg="emerald.400" size={10} rounded="lg"/>;
      })}
    </SimpleGrid>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SimpleGridComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name          | Type   | Description                                                           | Default |
| ------------- | ------ | --------------------------------------------------------------------- | ------- |
| columns       | number | Number of columns in a row                                            | 0       |
| minChildWidth | number | Number to set the minimum child width of a grid item.                 | 0       |
| spacing       | number | Number to set the horizontal and vertical spacing between grid items. | 0       |
| spacingX      | number | Number to set the horizontal spacing between grid items.              | 0       |
| spacingY      | number | Number to set the vertical spacing between grid items.                | 0       |

**Note:** Either `columns` or `minChildWidth` is required.
