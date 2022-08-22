---
id: utility-props
title: Utility Props
---

Style props are a way to alter the style of a component by simply passing props to it. It helps to save time by providing helpful shorthand ways to style components.

## Style Props

The following table shows a list of every style prop and the properties within each group.

### Margin and padding

```jsx isLive=true
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";

const NBBox = (props) => {
  return <Box borderRadius="md" bg="primary.600" {...props} />;
};

function Component() {
  return (
    <>
      {/* m="2" refers to the value of `theme.space[2]` */}
      <NBBox m="2" p="5" />
      {/* You can also use custom values */}
      <NBBox mx="auto" px="20" py="5" />
      {/* sets margin `8px` on all viewports and `16px` from the first breakpoint and up */}
      <NBBox m={[2, 3]} pt="10" pr="10" />
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop              | CSS Equivalent                 | Theme Key |
| ----------------- | ------------------------------ | --------- |
| m, margin         | margin                         | space     |
| mt, marginTop     | margin-top                     | space     |
| mr, marginRight   | margin-right                   | space     |
| mb, marginBottom  | margin-bottom                  | space     |
| ml, marginLeft    | margin-left                    | space     |
| mx                | margin-left and margin-right   | space     |
| my                | margin-top and margin-bottom   | space     |
| p, padding        | padding                        | space     |
| pt, paddingTop    | padding-top                    | space     |
| pr, paddingRight  | padding-right                  | space     |
| pb, paddingBottom | padding-bottom                 | space     |
| pl, paddingLeft   | padding-left                   | space     |
| px                | padding-left and padding-right | space     |
| py                | padding-top and padding-bottom | space     |

### Color and background color

```jsx isLive=true
import React from "react";
import { Box, NativeBaseProvider, Center, Text } from "native-base";

function NBBox(props) {
  return <Box p="5" m="2" borderRadius="md" bg="primary.200" {...props} />;
}

function Component() {
  return (
    <>
      {/* raw CSS color value */}
      <NBBox bg="#10b981" />
      {/* picks up a nested color value using dot notation */}
      {/* => `theme.colors.lightBlue[300]` */}
      <NBBox bgColor="cyan.100" py="3">
        {/* using theme colors to set text color */}
        <Text color="cyan.500" fontWeight="bold">
          {" "}
          I love NativeBase
        </Text>
      </NBBox>
      {/* verbose prop */}
      <NBBox backgroundColor="#eab308" />
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop           | CSS Eqquivalent  | Theme Key |
| -------------- | ---------------- | --------- |
| color          | color            | colors    |
| bg, background | background       | colors    |
| bgColor        | background-color | colors    |
| opacity        | opacity          | -         |

<br></br>

:::note

Above props can be written in the format: [`color`]:alpha.[`opacityToken`], this gets converted into RGBA color format and the opacityToken is mapped to [`Opacity`](default-theme#opacity)

:::

<br />

```jsx isLive=true
import React from "react";
import { HStack, Stack, Center, NativeBaseProvider } from "native-base";
function App() {
  return (
    <Stack space="2" alignItems="center">
      <HStack space="2" alignItems="center">
        <Center
          size="16"
          bg="primary.400:alpha.30"
          rounded="md"
          _text={{
            color: "white",
          }}
        >
          Box 1
        </Center>
        <Center
          size="16"
          bg="primary.400:alpha.70"
          rounded="md"
          _text={{
            color: "white",
          }}
        >
          Box 2
        </Center>
        <Center
          bg="primary.400"
          size="16"
          rounded="md"
          _text={{
            color: "white",
          }}
          shadow="1"
        >
          Box 3
        </Center>
      </HStack>
    </Stack>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <App />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Typography

```jsx isLive=true
import React from "react";
import { Text, NativeBaseProvider, Center } from "native-base";

const NBText = (props) => {
  return <Text m="2" {...props} />;
};

function Component() {
  return (
    <>
      {/* font-size of `theme.fontSizes.2xl` */}
      <NBText fontSize="2xl" fontWeight="bold">
        Thank You{" "}
      </NBText>
      {/* text decoration `underline` */}
      <NBText textDecoration="underline">Merci Beaucoup</NBText>
      {/* font-size `'2em'` */}
      {/* font-weight of `theme.fontWeights.semibold i.e. 600` */}
      <NBText fontWeight="bold">Danke sehr </NBText>
      {/* letter-spacing `0.1 em` */}
      <NBText letterSpacing="2xl">Arigatou </NBText>
    </>
  );
}
export function Example() {
  return (
    <Center flex={1}>
      <Component />
    </Center>
  );
}
```

<br />

| Prop           | CSS Eqquivalent | Theme Key      |
| -------------- | --------------- | -------------- |
| fontFamily     | font-family     | fonts          |
| fontSize       | font-size       | fontSizes      |
| fontWeight     | font-weight     | fontWeights    |
| lineHeight     | line-height     | lineHeights    |
| letterSpacing  | letter-spacing  | letterSpacings |
| textAlign      | text-align      | -              |
| fontStyle      | font-style      | -              |
| textTransform  | text-transform  | -              |
| textDecoration | text-decoration | -              |

### Layout, width and height

```jsx isLive=true
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";

const NBBox = (props) => {
  return <Box m="2" borderRadius="md" bg="primary.600" {...props} />;
};

function Component() {
  return (
    <>
      {/* verbose */}
      <NBBox width="100%" height="8" />
      {/* shorthand */}
      <NBBox w="100%" h="32px" />
      {/* use boxSizing */}
      <NBBox boxSize="12" />
      {/* width `50%` */}
      <NBBox w="50%" h="8" />
      {/* width `256px` h="8" */}
      <NBBox w="256" />
      {/* width `"40px"` */}
      <NBBox w="40px" h="8" />
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop            | CSS Eqquivalent | Theme Key |
| --------------- | --------------- | --------- |
| w, width        | width           | sizes     |
| h, height       | height          | sizes     |
| minW, minWidth  | min-width       | sizes     |
| maxW, maxWidth  | max-width       | sizes     |
| minH, minHeight | min-height      | sizes     |
| maxH, maxHeight | max-height      | sizes     |
| d, display      | display         | -         |
| boxSize         | width, height   | sizes     |
| verticalAlign   | vertical-align  | -         |
| overflow        | overflow        | -         |
| overflowX       | overflowX       | -         |
| overflowY       | overflowY       | -         |

### Flexbox

```jsx isLive=true
import React from "react";
import { Box, Flex, NativeBaseProvider, Center } from "native-base";

const NBBox = (props) => {
  return <Box p="5" m="2" borderRadius="md" bg="primary.600" {...props} />;
};

function Component() {
  return (
    <>
      {/* verbose */}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <NBBox />
        <NBBox />
        <NBBox />
      </Box>
      {/* shorthand using the `Flex` component */}
      <Flex align="center" justify="center">
        <NBBox />
        <NBBox />
      </Flex>
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop                                | CSS Eqquivalent | Theme Key |
| ----------------------------------- | --------------- | --------- |
| alignItems, \*align                 | align-items     | -         |
| alignContent                        | align-content   | -         |
| justifyItems                        | justify-items   | -         |
| justifyContent, \*justify           | justify-content | -         |
| flexWrap, \*wrap                    | flex-wrap       | -         |
| flexDirection, flexDir, \*direction | flex-direction  | -         |
| flex                                | flex            | -         |
| flexGrow                            | flex-grow       | -         |
| flexShrink                          | flex-shrink     | -         |
| flexBasis                           | flex-basis      | -         |
| justifySelf                         | justify-self    | -         |
| alignSelf                           | align-self      | -         |
| order                               | order           | -         |

### Borders

```jsx isLive=true
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";

const NBBox = (props) => {
  return <Box p="5" m="2" borderRadius="md" bg="primary.200" {...props} />;
};

function Component() {
  return (
    <>
      <NBBox borderWidth="1" borderColor="cyan.500" />
      <NBBox borderWidth="2" borderColor="cyan.500" />
      <NBBox borderColor="cyan.500" borderTopWidth="7" />
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop              | CSS Eququivalent    | Theme Field  |
| ----------------- | ------------------- | ------------ |
| borderWidth       | border-width        | borderWidths |
| borderStyle       | border-style        | borderStyles |
| borderColor       | border-color        | colors       |
| borderTop         | border-top          | borders      |
| borderTopWidth    | border-top-width    | borderWidths |
| borderTopStyle    | border-top-style    | borderStyles |
| borderTopColor    | border-top-color    | colors       |
| borderRight       | border-right        | borders      |
| borderRightWidth  | border-right-width  | borderWidths |
| borderRightStyle  | border-right-style  | borderStyles |
| borderRightColor  | border-right-color  | colors       |
| borderBottom      | border-bottom       | borders      |
| borderBottomWidth | border-bottom-width | borderWidths |
| borderBottomStyle | border-bottom-style | borderStyles |
| borderBottomColor | border-bottom-color | colors       |
| borderLeft        | border-left         | borders      |
| borderLeftWidth   | border-left-width   | borderWidths |
| borderLeftStyle   | border-left-style   | borderStyles |
| borderLeftColor   | border-left-color   | colors       |

### Borders Radius

```jsx isLive=true
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";

const NBBox = (props) => {
  return <Box p="5" m="2" bg="primary.500" {...props} />;
};

function Component() {
  return (
    <>
      {/* picks up a nested radius value using dot notation */}
      {/* => `theme.radius.md` */}
      <NBBox borderRadius="md" />
      <NBBox borderRadius="full" />
      {/* partial border radius */}
      <NBBox borderLeftRadius="10" />
      {/* absolute value prop */}
      <NBBox borderRadius="8" />
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop                    | CSS Eququivalent                                       | Theme Field |
| ----------------------- | ------------------------------------------------------ | ----------- |
| borderRadius            | border-radius                                          | radii       |
| borderTopLeftRadius     | border-top-left-radius                                 | radii       |
| borderTopRightRadius    | border-top-right-radius                                | radii       |
| borderBottomRightRadius | border-bottom-right-radius                             | radii       |
| borderBottomLeftRadius  | border-bottom-left-radius                              | radii       |
| borderTopRadius         | border-top-left-radius & border-top-right-radius       | radii       |
| borderRightRadius       | border-top-right-radius & border-bottom-right-radius   | radii       |
| borderBottomRadius      | border-bottom-left-radius & border-bottom-right-radius | radii       |
| borderLeftRadius        | border-top-left-radius & border-bottom-left-radius     | radii       |

### Position

```jsx isLive=true
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";

const NBBox = (props) => {
  return <Box p="5" borderRadius="md" bg="primary.400" {...props} />;
};

function Component() {
  return (
    <Box justifyContent="center" alignItems="center" flexDirection="row">
      <NBBox position="relative" p="7" />
      <NBBox bg="yellow.400" zIndex={2} position="absolute" />
      <NBBox bg="emerald.400" position="relative" p="7" />
    </Box>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop         | CSS Equivalent | Theme Field |
| ------------ | -------------- | ----------- |
| pos,position | position       | -           |
| zIndex       | z-index        | zIndices    |
| top          | top            | space       |
| right        | right          | space       |
| bottom       | bottom         | space       |
| left         | left           | space       |

### Shadow

```jsx isLive=true
import React from "react";
import { Box, NativeBaseProvider, Center } from "native-base";

const NBBox = (props) => {
  return <Box p="5" m="2" borderRadius="md" bg="primary.500" {...props} />;
};

function Component() {
  return (
    <>
      {/* => `theme.shadows.md` */}
      <NBBox shadow="1" />
      <NBBox shadow="3" />
      <NBBox shadow="5" />
      <NBBox shadow="7" />
      <NBBox shadow="9" />
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop   | CSS Equivalent | Theme Field |
| ------ | -------------- | ----------- |
| shadow | box-shadow     | shadows     |

## Underscore Props

### Internal Props

Provides a way to pass props to child components inside Composite componets.

```jsx isLive=true
import React from "react";
import { Button, NativeBaseProvider, Center } from "native-base";

function App() {
  return (
    <Button
      _text={{
        // below props will will let you style the text of the button
        color: "primary.100",
        fontSize: "md",
        fontWeight: "bold",
        underline: true,
      }}
    >
      Save
    </Button>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <App />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop    | Type                          | Description                                              |
| ------- | ----------------------------- | -------------------------------------------------------- |
| \_stack | [IStackProps](stack#h2-props) | Passed props will be provided to [`Stack`](stack) child. |
| \_text  | [ITextProps](text#h2-props)   | Passed props will be provided to [`Text`](text) child.   |

### Interaction Props

Provides a way to pass props on certain interaction.

```jsx isLive=true
import React from "react";
import { Button, NativeBaseProvider, Center } from "native-base";

function App() {
  return (
    <Button
      colorScheme="yellow"
      _pressed={{
        // below props will only be applied on button is pressed
        bg: "yellow.600",
        _text: {
          color: "warmGray.50",
        },
      }}
    >
      Save
    </Button>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <App />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop       | Type                    | Description                                     |
| ---------- | ----------------------- | ----------------------------------------------- |
| \_disabled | _Same as the component_ | Passed props will be applied on disabled state. |
| \_focus    | _Same as the component_ | Passed props will be applied on focused state.  |
| \_hover    | _Same as the component_ | Passed props will be applied on hovered state.  |
| \_invalid  | _Same as the component_ | Passed props will be applied on invalid state.  |
| \_pressed  | _Same as the component_ | Passed props will be applied on pressed state.  |

### Platform Props

Provides a way to pass props bassed on Platform (_android, ios or web_).

```jsx isLive=true
import React from "react";
import { Button, NativeBaseProvider, Center } from "native-base";

function App() {
  return (
    <Button
      _web={{
        // below props will only be applied on 'web' platform
        bg: "yellow.400",
        _text: {
          color: "coolGray.800",
          fontWeight: "medium",
        },
        _pressed: {
          // below props will only be applied on button is pressed
          bg: "yellow.600",
          _text: {
            color: "warmGray.50",
          },
        },
      }}
    >
      Save
    </Button>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <App />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br />

| Prop      | Type                    | Description                              |
| --------- | ----------------------- | ---------------------------------------- |
| \_android | _Same as the component_ | Passed props will be applied on android. |
| \_ios     | _Same as the component_ | Passed props will be applied on ios.     |
| \_web     | _Same as the component_ | Passed props will be applied on web.     |
