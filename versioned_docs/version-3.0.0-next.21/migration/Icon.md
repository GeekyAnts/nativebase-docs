import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Migrating to v3 will provide a lot more **customisation** option. Apart from the icons provided by [@expo/vector-icon](https://github.com/expo/vector-icons), you can also create custom icons using SVG.

## Overview

Migrating Icon components can broadly described in these points:

- **ios** and **android** props have been deprecated.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<Icon name='home' /> // same
<Icon type='FontAwesome' name='home' /> //same
<Icon
  ios='ios-menu'
  android='md-menu'
  style={{ fontSize: 20, color: 'red' }}
/>
// need to re-write
```

</TabItem>
<TabItem value="v3">

```tsx
<Icon name='home' /> // same
<Icon type='FontAwesome' name='home' /> //same
<Icon
  name={Platform.OS ? 'ios-menu' : 'md-menu'}
  style={{ fontSize: 20, color: 'red' }}
/>
// v3 version
```

</TabItem>
</Tabs>
