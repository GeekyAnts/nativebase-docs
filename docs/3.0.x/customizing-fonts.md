---
id: customizingFonts
title: Customising Fonts
---

Follow 3 simple steps to add a custom font family.

### Loading fonts in Expo or React Native init project.

[Refer this guide if you're using Expo](https://docs.expo.io/guides/using-custom-fonts/)

[Refer this guide if you're using React Native init](https://aravindmnair.medium.com/add-custom-fonts-to-react-native-0-60-easily-in-3-steps-fcd71459f4c9)

### Extend NativeBase theme object.

We extend the theme object and override `fontConfig` and `fonts` properties which define the mappings.

This mapping is needed to make sure fontWeight, fontStyle properties work in all platforms.

```jsx
import { NativeBaseProvider, extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      // Add more variants
      //   700: {
      //     normal: 'Roboto-Bold',
      //   },
      //   800: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
      //   900: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
}
```

### Using fonts

Fonts can be used as shown below. The below `Text` will be rendered in `Roboto-MediumItalic` font family.

```jsx
<Text fontFamily="body" fontWeight={600} fontStyle="italic" />
```
