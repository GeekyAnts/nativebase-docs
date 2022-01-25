---
id: testing
title: Testing
---

NativeBase works with react-native's jest preset or expo's jest-expo preset. However, there's one thing you'll need to do for it to work as expected.

### Adding initialWindowMetrics in NativeBaseProvider.

- NativeBaseProvider uses [SafeAreaContext](https://github.com/th3rdwave/react-native-safe-area-context#testing) which needs initialWindowMetrics to be passed to the Provider while testing.

Not following the above may lead to an error related to SafeAreaProvider while running `yarn test`.

To fix the above issue, you can simply pass initialWindowMetrics to NativeBaseProvider in your tests.

```jsx
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

<NativeBaseProvider initialWindowMetrics={inset}>
  {children}
</NativeBaseProvider>;
```
