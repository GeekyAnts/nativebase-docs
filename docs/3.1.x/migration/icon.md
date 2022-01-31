---
id: icon
title: Icon
---

Migrating [`Icon`](/icon) to v3 will provide a lot more **customisation** option. You can also create custom icons using SVG.

## Overview

Migrating Icon components can broadly described in these points:

- **ios**, **android** and **type** props have been deprecated.
- default Icon type i.e **Ionicons** has been removed, now v3 does not uses any.
- v3 uses a third-party icon library ( such as @expo/vector-icons ), with **as** prop.
- custom colors and size can be added using **color** and **size** props.

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
import { Icon } from 'native-base';

export default class IconExample extends Component {
  render() {
    return (
      <>
        <Icon name="home" />
        <Icon
          ios="ios-menu"
          android="md-menu"
          style={{ fontSize: 20, color: 'red' }}
        />
        <Icon type="FontAwesome" name="home" />
      </>
    );
  }
}
// need to re-write
```

</DocTabItem>
<DocTabItem value="v3">

```tsx
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function () {
  return (
    <>
      <Icon as={Ionicons} name="home" />
      <Icon
        as={Ionicons}
        name={Platform.OS ? 'ios-menu' : 'md-menu'}
        size={20}
        color="red"
      />
      <Icon as={FontAwesome} name="home" />
    </>
  );
}

// v3 version
```

</DocTabItem>
</DocTabs>
