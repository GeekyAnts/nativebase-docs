import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Migrating to v3 will provide a lot more **design**, **size**, **color** and **customisation** option.

## Overview

Migrating Checkbox components can broadly described in these points:

- In v3 `Radio` can only used along with `RadioGroup`.
- Colors of the Checkbox:
  In v3 the color is controlled by `colorScheme` prop. And it accepts all the color available in the theme.
- onPress props is deprecated, instead v3 provides onChange which provides a callback when state of the checkbox change.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
<Radio selected={true} />
```

</TabItem>
<TabItem value="v3">

```tsx
<RadioGroup defaultValue="1" name="myRadioGroup">
	<Radio value="1" />
</RadioGroup>
```

</TabItem>
</Tabs>
