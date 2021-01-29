import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We have sliced Actionsheet into multiple smaller component which not only provides more control over the the code but also makes it more readable.

## Overview

Migrating Checkbox components can broadly described in these points:

- **options** (prop) → `ActionsheetItem` (component).
- Pros like **cancelButtonIndex**, **cancelButtonIndex** are _no longer required_ as components like `ActionsheetItem` can be customised as per need.
- **title** (prop) → `ActionsheetHeader` (component).
- **show(),** **hide()** → `isOpen`, If true, actionsheet will be open..

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
import React, { Component } from 'react';
import {
  Container,
  Header,
  Button,
  Content,
  ActionSheet,
  Text,
} from 'native-base';
var BUTTONS = ['Option 1', 'Option 2', 'Option 3', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class ActionSheetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: 'Header',
                },
                (buttonIndex) => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )
            }
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
```

</TabItem>
<TabItem value="v3">

```tsx
import React from 'react';
import {
  Button,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
} from 'native-base';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <ActionsheetItem>Option 2</ActionsheetItem>
          <ActionsheetItem>Option 3</ActionsheetItem>
          <ActionsheetItem color='red.500'>Delete</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <ActionsheetItem onPress={onClose}>Cancel</ActionsheetItem>
        </ActionsheetFooter>
      </Actionsheet>
    </>
  );
}
```

</TabItem>
</Tabs>
