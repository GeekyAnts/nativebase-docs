import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Migrating to v3 will provide a lot more **design**, **size, variant**, **color** and **customisation** option.

## Overview

Migrating Badge components can broadly described in these points:

- No need to wrap you text inside text component anymore.
- In v3 the color is controlled by `colorScheme` prop. And it accepts all the color available in the theme.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<Badge success>
  <Text>Success</Text>
</Badge>
```

</TabItem>
<TabItem value="v3">

```tsx
<Badge colorScheme='success'>
  <Text>Success</Text>
</Badge>
```

</TabItem>
</Tabs>
