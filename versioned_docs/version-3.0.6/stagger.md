---
id: stagger
title: Stagger
---

Stagger component provides a declarative API to add Staggered Transitions.

## Example

```ComponentSnackPlayer path=composites,Transitions,Stagger.tsx

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
