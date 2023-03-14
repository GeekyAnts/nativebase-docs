---
id: badge
title: Badge
---

Migrating [`Badge`](/badge) to v3 will provide a lot more **design**, **size, variant**, **color** and **customisation** options.

## Overview

Migrating Badge components can be broadly described in these points:

- No need to wrap your text inside text component anymore.
- In v3 the color is controlled by `colorScheme` prop. And it accepts all the color available in the theme.

## Code Comparison

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

```tsx
<Badge success>
  <Text>Success</Text>
</Badge>
```

</DocTabItem>
<DocTabItem value="v3">

```tsx
<Badge colorScheme="success">
  <Text>Success</Text>
</Badge>
```

</DocTabItem>
</DocTabs>
