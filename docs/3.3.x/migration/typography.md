---
id: typography
title: Typography
metaTitle: Typography | NativeBase
metaDescription: In NativeBase, H1, H2, and H3 have all been replaced with the Heading component. Read this document to know more and check out the code comparison as well. 
---

**H1**, **H2** and **H3** all have been replaced with [`Heading`](/heading) component.

## Code Comparison

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

```tsx
<H1>Header One</H1>
<H2>Header Two</H2>
<H3>Header Three</H3>
<Text>Default</Text>
```

</DocTabItem>
<DocTabItem value="v3">

```tsx
<Heading size='xl'>Header One</Heading>
<Heading size='lg'>Header Two</Heading>
<Heading size='md'>Header Three</Heading>
<Text>Default</Text>
```

</DocTabItem>
</DocTabs>
