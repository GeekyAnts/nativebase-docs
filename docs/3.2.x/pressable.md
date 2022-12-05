---
id: pressable
title: Pressable
metaTitle: Pressable | NativeBase
metaDescription: Pressable in NativeBase is a lower level primitive for more flexibility than a button and access to hover, pressed, and focused events. Read More on Pressable here.
---

Pressable is a lower level primitive if you need more flexibility than a button and access to hover, pressed and focus events.

## Examples

### Basic

Pressable accepts most of the utility style system props.

```ComponentSnackPlayer path=components,primitives,Pressable,Basic.tsx

```

### Accessing events (hover, focus and pressed)

Pressable accepts a render prop children, which receives isHovered, isFocused and isPressed props.

```ComponentSnackPlayer path=components,primitives,Pressable,Events.tsx

```

## Props

### Pressable

```ComponentPropTable path=primitives,Pressable,Pressable.tsx showStylingProps=true

```
