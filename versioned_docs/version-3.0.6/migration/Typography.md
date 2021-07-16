import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**H1**, **H2** and **H3** all have been replaced with [`Heading`](heading.md) component.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<H1>Header One</H1>
<H2>Header Two</H2>
<H3>Header Three</H3>
<Text>Default</Text>
```

</TabItem>
<TabItem value="v3">

```tsx
<Heading size='xl'>Header One</Heading>
<Heading size='lg'>Header Two</Heading>
<Heading size='md'>Header Three</Heading>
<Text>Default</Text>
```

</TabItem>
</Tabs>
