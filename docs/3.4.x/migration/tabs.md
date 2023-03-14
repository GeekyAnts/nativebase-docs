---
id: tabs
title: Tabs
---

API for Tabs is in progress, in the meantine you can check this [recipe](/building-tab-view) for building Tabs.

<!-- Migrating to v3 will provide a lot more **design**, **size, variation**, **color** and **customisation** option.

We have sliced Tabs into multiple smaller components which not only provides more control over the the code but also makes it more readable.

## Overview

Migrating Tabs components can broadly described in these points:

- Separated `Tab View` and `Tab Bar`. Providing more control over the structure and design.
- Each **Tab** can be more than string.
- **initialPage** (prop) → **defaultIndex** (prop), **page** (prop) → **index** (prop)
- The styling props have been deprecated, in v3 **Tabs** implements **Box** so it can be designed using Box props.

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
</Tabs> -->
