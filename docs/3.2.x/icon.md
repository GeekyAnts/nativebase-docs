---
id: icon
title: Icon
---

You can use icons in multiple ways in NativeBase:

- Create icon by creating an SVG Icon.
- Create icon using createIcon function and use it as a component.
- Use a third-party icon library ( such as [@expo/vector-icons](https://github.com/expo/vector-icons) ), with `as` prop.

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Icon,Basic.tsx

```

Apart from the icons provided by [@expo/vector-icon](https://github.com/expo/vector-icons), you can also create custom icons using SVG. You can use all the components from [react-native-svg](https://github.com/react-native-svg/react-native-svg).

### NativeBase Icons

We provide a set of commonly used interface icons which you can directly use in your project. All our icons are create using [`createIcon`](icon#createicon) function from NativeBase.

```ComponentSnackPlayer path=components,primitives,Icon,AllIcons.tsx

```

### Custom Icon

```ComponentSnackPlayer path=components,primitives,Icon,CustomIcon.tsx

```

### Create Icon

```ComponentSnackPlayer path=components,primitives,Icon,CreateIcon.tsx

```

### Integration with Third Party Icons

```ComponentSnackPlayer path=components,primitives,Icon,ThirdPartyIcons.tsx

```

## Props

### Icon

```ComponentPropTable path=primitives,Icon,Icon.tsx  showStylingProps=true

```

### createIcon

```ComponentPropTable path=primitives,Icon,createIcon.tsx

```
