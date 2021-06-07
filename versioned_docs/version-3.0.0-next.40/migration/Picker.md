import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With v3 we have replaced the **Picker** with `Select` as react-native picker have been deprecated.

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
import { Container, Header, Content, Picker, Form } from 'native-base';

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              note
              mode='dropdown'
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label='Wallet' value='key0' />
              <Picker.Item label='ATM Card' value='key1' />
              <Picker.Item label='Debit Card' value='key2' />
              <Picker.Item label='Credit Card' value='key3' />
              <Picker.Item label='Net Banking' value='key4' />
            </Picker>
          </Form>
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
import { Icon, Select } from 'native-base';

export default function () {
  let [language, setLanguage] = React.useState<string>('key0');
  return (
    <Select
      placeholder='Mode of payment'
      selectedValue={language}
      width={150}
      onValueChange={(itemValue: string) => setLanguage(itemValue)}
      selectedItemBg={'blue.200'}
      dropdownOpenIcon={
        <Icon name='arrow-drop-up' type='MaterialIcons' size={6} />
      }
      dropdownCloseIcon={
        <Icon name='arrow-drop-down' type='MaterialIcons' size={6} />
      }
    >
      <Select.Item label='Wallet' value='key0' />
      <Select.Item label='ATM Card' value='key1' />
      <Select.Item label='Debit Card' value='key2' />
      <Select.Item label='Credit Card' value='key3' />
      <Select.Item label='Net Banking' value='key4' />
    </Select>
  );
}
```

</TabItem>
</Tabs>
