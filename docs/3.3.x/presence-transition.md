---
id: presence-transition
title: PresenceTransition
---

PresenceTransition provides a declarative API to add entry and exit transitions.

```jsx isShowcase
import React from 'react';
import {
  Button,
  Center,
  PresenceTransition,
  NativeBaseProvider,
} from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Center>
      <Button shadow={2} onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 250,
          },
        }}
      >
        <Center
          mt="7"
          bg="teal.500"
          rounded="md"
          w="200"
          h="100"
          _text={{
            color: 'white',
          }}
          shadow={2}
        >
          Fade
        </Center>
      </PresenceTransition>
    </Center>
  );
};
```

### Fade

```ComponentSnackPlayer path=components,composites,Transitions,Fade.tsx

```

### ScaleFade

```ComponentSnackPlayer path=components,composites,Transitions,ScaleFade.tsx

```

## Props

```ComponentPropTable path=components,composites,Transitions,PresenceTransition.tsx  showStylingProps=true

```

### ISupportedTransitions

```js
interface ISupportedTransitions {
  opacity?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: string;
}
```

### ITransitionStyleProps

```js
interface ITransitionStyleProps extends ISupportedTransitions {
  transition?: {
    type?: 'timing' | 'spring',
    easing?: (value: number) => number,
    overshootClamping?: boolean,
    restDisplacementThreshold?: number,
    restSpeedThreshold?: number,
    velocity?: number | { x: number, y: number },
    bounciness?: number,
    speed?: number,
    tension?: number,
    friction?: number,
    stiffness?: number,
    mass?: number,
    damping?: number,
    delay?: number,
    duration?: number,
    useNativeDriver?: boolean,
  };
}
```
