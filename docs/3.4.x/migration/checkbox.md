---
id: checkbox
title: Checkbox
---

Migrating [`Checkbox`](/checkbox) to v3 will provide a lot more **design**, **size**, **color** and **customisation** option.

## Overview

Migrating Checkbox components can broadly described in these points:

- **checked** props is deprecated, instead now we provide you with `defaultIsChecked` and `isChecked` prop to better manage your checkbox. For most cases **checked** can be replaced with `isChecked`.
- Colors of the Checkbox:
  In v3 the color is controlled by `colorScheme` prop. And it accepts all the color available in the theme.
- onPress props is deprecated, instead v3 provides onChange which provides a callback when state of the checkbox change.

## Code Comparison

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
      '/img/Checkbox/Screenshot_2021-01-22_at_3.09.29_PM.png',
  }}
width={500}
height={100}
/>

```tsx
<CheckBox checked={true} color="green"/>
<Body>
  <Text>Finish list Screen</Text>
</Body>
```

</DocTabItem>
<DocTabItem value="v3">

<Image
source={{
    uri:
      '/img/Checkbox/Screenshot_2021-01-22_at_4.34.08_PM.png',
  }}
width={500}
height={100}
/>

```tsx
<Checkbox isChecked colorScheme="green" />
<Text>Finish list Screen</Text>
// alternative: pressing the text will also trigger onChange
<Checkbox isChecked colorScheme="green">
	Finish list Screen
</Checkbox>
```

</DocTabItem>
</DocTabs>
