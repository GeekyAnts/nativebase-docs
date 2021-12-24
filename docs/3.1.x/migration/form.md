---
id: form
title: Form
---




With NativeBase v3 we have replaced Form with [`FormControl`](formControl.md) and sliced into [`FormControl.Label`](formControl.md#formcontrollabel), [`FormControl.HelperText`](formControl.md#formcontrolhelpertext) and [`FormControl.ErrorMessage`](formControl#formcontrolerrormessage).

Here an example to show the code comparison.

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
import { Form, Item, Input } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
      </Form>
    );
  }
}
// need to re-write
```

</TabItem>
<TabItem value="v3">

```tsx
import React from 'react';
import { Input, Stack, FormControl } from 'native-base';
export const FormExample = () => {
  return (
    <FormControl>
      <Stack space={5}>
        <Stack>
          <FormControl.Label>Username</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Username" />
        </Stack>
        <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Password" />
        </Stack>
      </Stack>
    </FormControl>
  );
};

// v3 version
```

</TabItem>
</Tabs>
