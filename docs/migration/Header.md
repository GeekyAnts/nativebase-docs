import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With v3 we have replaced the **Header** with `AppBar`. An example to show the difference.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<Header>
	<Left>
		<Button transparent>
			<Icon name="arrow-back" />
		</Button>
	</Left>
	<Body>
		<Title>Header</Title>
	</Body>
	<Right>
		<Button transparent>
			<Icon name="menu" />
		</Button>
	</Right>
</Header>
```

</TabItem>
<TabItem value="v3">

```tsx
<AppBar shadow={1}>
	<AppBar.Left>
		<IconButton
			icon={<Icon name="arrow-left" type="MaterialCommunityIcons" size={8} />}
		/>
	</AppBar.Left>
	<AppBar.Content>Header</AppBar.Content>
	<AppBar.Right>
		<IconButton icon={<Icon name="menu" type="FontAwesome" size={6} />} />
	</AppBar.Right>
</AppBar>
```

</TabItem>
</Tabs>
