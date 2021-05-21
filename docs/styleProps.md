---
id: utility-props
title: Utility Props
---

Style props are a way to alter the style of a component by simply passing props to it. It helps to save time by providing helpful shorthand ways to style components.

## Style Props

The following table shows a list of every style prop and the properties within each group.

### Margin and padding

```SnackPlayer name=Margin%20and%20padding
import React from 'react';
import { Box as NBBox, NativeBaseProvider, Center } from 'native-base';

const Box = (props) => {
  return <NBBox borderRadius='md' bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      { /* m={2} refers to the value of `theme.space[2]` */ }
      <Box m={2} p={5} />
      { /* You can also use custom values */ }
      <Box mx="auto" px={20} py={5} />
      { /* sets margin `8px` on all viewports and `16px` from the first breakpoint and up */ }
      <Box m={[2, 3]} pt={10} pr={10} />
    </>
  );
}
export default function () {
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

```SnackPlayer name=Color%20and%20background%20COolor
import React from 'react';
import { Box as NBBox, NativeBaseProvider, Center, Text } from 'native-base';

const Box = (props) => {
  return <NBBox p={5} m={2} borderRadius='md' bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      { /* raw CSS color value */ }
      <Box bg='#fdba74' />
      { /* picks up a nested color value using dot notation */ }
      { /* => `theme.colors.lightBlue[300]` */ }
      <Box bgColor='lightBlue.200' py={3}
      >
        { /* using theme colors to set text color */ }
        <Text color='red.500' fontWeight='bold'> I ❤️   NativeBase</Text>
      </Box>
      { /* verbose prop */ }
      <Box backgroundColor='indigo.300' />
    </>
  );
}
export default function () {
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

### Typography

```SnackPlayer name=Typography
import React from 'react';
import { Text as NBText, NativeBaseProvider, Center } from 'native-base';

const Text = (props) => {
  return <NBText m={2} {...props} />
}

function Component() {
  return (
    <>
      { /* font-size of `theme.fontSizes.md` */ }
      <Text fontSize="md" >Sample Text </Text>
      { /* font-size `32px` */ }
      <Text fontSize={32} textDecoration='underline'>Sample Text </Text>
      { /* font-size `'2em'` */ }
      { /* font-size of `theme.fontWeights.bold` */ }
      <Text fontSize='2em' fontWeight='bold'>Sample Text </Text>
      { /* text-align `left` on all viewports and `center` from the first breakpoint and up */ }
      <Text textAlign={[ 'left', 'center' ]} >Sample Text </Text>
    </>
  );
}
export default function () {
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

```SnackPlayer name=Layout,%20width%20and%20height
import React from 'react';
import { Box as NBBox, NativeBaseProvider, Center } from 'native-base';

const Box = (props) => {
  return <NBBox m={2} borderRadius='md' bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      { /* verbose */ }
      <Box width="100%" height={8} />
      { /* shorthand */ }
      <Box w="100%" h="32px" />
      { /* use boxSizing */ }
      <Box boxSize={12} />
      { /* width `50%` */ }
      <Box w='50%' h={8} />
      { /* width `256px` h={8} */ }
      <Box w={256} />
      { /* width `'40px'` */ }
      <Box w='40px' h={8} />
    </>
  );
}
export default function () {
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

```SnackPlayer name=Flexbox
import React from 'react';
import { Box as NBBox, Flex, NativeBaseProvider, Center } from 'native-base';

const Box = (props) => {
  return <NBBox p={5} m={2} borderRadius='md' bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      { /* verbose */ }
      <NBBox display="flex" flexDirection="row" justifyContent="space-between">
        <Box />
        <Box />
        <Box />
      </NBBox>
      { /* shorthand using the `Flex` component */ }
      <Flex align="center" justify="center">
        <Box />
        <Box />
      </Flex>
    </>
  );
}
export default function () {
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

```SnackPlayer name=Borders
import React from 'react';
import { Box as NBBox, NativeBaseProvider, Center } from 'native-base';

const Box = (props) => {
  return <NBBox p={5} m={2} borderRadius='md' bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      <Box border={1} />
      <Box  borderWidth={2} borderColor='red.400' />
      <Box border={2} borderBottomColor='red.500' borderTopWidth={7} />
    </>
  );
}
export default function () {
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
| border            | border              | borders      |
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

```SnackPlayer name=Borders%20Radius
import React from 'react';
import { Box as NBBox, NativeBaseProvider, Center } from 'native-base';

const Box = (props) => {
  return <NBBox p={5} m={2} bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      { /* picks up a nested radius value using dot notation */ }
      { /* => `theme.radius.md` */ }
      <Box borderRadius='md' />
      <Box borderRadius='full' />
      { /* partial border radius */ }
      <Box borderLeftRadius={10} />
      { /* absolute value prop */ }
      <Box borderRadius={8} />
    </>
  );
}
export default function () {
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

```SnackPlayer name=Position
import React from 'react';
import { Box as NBBox, NativeBaseProvider, Center } from 'native-base';

const Box = (props) => {
  return <NBBox p={5} m={2} borderRadius='md' bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      <Box position='absolute' left={32} p={7} />
      <Box bgColor='orange.300'  zIndex={2} position='relative' />
      <Box backgroundColor='indigo.300' position='absolute' right={32} p={7} />
    </>
  );
}
export default function () {
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

```SnackPlayer name=Shadow
import React from 'react';
import { Box as NBBox, NativeBaseProvider, Center } from 'native-base';

const Box = (props) => {
  return <NBBox p={5} m={2} borderRadius='md' bg='emerald.200' {...props} />
}

function Component() {
  return (
    <>
      { /* => `theme.shadows.md` */ }
      <Box shadow={1} />
      <Box shadow={3} />
      <Box shadow={5} />
      <Box shadow={7} />
      <Box shadow={9} />
    </>
  );
}
export default function () {
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

| Prop    | Type                       | Description                                              |
| ------- | -------------------------- | -------------------------------------------------------- |
| \_stack | [IStackProps](stack#props) | Passed props will be provided to [`Stack`](stack) child. |
| \_text  | [ITextProps](text#props)   | Passed props will be provided to [`Text`](text) child.   |

### Interaction Props

Provides a way to pass props on certain interaction.

| Prop       | Type                    | Description                                     |
| ---------- | ----------------------- | ----------------------------------------------- |
| \_disabled | _Same as the component_ | Passed props will be applied on disabled state. |
| \_focus    | _Same as the component_ | Passed props will be applied on focused state.  |
| \_hover    | _Same as the component_ | Passed props will be applied on hovered state.  |
| \_invalid  | _Same as the component_ | Passed props will be applied on invalid state.  |
| \_pressed  | _Same as the component_ | Passed props will be applied on pressed state.  |

### Platform Props

Provides a way to pass props bassed on Platform (_android, ios or web_).

| Prop      | Type                    | Description                              |
| --------- | ----------------------- | ---------------------------------------- |
| \_android | _Same as the component_ | Passed props will be applied on android. |
| \_ios     | _Same as the component_ | Passed props will be applied on ios.     |
| \_web     | _Same as the component_ | Passed props will be applied on web.     |
