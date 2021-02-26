---
id: list
title: List
---

List is used to display list items.

## Implements

- [`Box`](box.md), [`VStack`](VStack.md).

## Import

```jsx
import { List } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=List%20Basic
import React from 'react';
import { List, Heading, Box, NativeBaseProvider, Center } from 'native-base';

function ListComponent () {
	return (
    <Box w="50%">
      <Heading fontSize={24}>Plain List</Heading>
      <List spacing={2} my={2}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ListComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Ordered List

```SnackPlayer name=OrderedList
import React from 'react';
import { List, Heading, Box, NativeBaseProvider, Center } from 'native-base';

function ListComponent () {
	return (
    <Box w="50%">
      <Heading fontSize={24}>Ordered List</Heading>
      <List.Ordered my={2} spacing={2}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List.Ordered>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ListComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Unordered List

```SnackPlayer name=UnOrderedList
import React from 'react';
import { List, Heading, Box, NativeBaseProvider, Center } from 'native-base';

function ListComponent () {
	return (
    <Box w="50%">
      <Heading fontSize={24}>Unordered List</Heading>
      <List.Unordered my={2} spacing={2}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List.Unordered>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ListComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Styled List

```SnackPlayer name=StyledList
import React from 'react';
import { List, Heading, Box, NativeBaseProvider, Center } from 'native-base';

function ListComponent () {
	return (
    <Box w="50%">
      <Heading fontSize={24}>Styled List</Heading>
      <List.Ordered
        my={2}
        spacing={2}
        start={11}
        _text={{ color: 'amber.600' }}
      >
        <List.Item>Ocean's </List.Item>
        <List.Item _text={{ color: 'red.200' }}>Ocean's </List.Item>
        <List.Item _text={{ color: 'teal.400', fontWeight: 'bold' }}>
          Ocean's
        </List.Item>
      </List.Ordered>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ListComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### List with ListIcon

```SnackPlayer name=ListWithIcon
import React from 'react';
import { List, Heading, Box, NativeBaseProvider, Center } from 'native-base';

function ListComponent () {
	return (
    <Box height="50%">
      <Heading>List with Icons</Heading>
      <List mt={2} fontSize={24} spacing={4} my={2}>
        <List.Item>
          <List.Icon
            name="check-circle-outline"
            color="green.400"
            type="MaterialIcons"
          />
          Server went up
        </List.Item>
        <List.Item>
          <List.Icon name="cancel" color="red.400" type="MaterialIcons" />
          Server went down
        </List.Item>
        <List.Item>
          <List.Icon name="equalizer" type="MaterialIcons" />
          Graphs and stats
        </List.Item>
        <List.Item>
          <List.Icon name="attach-file" color="gray.400" type="MaterialIcons" />
          Attachments
        </List.Item>
      </List>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ListComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Virtualized List

```SnackPlayer name=VirtualizedList
import React from 'react';
import { VirtualizedList } from 'react-native';
import { List, NativeBaseProvider, Center } from 'native-base';

const DATA: any = [];

const getItem = (_data: any, index: number) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data: any) => 500;

const Item = ({ title }: any) => (
  <List.Item
    bg="emerald.200"
    borderRadius="md"
    justifyContent="center"
    _text={{ fontSize: '2xl' }}
    px={4}
    py={2}
    my={2}
  >
    {title}
  </List.Item>
);

function ListComponent () {
  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item: any) => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ListComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### List

| Name    | Type   | Description                                              | Default |
| ------- | ------ | -------------------------------------------------------- | ------- |
| spacing | number | The space between each list item.                        | -       |
| start   | number | The starting number for Ol or List with ol/ordered prop. | -       |

**List and List.Item** composes **[Box](box.md)**, so all the [`Box Props`](box.md#props) can be passed to it.

**List.Icon** composes **[Icon](icon.md)**, so all the [`Icon Props`](icon.md#props) can be passed to it.
