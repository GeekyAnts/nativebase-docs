---
id: slide
title: Slide
metaTitle: Slider | NativeBase
metaDescription: The slider component in NativeBase allows users to select options from a given range of values. Explore slider colors, values, size, and more with examples here.
---

Slide component provides a declarative API to add sliding transitions.

## Import

## Examples

### Slide

```ComponentSnackPlayer path=composites,Transitions,Slide.tsx

```

### Slide wrapped inside parent

```ComponentSnackPlayer path=composites,Transitions,SlideWrapped.tsx

```

### Slide Composition

```ComponentSnackPlayer path=composites,Transitions,SlideComposition.tsx

```

## Props

### Slide

| Name      | Type                             | Description                                            | Default  |
| --------- | -------------------------------- | ------------------------------------------------------ | -------- |
| in        | boolean                          | Show the component; triggers the enter or exit states. | -        |
| duration  | number                           | Duration of animation in mili second.                  | 500      |
| placement | `top` ,`bottom`, `left`, `right` | The direction to slide drawer from.                    | `bottom` |
