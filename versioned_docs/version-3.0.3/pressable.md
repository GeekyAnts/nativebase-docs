---
id: pressable
title: Pressable
---

Pressable is a lower level primitive if you need more flexibility than a button and access to hover, pressed and focus events.

## Examples

### Basic

Pressable accepts most of the utility style system props.

```ComponentSnackPlayer path=primitives,Pressable,Basic.tsx

```

### Accessing events (hover, focus and pressed)

Pressable accepts a render prop children, which receives isHovered, isFocused and isPressed props.

```ComponentSnackPlayer path=primitives,Pressable,Events.tsx

```

## Props

### Pressable

```ComponentPropTable path=primitives,Pressable,Pressable.tsx showStylingProps=true

```
