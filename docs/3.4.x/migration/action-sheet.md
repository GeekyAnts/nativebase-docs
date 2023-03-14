---
id: action-sheet
title: ActionSheet
---

We have sliced [`Actionsheet`](/action-sheet) into multiple smaller component which not only provides more control over the the code but also makes it more readable.

## Overview

Migrating Checkbox components can broadly described in these points:

- **options** (prop) → `Actionsheet.Item` (component).
- Props like **cancelButtonIndex** are _no longer required_ as components like `Actionsheet.Item` can be customised as per need.
- **title** (prop) → NativeBase components such as `Heading` and `Text` can be used inside `ActionSheet.Content` to show the title.
- Declarative approach to show and hide using `isOpen` prop, instead of `show()` and `hide()`.

## Code Comparison

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

```tsx
import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Content,
  ActionSheet,
  Text,
} from "native-base";
var BUTTONS = ["Option 1", "Option 2", "Option 3", "Delete", "Cancel"];
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
                  title: "Header",
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

</DocTabItem>
<DocTabItem value="v3">

```tsx
import React from "react";
import { Button, Actionsheet, useDisclose } from "native-base";

export default function () {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Actionsheet.Item>Option 3</Actionsheet.Item>
          <Actionsheet.Item color="red.500">Delete</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
```

</DocTabItem>
</DocTabs>
