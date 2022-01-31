## Grid

You can easily design layouts with [Row](/hstack) or [Column](/vstack) components.

## List

With NativeBase v3 we have removed List components because as it's very simple to create various list layout using primitive components.

### Code Comparison

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

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

</DocTabItem>
<DocTabItem value="v3">

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

</DocTabItem>
</DocTabs>
