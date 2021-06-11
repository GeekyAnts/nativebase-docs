import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Migrating to v3 will provide a lot more **design**, **size, variation**, **color** and **customisation** option.

We have sliced Tabs into multiple smaller component which not only provides more control over the the code but also makes it more readable.

## Overview

Migrating Tabs components can broadly described in these points:

- Separated `TabViews` and `TabBar`. Providing more control over the structure and design.
- Each **Tab** can be more than string.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<Tabs>
  <Tab heading="One">
    <Text>One</Text>
  </Tab>
  <Tab heading="Two">
    <Text>Two</Text>
  </Tab>
  <Tab heading="Three">
    <Text>Three</Text>
  </Tab>
</Tabs>
```

</TabItem>
<TabItem value="v3">

```tsx
<Tabs>
  <Tabs.Bar>
    <Tabs.Tab>One</Tabs.Tab>
    <Tabs.Tab>Two</Tabs.Tab>
    <Tabs.Tab>Three</Tabs.Tab>
  </Tabs.Bar>
  <Tabs.Views>
    <Tabs.View>One</Tabs.View>
    <Tabs.View>Two</Tabs.View>
    <Tabs.View>Three</Tabs.View>
  </Tabs.Views>
</Tabs>
```

</TabItem>
</Tabs>
