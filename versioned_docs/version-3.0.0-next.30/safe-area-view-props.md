---
id: safe-area-view-props
title: SafeAreaView Props
---

To make your components respect the [SafeAreaView](https://reactnative.dev/docs/safeareaview) of the device, we have provided some props that you can use with Box component. They apply a safe padding to your component in the parts decided by the passed props.

- `safeArea`: Apply safe padding to all edges.
- `safeAreaX`: Apply safe padding to x direction.
- `safeAreaY`: Apply safe padding to y direction.
- `safeAreaTop`: Apply safe padding to top.
- `safeAreaBottom`: Apply safe padding to bottom.
- `safeAreaLeft`: Apply safe padding to left.
- `safeAreaRight`: Apply safe padding to right.

Internally, NativeBase uses [useSafeAreaInsets](https://docs.expo.io/versions/latest/sdk/safe-area-context/#hooks) hook of [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context).

:::info
SafeAreaView props can only be applied on [View](view.md). To make you App SafeArea safe, just wrap your app with a View and pass safeArea prop to it.
:::
