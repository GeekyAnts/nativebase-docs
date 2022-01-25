---
id: slide
title: Slide
---

Slide component provides a declarative API to add sliding transitions.

## Import

## Examples

### Slide

```ComponentSnackPlayer path=components,composites,Transitions,Slide.tsx

```

### Slide wrapped inside parent

```ComponentSnackPlayer path=components,composites,Transitions,SlideWrapped.tsx

```

### Slide Composition

```ComponentSnackPlayer path=components,composites,Transitions,SlideComposition.tsx

```

## Props

### Slide

| Name      | Type                             | Description                                            | Default  |
| --------- | -------------------------------- | ------------------------------------------------------ | -------- |
| in        | boolean                          | Show the component; triggers the enter or exit states. | -        |
| duration  | number                           | Duration of animation in mili second.                  | 500      |
| placement | `top` ,`bottom`, `left`, `right` | The direction to slide drawer from.                    | `bottom` |
