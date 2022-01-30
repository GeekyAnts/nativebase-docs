Migrating [`Radio`](/radio) to v3 will provide a lot more **design**, **size**, **color** and **customisation** option.

## Overview

Migrating Radio components can broadly described in these points:

- In v3 `Radio` can only used along with `Radio.Group`.
- **selected** is deprecated, instead v3 provides with **value** prop in `Radio.Group`.
- Colors of the Radio:
  **color** and **selectedColor** props are deprecated, instead now in v3 **color** is controlled by `colorScheme` prop, and it accepts all the color available in the theme.
- **onPress** prop is deprecated, instead v3 provides **onChange** which provides a callback when state of the checkbox change.

## Code Comparison

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

```tsx
import React, { Component } from 'react';
import { ListItem, Container, Content, Header, Text, Radio } from 'native-base';
export default class RadioButtonExample extends Component {
  constructor() {
    super();
    this.state = {
      itemSelected: '',
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Radio
              onPress={() => this.setState({ itemSelected: 'one' })}
              selected={this.state.itemSelected == 'one'}
            />
            <Text>One</Text>
          </ListItem>
          <ListItem>
            <Radio
              onPress={() => this.setState({ itemSelected: 'two' })}
              selected={this.state.itemSelected == 'two'}
            />
            <Text>Two</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
```

</DocTabItem>
<DocTabItem value="v3">

```tsx
import React from 'react';
import { Radio } from 'native-base';
export default function () {
  const [value, setValue] = React.useState('one');
  return (
    <Radio.Group
      name="myRadioGroup"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio value="one" my={1}>
        One
      </Radio>
      <Radio value="two" my={1}>
        Two
      </Radio>
    </Radio.Group>
  );
}
```

</DocTabItem>
</DocTabs>
