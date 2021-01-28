import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Migrating to v3 will provide a lot more **design**, **size**, **color** and **customisation** option.

## Overview

Migrating Badge components can broadly described in these points:

- Instead of Passing Icon as child, use `icon` prop.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
import React, { Component } from 'react';
import { Container, Header, View, Icon, Fab } from 'native-base';
export default function () {
	return (
		<Container>
			<Header />
			<View style={{ flex: 1 }}>
				<Fab
					direction="up"
					style={{ backgroundColor: '#5067FF' }}
					position="bottomRight"
				>
					<Icon name="share" />
				</Fab>
			</View>
		</Container>
	);
}
```

</TabItem>
<TabItem value="v3">

```tsx
import React from 'react';
import { Fab, Icon } from 'native-base';

export default function () {
	return (
		<Fab
			placement="bottomRight"
			colorScheme="blue"
			size="lg"
			icon={<Icon name="share" type="Entypo" />}
		/>
	);
}
```

</TabItem>
</Tabs>
