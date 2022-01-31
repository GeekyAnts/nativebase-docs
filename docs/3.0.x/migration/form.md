With NativeBase v3 we have replaced Form with [`FormControl`](/form-control) and sliced into [`FormControl.Label`](/form-control#formcontrollabel), [`FormControl.HelperText`](/form-control#formcontrolhelpertext) and [`FormControl.ErrorMessage`](/form-control#formcontrolerrormessage).

Here an example to show the code comparison.

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

</DocTabItem>
<DocTabItem value="v3">

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

</DocTabItem>
</DocTabs>
