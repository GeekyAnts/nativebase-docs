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
  return <NBBox borderRadius='md' bg='primary.600' {...props} />
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
      <Center flex="1">
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
  return <NBBox p={5} m={2} borderRadius="md" bg="primary.200" {...props} />;
};

function Component() {
  return (
    <>
      {/* raw CSS color value */}
      <Box bg="#10b981" />
      {/* picks up a nested color value using dot notation */}
      {/* => `theme.colors.lightBlue[300]` */}
      <Box bgColor="cyan.100" py={3}>
        {/* using theme colors to set text color */}
        <Text color="cyan.500" fontWeight="bold">
          {' '}
          I love NativeBase
        </Text>
      </Box>
      {/* verbose prop */}
      <Box backgroundColor="#eab308" />
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

<br></br>

:::tip Note

Above props can be written in the format: {color}:alpha.{opacityToken}, this gets converted into RGBA color format and the opacityToken is mapped to [`Opacity`](default-theme#opacity)

:::

<br />

```SnackPlayer name=Alpha%20Opacity%20Usage

import React from "react"
import { HStack, Stack, Center, NativeBaseProvider } from "native-base"
export function Example() {
  return (
    <Stack space={2} alignItems="center">
      <HStack space={2} alignItems="center">
        <Center
          size={16}
          bg="primary.400:alpha.30"
          rounded="md"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          Box 1
        </Center>
        <Center
          size={16}
          bg="primary.400:alpha.70"
          rounded="md"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          Box 2
        </Center>
        <Center
          bg="primary.400"
          size={16}
          rounded="md"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          Box 3
        </Center>
      </HStack>
    </Stack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}

```

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
      { /* font-size of `theme.fontSizes.2xl` */ }
      <Text fontSize="2xl" fontWeight="bold" >Thank You </Text>
      { /* text decoration `underline` */ }
      <Text textDecoration='underline'>Merci Beaucoup</Text>
      { /* font-size `'2em'` */ }
      { /* font-weight of `theme.fontWeights.semibold i.e. 600` */ }
      <Text fontWeight='semibold'>Danke sehr </Text>
      { /* letter-spacing `0.1 em` */ }
      <Text letterSpacing="2xl" >Arigatou </Text>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
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
  return <NBBox m={2} borderRadius='md' bg='primary.600' {...props} />
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
      <Center flex="1">
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
  return <NBBox p={5} m={2} borderRadius='md' bg='primary.600' {...props} />
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
      <Center flex="1">
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
  return <NBBox p={5} m={2} borderRadius="md" bg="primary.200" {...props} />;
};

function Component() {
  return (
    <>
      <Box border={1} borderColor="cyan.500" />
      <Box borderWidth={2} borderColor="cyan.500" />
      <Box border={2} borderColor="cyan.500" borderTopWidth={7} />
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
  return <NBBox p={5} m={2} bg='primary.500' {...props} />
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
      <Center flex="1">
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
  return <NBBox p={5} m={2} borderRadius='md' bg='primary.400' {...props} />
}

function Component() {
  return (
    <>
      <Box position='absolute' left={32} p={7} />
      <Box bgColor='yellow.400'  zIndex={2} position='relative' />
      <Box backgroundColor='emerald.400' position='absolute' right={32} p={7} />
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
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
  return <NBBox p={5} m={2} borderRadius='md' bg='primary.500' {...props} />
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
      <Center flex="1">
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

```SnackPlayer name=Internal
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function Example() {
  return (
      <Button
        _text= {{
          // below props will will let you style the text of the button
          color: 'primary.100',
          fontSize: 'md',
          fontWeight: 'bold',
          underline:true
        }}
      >
        Save
      </Button>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
}

```

<br />

| Prop    | Type                       | Description                                              |
| ------- | -------------------------- | -------------------------------------------------------- |
| \_stack | [IStackProps](stack#props) | Passed props will be provided to [`Stack`](stack) child. |
| \_text  | [ITextProps](text#props)   | Passed props will be provided to [`Text`](text) child.   |

### Interaction Props

Provides a way to pass props on certain interaction.

```SnackPlayer name=Internal
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function Example() {
  return (
      <Button
        colorScheme="yellow"
        _pressed={{
          // below props will only be applied on button is pressed
          bg: 'yellow.600',
          _text:{
            color: 'warmGray.50'
          }
        }}
      >
        Save
      </Button>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <Example />
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

```SnackPlayer name=Internal
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function Example() {
  return (
    <Button
      _web={{
        // below props will only be applied on 'web' platform
        bg: 'yellow.400',
        _text: {
          color: 'coolGray.800',
          fontWeight: 'medium',
        },
        _pressed: {
          // below props will only be applied on button is pressed
          bg: 'yellow.600',
          _text: {
            color: 'warmGray.50',
          },
        },
      }}>
      Save
    </Button>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <Example />
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
