---
id: collapse
title: Collapse
---

Collapse is used to create regions of content that can expand or collapse with a simple animation.

## Implements

- `Box` from native-base
- `LayoutAnimation` from react-native

## Import

```jsx
import { Collapse } from "native-base";
```

## Usage

```SnackPlayer name=Collapse%20Usage
import React from 'react';
import { Collapse, Stack, Heading, Button, Box, NativeBaseProvillapser } from 'native-base';
export default function () {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Stack space={4}>
      <Heading>Default Collapse</Heading>
      <Collapse isOpen={show}>
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert. Gummi bears ice cream I love cake chocolate bar jujubes powder.
        Sugar plum pie jujubes jelly cotton candy dragée chocolate bar liquorice
        sugar plum. I love caramels bonbon macaroon chocolate biscuit donut
        tart.
        <Box p={8} bg="black" />
      </Collapse>
      <Button size="sm" onPress={handleToggle}>
        Show {show ? 'Less' : 'More'}
      </Button>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CollapseComponent />
    </NativeBaseProvider>
  );
}
```

## Animation Duration, Starting Height and Ending Height

```SnackPlayer name=Collapse%20Animation Duration
import React from 'react';
import { Collapse, Stack, Heading, Button, Box, NativeBaseProvider } from 'native-base';

function CollapseComponent () {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Stack space={4}>
      <Heading>Duration(try changing animation duration using knobs)</Heading>
      <Collapse
        duration={700}
        isOpen={show}
        startingHeight={30}
        endingHeight={70}
      >
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert. Gummi bears ice cream I love cake chocolate bar jujubes powder.
        Sugar plum pie jujubes jelly cotton candy dragée chocolate bar liquorice
        sugar plum. I love caramels bonbon macaroon chocolate biscuit donut
        tart.
        <Box p={8} bg="black" />
      </Collapse>
      <Button size="sm" onPress={handleToggle}>
        Show {show ? 'Less' : 'More'}
      </Button>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CollapseComponent />
    </NativeBaseProvider>
  );
}
```

## onAnimationStart & onAnimationEnd

```SnackPlayer name=Collapse%20onAnimationStart & onAnimationEnd
import React from 'react';
import { Collapse, Stack, Heading, Button, Box, Text, NativeBaseProvider } from 'native-base';
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
  const [color, setColor] = React.useState('indigo');
  const handleColorToggle = () =>
    setColor(color === 'green' ? 'indigo' : 'green');
  return (
    <Stack space={4}>
      <Heading>onAnimationStart & onAnimationEnd</Heading>
      <Text>{text}</Text>
      <Collapse
        onAnimationEnd={handleColorToggle}
        onAnimationStart={handleText}
        startingHeight={40}
        isOpen={show}
      >
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert. Gummi bears ice cream I love cake chocolate bar jujubes powder.
        Sugar plum pie jujubes jelly cotton candy dragée chocolate bar liquorice
        sugar plum. I love caramels bonbon macaroon chocolate biscuit donut
        tart.
        <Box p={8} bg="black" />
      </Collapse>
      <Button colorScheme={color} size="sm" onPress={handleToggle}>
        Show {show ? 'Less' : 'More'}
      </Button>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CollapseComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Collapse

| Name             | Type     | Description                                                                     | Default |
| ---------------- | -------- | ------------------------------------------------------------------------------- | ------- |
| isOpen           | boolean  | If true, the content will be visible.                                           | -       |
| duration         | number   | The animation duration(in ms) as it expands.                                    | -       |
| startingHeight   | number   | The height you want the content in it's collapsed state. Set to 0 by default.   | -       |
| endingHeight     | number   | The height you want the content in it's expanded state. Set to auto by default. | -       |
| onAnimationStart | function | The function to be called when the collapse animation starts.                   | -       |
| onAnimationEnd   | function | The function to be called when the collapse animation starts.                   | -       |
| Component        |          |                                                                                 |         |
