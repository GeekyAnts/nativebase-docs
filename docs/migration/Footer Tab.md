import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Nativebase v3 we have removed FooterTab components because as it's very simple to create using Tabs components. Here an example to show the code comparison.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<Footer>
  <FooterTab>
    <Button>
      <Icon name='apps' />
    </Button>
    <Button>
      <Icon name='camera' />
    </Button>
    <Button active>
      <Icon active name='navigate' />
    </Button>
    <Button>
      <Icon name='person' />
    </Button>
  </FooterTab>
</Footer>
```

</TabItem>
<TabItem value="v3">

```tsx
<Tabs isFitted variant='solid-rounded'>
  <TabBar>
    <Tab borderRadius='md' px={4} ml={4}>
      <Icon name='apps' />
    </Tab>
    <Tab borderRadius='md' px={4}>
      <Icon name='camera' />
    </Tab>
    <Tab borderRadius='md' px={4}>
      <Icon name='navigation' />
    </Tab>
    <Tab borderRadius='md' px={4} mr={4}>
      <Icon name='person' />
    </Tab>
  </TabBar>
</Tabs>
```

</TabItem>
</Tabs>
