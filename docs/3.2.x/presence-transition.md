---
id: presence-transition
title: PresenceTransition
---

PresenceTransition provides a declarative API to add entry and exit transitions.

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
