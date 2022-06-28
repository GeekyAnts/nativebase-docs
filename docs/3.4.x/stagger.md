---
id: stagger
title: Stagger
---

`Stagger` component provides a declarative API to add staggered transitions.

```jsx isShowcase
import React from 'react';
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
export const Example = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Box>
      <Box alignItems="center">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
        >
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="location-pin"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="microphone"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="video"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <HStack justifyContent="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </HStack>
    </Box>
  );
};
```

## Example

```ComponentSnackPlayer path=components,composites,Transitions,Stagger.tsx

```

## Props

```ComponentPropTable path=composites,Transitions,Stagger.tsx  showStylingProps=true

```

## IStaggerStyleProps

```js
interface IStaggerStyleProps extends ISupportedTransition {
  transition?: {
    stagger?: {
      /**
       * Delay to add to each child
       */
      offset: number,
      /**
       * When true, delay is added from the last child
       */
      reverse?: boolean,
    },

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
