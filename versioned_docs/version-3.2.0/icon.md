---
id: icon
title: Icon
---

You can use icons in multiple ways in NativeBase:

- Create icon by creating an SVG Icon
- Create icon using createIcon function and use it as a component
- Use a third-party icon library ( such as [@expo/vector-icons](https://github.com/expo/vector-icons) ), with `as` prop.

## Examples

### Basic

```ComponentSnackPlayer path=primitives,Icon,Basic.tsx

```

Apart from the icons provided by [@expo/vector-icon](https://github.com/expo/vector-icons), you can also create custom icons using SVG. You can use all the components from [react-native-svg](https://github.com/react-native-svg/react-native-svg).

### NativeBase Icons

We provides a set of commonly used interface icons. So you can directly use them in your project. All our icons are create using [`createIcon`](icon#createicon) function from NativeBase.

```ComponentSnackPlayer path=primitives,Icon,AllIcons.tsx

```

### Custom Icon

```ComponentSnackPlayer path=primitives,Icon,CustomIcon.tsx

```

### Create Icon

```ComponentSnackPlayer path=primitives,Icon,CreateIcon.tsx

```

## Props

### Icon

```ComponentPropTable path=primitives,Icon,Icon.tsx  showStylingProps=true

```

### createIcon

```ComponentPropTable path=primitives,Icon,createIcon.tsx

```
