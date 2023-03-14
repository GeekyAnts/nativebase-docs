---
id: flex
title: Flex
---

`Flex` provides helpful style shorthand and is a [`Box`](box.md) with `display: flex`.

## Import

```jsx
import { Flex, Spacer } from 'native-base';
```

- `Flex`: a **[Box](box.md)** with `display: flex`
- `Spacer`: creates an adjustable, empty space that can be used to tune the spacing between child elements within `Flex`

## Usage

Flex components come with some helpful shorthand props:

- `flexDirection` is `direction`
- `flexWrap` is `wrap`
- `alignItems` is `align`
- `justifyContent` is `justify`

While you can pass the verbose props, using the shorthand can save you some time.

## Example

```ComponentSnackPlayer path=primitives,Flex,basic.tsx

```

### Using the Spacer

You can pass Spacer to add Space between Flex items.

```ComponentSnackPlayer path=primitives,Flex,spacer.tsx

```

## Props

**Flex** implements **[Box](box.md)**, so all the Box Props can be passed to it, i.e. [`color`](utility-props#color-and-background-color), [`space`](utility-props#margin-and-padding), [`layout`](utility-props#layout-width-and-height), [`flexbox`](utility-props#flexbox) & [`border`](utility-props#borders) props from [style-system](utility-props).
