---
id: toast
title: Toast
metaTitle: Toast | NativeBase
metaDescription: In NativeBase v3, Toast can be created using useToast hook. Read this document to know more about migrating toast components and also about code comparison.
---

In v3, [`Toast`](/toast) can be created using **useToast** hook

## Overview

Migrating Toast components can broadly described in these points:

- **buttonText** is no longer supported.
- **type** (prop) → **status** prop.
- **position** (prop) → **placement** prop.

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

</DocTabItem>
<DocTabItem value="v3">

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
        });
      }}
    >
      Button
    </Button>
  );
}
```

</DocTabItem>
</DocTabs>
