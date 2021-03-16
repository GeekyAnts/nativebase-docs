---
id: collapse
title: Collapse
---

`Collapse` is used to create regions of content that can expand or collapse with a simple animation.

## Implements

- [`Box`](box.md)
- [`LayoutAnimation`](https://reactnative.dev/docs/layoutanimation) from [`React Native`](https://reactnative.dev)

## Import

```jsx
import { Collapse } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Collapse%20Usage
import React from 'react';
import { NativeBaseProvider, Collapse, Text, Stack, Heading, Button, Center } from 'native-base';
function CollapseComponent() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Stack space={4} mx={8}>
      <Heading>Default Collapse</Heading>
      <Collapse isOpen={show}>
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert.
      </Collapse>
      <Button size="sm" colorScheme="emerald" onPress={handleToggle}>
        <Text color="white">Show {show ? 'Less' : 'More'}</Text>
      </Button>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CollapseComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Animation Duration

```SnackPlayer name=Collapse%20Animation Duration
import React from 'react';
import { Collapse, Stack, Text, Heading, Button, NativeBaseProvider, Center } from 'native-base';

function CollapseComponent () {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Stack space={4} mx={8}>
      <Heading>Collapse with duration</Heading>
      <Collapse duration={700} isOpen={show}>
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert.
      </Collapse>
      <Button size="sm" colorScheme="emerald" onPress={handleToggle}>
        <Text color="white">Show {show ? 'Less' : 'More'}</Text>
      </Button>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CollapseComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### With Callbacks(onAnimationStart & onAnimationEnd)

```SnackPlayer name=Collapse%20onAnimationStart & onAnimationEnd
import React from 'react';
import { Collapse, Stack, Heading, Button, Text, NativeBaseProvider, Center } from 'native-base';
function CollapseComponent () {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const [text, setText] = React.useState(
    'This text would change when the collapse animation start'
  );
  const handleText = () =>
    setText(
      show
        ? 'Collapse is open'
        : 'This text would change when the collapse animation start'
    );
  const [color, setColor] = React.useState('emerald');
  const handleColorToggle = () =>
    setColor(color === 'emerald' ? 'indigo' : 'emerald');
  return (
    <Stack space={4} mx={8}>
      <Heading>Collapse with callbacks</Heading>
      <Text>{text}</Text>
      <Collapse
        onAnimationEnd={handleColorToggle}
        onAnimationStart={handleText}
        isOpen={show}
      >
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert.
      </Collapse>
      <Button colorScheme={color} size="sm" onPress={handleToggle}>
        <Text color="white">Show {show ? 'Less' : 'More'}</Text>
      </Button>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CollapseComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name             | Type     | Description                                                                     | Default |
| ---------------- | -------- | ------------------------------------------------------------------------------- | ------- |
| isOpen           | boolean  | If true, the content will be visible.                                           | -       |
| duration         | number   | The animation duration(in ms) as it expands.                                    | -       |
| startingHeight   | number   | The height you want the content in it's collapsed state. Set to 0 by default.   | -       |
| endingHeight     | number   | The height you want the content in it's expanded state. Set to auto by default. | -       |
| onAnimationStart | function | The function to be called when the collapse animation starts.                   | -       |
| onAnimationEnd   | function | The function to be called when the collapse animation starts.                   | -       |
