---
id: Column
title: Column
---

The mandatory wrapper for building Column Layouts

## Implements

- `View` from [react-native](https://reactnative.dev/docs/view)
- [`color`](https://styled-system.com/api/#color), [`space`](https://styled-system.com/api/#space), [`layout`](https://styled-system.com/api/#layout), [`flexbox`](https://styled-system.com/api/#flexbox) & [`border`](https://styled-system.com/api/#border) from [`style-system`](https://styled-system.com/api/)

## Example

```SnackPlayer name=Columns%20Example
import React from "react";
import { Column, Text, NativeBaseProvider } from "native-base";
function ColumnComponent() {
  return (
    <Column borderRadius={4} flexGrow={1} bg="green.500">
      <Text>Test Text</Text>
      <Text>Testing this text with HStacks</Text>
    </Column>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ColumnComponent />
    </NativeBaseProvider>
  );
};
}
```

## Extra props

- `children` : Renders components as `Box` children. Accepts a `JSX.Element` or an array of `JSX.Element`.
- `space` : Adds space between the children. Accepts a number.

# Column

This is the Box to be used inside Columns.

## Implements

- `VStack` from nativebase

## Example

```jsx
<Columns space={3} height={100} mb={3}>
	<Column borderRadius={4} shadow={1} flexGrow={1} bg='green.500' />
	<Column borderRadius={4} shadow={1} width={1 / 2.5} bg='pink.300' />
	<Column borderRadius={4} shadow={1} flexGrow={1.5} bg='indigo.800' />
</Columns>
```

## Props

### Column

| Name   | Type   | Description                                              | Default |
| ------ | ------ | -------------------------------------------------------- | ------- |
| shadow | number | Applies column shadow and accepts a number from 0 to 9 . | -       |
