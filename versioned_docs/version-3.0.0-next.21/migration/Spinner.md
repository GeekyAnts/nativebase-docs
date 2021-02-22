import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Migrating to v3 will provide a lot more **size**, **color** and **customisation** option.

## Overview

Migrating Badge components can broadly described in these points:

- Also get 2 size options, namely sm and lg.
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
<Spinner color="green.500" />
<Spinner color="blue.500" />
```

</TabItem>
</Tabs>
