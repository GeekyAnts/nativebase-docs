import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In v3 Toast can be created using **useToast** hook

## Overview

Migrating Toast components can broadly described in these points:

- **buttonText** is no longer supported.
- **type** (prop) → **status** prop.
- **position** (prop) → **placement** prop.

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
import { Container, Header, Content, Toast, Button, Text } from 'native-base';

export default class ToastExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                position: 'bottom',
                type: 'warning',
              })
            }
          >
            <Text>Toast</Text>
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
import { Button, useToast } from 'native-base';

export default function () {
  const toast = useToast();

  return (
    <Button
      onPress={() => {
        toast.show({
          title: 'Wrong password',
          placement: 'bottom',
          status: 'warning',
        });
      }}
    >
      Button
    </Button>
  );
}
```

</TabItem>
</Tabs>
