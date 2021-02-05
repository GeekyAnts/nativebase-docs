---
id: list
title: List
---

List is used to display list items.

## Implements

- `Box`, `VStack` from native-base

## Import

```jsx
import { List, ListItem, ListIcon, Ol, Ul, Li } from 'native-base';
```

## Usage

```SnackPlayer name=List%20Usage
import React from 'react';
import { Li, Heading, Ul, Ol, Box, NativeBaseProvider } from 'native-base';

function ListComponent () {
  return (
    <Box height="50%">
      <Heading fontSize={32} color="indigo.500">
        Unordered List
      </Heading>
      <Ol my={2} fontSize={24} spacing={4} color="red.200">
        <Li>Inferno</Li>
        <Li>Mirage</Li>
        <Li>Dust 2</Li>
        <Li>Nuke</Li>
      </Ol>
      <Heading fontSize={32} color="indigo.500">
        Ordered List
      </Heading>
      <Ul mt={2} fontSize={24} spacing={4} color="red.200">
        <Li>Inferno</Li>
        <Li>Mirage</Li>
        <Li>Dust 2</Li>
        <Li>Nuke</Li>
      </Ul>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ListComponent />
    </NativeBaseProvider>
  );
}
```

## List with ListIcon

```SnackPlayer name=List%20List with ListIcon
import React from 'react';
import { List, Heading, Box, ListIcon, Li, NativeBaseProvider } from 'native-base';

function ListComponent () {
  return (
    <Box height="50%">
      <Heading color="indigo.500">List with Icons</Heading>
      <List mt={2} fontSize={32} spacing={4} color="red.200">
        <Li>
          <ListIcon
            name="check-circle-outline"
            color="green.400"
            type="MaterialIcons"
          />
          Server went up
        </Li>
        <Li>
          <ListIcon name="cancel" color="red.400" type="MaterialIcons" />
          Server went down
        </Li>
        <Li>
          <ListIcon name="equalizer" type="MaterialIcons" />
          Graphs and stats
        </Li>
        <Li>
          <ListIcon name="attach-file" color="gray.400" type="MaterialIcons" />
          Attachments
        </Li>
      </List>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ListComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### List/Ul/Ol Props

| Name            | Type    | Description                                                    | Default |
| --------------- | ------- | -------------------------------------------------------------- | ------- |
| spacing         | number  | The space between each list item.                              | -       |
| ol or ordered   | boolean | Convert List to Ordered List ( can be used with List only ).   | -       |
| ul or unordered | boolean | Convert List to Unordered List ( can be used with List only ). |         |
| start           | number  | The starting number for Ol or List with ol/ordered prop.       |         |
| Component       |         |                                                                |         |

It composes **Box** so you can pass all **Box** Props.

### Copy of List/Ul/Ol Props

| Name            | Type    | Description                                                    | Default |
| --------------- | ------- | -------------------------------------------------------------- | ------- |
| spacing         | number  | The space between each list item.                              | -       |
| ol or ordered   | boolean | Convert List to Ordered List ( can be used with List only ).   | -       |
| ul or unordered | boolean | Convert List to Unordered List ( can be used with List only ). |         |
| start           | number  | The starting number for Ol or List with ol/ordered prop.       |         |
| Component       |         |                                                                |         |
