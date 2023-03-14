Migrating [`FAB`](/fab) to v3 will provide a lot more **design**, **size**, **color** and **customisation** option.

## Overview

Migrating Fab components can broadly described in these points:

- Instead of Passing Icon as child, use `icon` prop.

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
import { Container, Header, View, Icon, Fab } from "native-base";
export default function () {
  return (
    <Container>
      <Header />
      <View style={{ flex: 1 }}>
        <Fab
          direction="up"
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
        >
          <Icon name="share" />
        </Fab>
      </View>
    </Container>
  );
}
```

</DocTabItem>
<DocTabItem value="v3">

```tsx
import React from "react";
import { Fab, Icon } from "native-base";

export default function () {
  return (
    <Fab
      placement="bottom-right"
      colorScheme="blue"
      size="lg"
      icon={<Icon name="share" as="Entypo" />}
    />
  );
}
```

</DocTabItem>
</DocTabs>
