---
id: spinner
title: Spinner
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Migrating [`Spinner`](spinner.md) to v3 will provide a lot more **size**, **color** and **customisation** option.

## Overview

Migrating Spinner components can broadly described in these points:

- Get 2 size options, namely **sm/small** and **lg/large** or pass a number as a **size** prop.
- In v3 the color are provided by theme, so the shade for the color should be passed along with the color name.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<Spinner />
<Spinner color='red' />
<Spinner color='green' />
<Spinner color='blue' />
```

</TabItem>
<TabItem value="v3">

```tsx
<Spinner />
<Spinner color="danger.400" />
<Spinner size="sm" />
<Spinner color="blue.500" size="lg" />
<Spinner color="yellow.500" size="50" />
```

</TabItem>
</Tabs>
