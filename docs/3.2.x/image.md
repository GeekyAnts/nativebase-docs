---
id: image
title: Image
---

Generic Image components from [React Native](https://reactnative.dev).

## Implements

- [`Image`](https://reactnative.dev/docs/image) from [React Native](https://reactnative.dev).
- You can use all props of React native Image.

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Image,Basic.tsx

```

### Sizes

```ComponentSnackPlayer path=components,primitives,Image,Sizes.tsx

```

### Border Radius

```ComponentSnackPlayer path=components,primitives,Image,BorderRadius.tsx

```

### Fallback

```ComponentSnackPlayer path=components,primitives,Image,FallbackSupport.tsx

```

### Basic (With Ref)

```ComponentSnackPlayer path=components,primitives,Image,WithRef.tsx

```

## Props

```ComponentPropTable path=primitives,Image,index.tsx  showStylingProps=true

```

## Note

### With Next's require statement

When using require statement from next for image, keep this in mind.

```jsx

  const img = require('/public/me.jpg');
  // DO ✔
  <Image
    source={{ uri: img.default.src }}
    width={500}
    height={500}
  />
  // DON'T ✘
  <Image
    source={img}
    width={500}
    height={500}
  />

```
