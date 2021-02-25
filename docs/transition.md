---
id: transition
title: Transition
---

NativeBase exports four components: `Fade`, `ScaleFade`, `Slide`, and `SlideFade` to provide simple transitions.

## Import

NativeBase exports 4 modal-related components:

- `Fade`: The wrapper that provides context and functionality for all children.
- `ScaleFade`: The empty part of the slider that shows the track.
- `Slide`: The filled part of the slider.
- `SlideFade`: The handle that's used to change the slider value.

```jsx
import {
  Fade,
  ScaleFade
  Slide,
  SlideFade
  SliderTrack,
  SliderFilledTrack,
SliderThumb,
} from "native-base";
```

## Fade

```SnackPlayer name=Transition%20Fade
import React from 'react';
import { Fade, Button, Box, NativeBaseProvider, Center } from 'native-base';
function FadeExample () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <Fade in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Fade
        </Box>
      </Fade>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FadeExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## ScaleFade

```SnackPlayer name=Transition%20ScaleFade
import React from 'react';
import { ScaleFade, Button, Box, NativeBaseProvider, Center } from 'native-base';
function ScaleFadeExample () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <ScaleFade in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          ScaleFade
        </Box>
      </ScaleFade>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ScaleFadeExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Slide

```SnackPlayer name=Transition%20Slide
import React from 'react';
import { Slide, Button, Box, NativeBaseProvider, Center } from 'native-base';
function SlideExample () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <Slide in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Slide
        </Box>
      </Slide>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SlideExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Slide wrapped inside parent

```SnackPlayer name=Transition%20Slide With Parent
import React from 'react';
import { Slide, Button, Box, Center, Heading, NativeBaseProvider } from 'native-base';
function SlideExample () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box width="90%" height="50%" alignItems="center" justifyContent="center">
      <Heading fontSize="xs">
        This is an example to show how slider can be used.
      </Heading>
      <Button my={2} onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <Center>
        The Force is strong with this one. I have you now. Look, I ain't in this
        for your revolution, and I'm not in it for you, Princess. I expect to be
        well paid. I'm in it for the money. What!? Hey, Luke! May the Force be
        with you. Remember, a Jedi can feel the Force flowing through him. All
        right. Well, take care of yourself, Han. I guess that's what you're best
        at, ain't it? In my experience, there is no such thing as luck. Kid,
        I've flown from one side of this galaxy to the other. I've seen a lot of
        strange stuff, but I've never seen anything to make me believe there's
        one all-powerful Force controlling everything. There's no mystical
        energy field that controls my destiny. It's all a lot of simple tricks
        and nonsense.
      </Center>
      <Slide in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Slide
        </Box>
      </Slide>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SlideExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Slide Composition

```SnackPlayer name=Transition%20Slide Composition
import React from 'react';
import { Slide, Button, Box, Center, Heading, NativeBaseProvider } from 'native-base';
function SlideExample () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Box width="90%" height="50%" alignItems="center" justifyContent="center">
        <Heading fontSize="xs">
          This is an example to show how slider can be used.
        </Heading>
        <Button my={2} onPress={() => setIsOpen(!isOpen)}>
          Click Me to {isOpen ? 'hide' : 'show'}
        </Button>
        <Center>
          The Force is strong with this one. I have you now. Look, I ain't in
          this for your revolution, and I'm not in it for you, Princess. I
          expect to be well paid. I'm in it for the money. What!? Hey, Luke! May
          the Force be with you. Remember, a Jedi can feel the Force flowing
          through him. All right. Well, take care of yourself, Han. I guess
          that's what you're best at, ain't it? In my experience, there is no
          such thing as luck. Kid, I've flown from one side of this galaxy to
          the other. I've seen a lot of strange stuff, but I've never seen
          anything to make me believe there's one all-powerful Force controlling
          everything. There's no mystical energy field that controls my destiny.
          It's all a lot of simple tricks and nonsense.
        </Center>
      </Box>
      <Slide in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Slide
        </Box>
      </Slide>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SlideExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## SlideFade

```SnackPlayer name=Transition%20SlideFade
import React from 'react';
import { SlideFade, Button, Box, NativeBaseProvider, Center } from 'native-base';
function SlideFadeExample () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <SlideFade in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          SlideFade
        </Box>
      </SlideFade>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SlideFadeExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Fade

| Name     | Type    | Description                                            | Default |
| -------- | ------- | ------------------------------------------------------ | ------- |
| in       | boolean | Show the component; triggers the enter or exit states. | -       |
| duration | number  | Duration of animation in mili second.                  | 500     |

### Scale Fade

| Name         | Type    | Description                                            | Default |
| ------------ | ------- | ------------------------------------------------------ | ------- |
| in           | boolean | Show the component; triggers the enter or exit states. | -       |
| duration     | number  | Duration of animation in mili second.                  | 500     |
| initialScale | number  | The initial scale to animate from.                     | 0.9     |

### Slide

| Name      | Type            | Description                                            | Default  |
| --------- | --------------- | ------------------------------------------------------ | -------- |
| in        | boolean         | Show the component; triggers the enter or exit states. | -        |
| duration  | number          | Duration of animation in mili second.                  | 500      |
| placement | `top` ,`bottom` | The direction to slide drawer from.                    | `bottom` |

### SlideFade

| Name     | Type    | Description                                            | Default |
| -------- | ------- | ------------------------------------------------------ | ------- |
| in       | boolean | Show the component; triggers the enter or exit states. | -       |
| duration | number  | Duration of animation in mili second.                  | 500     |
| offsetX  | number  | The initial offset to slide from.                      | 10      |
| offsetY  | number  | The initial offset to slide from.                      | 10      |
