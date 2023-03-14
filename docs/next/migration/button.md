---
id: button
title: Button
---

Migrating [`Button`](/button) to v3 will provide a lot more **design**, **size**, **color** and **customisation** options.

## Overview

Migrating Button components can broadly described in these points:

- No need to wrap your text inside `Text` component anymore.
- `isDisabled` prop can be used to disable the button.
- Icons in Button:
  `leftIcon` and `rightIcon` are the new alternative to iconLeft and iconRight respectively and they accept **tsx.Element**.
- Colors of the Buttons:
  In v3 the color is controlled by `colorScheme` prop. So all the color providing props [ **light**, **info**, **success**, **warning**, **danger** and **dark** ] can be passed as value (and more) to `colorScheme` props.
- Design of the Button:
  With v3 we're providing some most frequently used designs as `variants` [ **solid**, **outline**, **ghost**, **link** and **unstyled** ] and lot more customisation.
- Sizes of the Button:
  In v3 the size is controlled by `size` prop. And it accepts pre-defined sizes [ like xs, sm md, lg ] and also custom values.

## Code Comparison

## Colors to the Button

Besides option like **light**, **info**, **success**, **warning**, **danger** and **dark**. Now you can also provide colors like **red**, **blue**, **cyan**, **teal** and a lot more.

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_12.29.32_PM.png',
  }}
width={200}
height={100}
/>

```tsx
<Button success>
  <Text>Success</Text>
</Button>
```

</DocTabItem>
<DocTabItem value="v3">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_12.53.09_PM.png',
  }}
width={200}
height={100}
/>

```tsx
<Button colorScheme="success">Success</Button>
```

</DocTabItem>
</DocTabs>

### Sizes of the Button:

Besides option like **light**, **info**, **success**, **warning**, **danger** and **dark**. Now you can also provide colors like **red**, **blue**, **cyan**, **teal** and a lot more.

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_2.37.09_PM.png',
  }}
width={300}
height={100}
/>

```tsx
<Button small primary>
  <Text>Default Small</Text>
</Button>
```

</DocTabItem>
<DocTabItem value="v3">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_2.38.52_PM.png',
  }}
width={300}
height={100}
/>

```tsx
<Button size="sm" colorScheme="default">
  Default Small
</Button>
```

</DocTabItem>
</DocTabs>

### Designing the Button

With v3 you can combine variants and style props to create various designs.

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.16.25_PM.png',
  }}
width={200}
height={100}
/>

```tsx
<Button bordered success>
  <Text>Success</Text>
</Button>
```

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.23.42_PM.png',
  }}
width={200}
height={100}
/>

```tsx
<Button transparent success>
  <Text>Success</Text>
</Button>
```

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.17.11_PM.png',
  }}
width={200}
height={100}
/>

```tsx
<Button rounded success>
  <Text>Success</Text>
</Button>
```

</DocTabItem>
<DocTabItem value="v3">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.15.34_PM.png',
  }}
width={260}
height={100}
/>

```tsx
<Button variant="outline" colorScheme="success">
  Success
</Button>
```

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.22.36_PM.png',
  }}
width={200}
height={100}
/>

```tsx
<Button variant="ghost" colorScheme="success">
  Success
</Button>
```

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.20.36_PM.png',
  }}
width={260}
height={100}
/>

```tsx
<Button borderRadius="full" colorScheme="success">
  Success
</Button>
```

</DocTabItem>
</DocTabs>

### Icon Button

With v3 iconLeft and iconRight can now accepts tsx.Element as child and render the element at the appropriate place.

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.32.47_PM.png',
  }}
width={240}
height={100}
/>

```tsx
<Button iconLeft dark>
  <Icon name="cog" />
  <Text>Settings</Text>
</Button>
```

</DocTabItem>
<DocTabItem value="v3">

<Image
source={{
    uri:
      '/img/Button/Screenshot_2021-01-22_at_1.38.15_PM.png',
  }}
width={270}
height={100}
/>

```tsx
<Button
  leftIcon={<Icon name="cog-outline" as="Ionicons" color="white" />}
  colorScheme="dark"
>
  Settings
</Button>
```

</DocTabItem>
</DocTabs>
