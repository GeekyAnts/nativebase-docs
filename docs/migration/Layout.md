import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Grid

EasyGrid can be used Nativebase v3 and with v3 we also provide SimpleGrid [form more details checkout docs] as well.

## List

With Nativebase v3 we have removed List components because as it's very simple to create various list layout using primitive components.

### Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<List>
	<ListItem>
		<Left>
			<Text>Simon Mignolet</Text>
		</Left>
		<Right>
			<Icon name="arrow-forward" />
		</Right>
	</ListItem>
	<ListItem>
		<Left>
			<Text>Nathaniel Clyne</Text>
		</Left>
		<Right>
			<Icon name="arrow-forward" />
		</Right>
	</ListItem>
	<ListItem>
		<Left>
			<Text>Dejan Lovren</Text>
		</Left>
		<Right>
			<Icon name="arrow-forward" />
		</Right>
	</ListItem>
</List>
```

</TabItem>
<TabItem value="v3">

```tsx
<VStack space={3} divider={<Divider />} w="90%">
	<HStack justifyContent="space-between">
		<Text>Simon Mignolet</Text>
		<Icon name="arrow-forward" />
	</HStack>
	<HStack justifyContent="space-between">
		<Text>Nathaniel Clyne</Text>
		<Icon name="arrow-forward" />
	</HStack>
	<HStack justifyContent="space-between">
		<Text>Dejan Lovren</Text>
		<Icon name="arrow-forward" />
	</HStack>
</VStack>
```

</TabItem>
</Tabs>
