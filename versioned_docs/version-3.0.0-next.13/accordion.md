---
id: accordion
title: Accordion
---

## Implements

- `Collapse`, `Box` from native-base

## Import

```jsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from 'native-base';
```

## Usage

```SnackPlayer name=Accordian%20Usage
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  NativeBaseProvider,
} from "native-base";

function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion index={[0, 1]}>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 1 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 2 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 3 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AccordionComponent />
    </NativeBaseProvider>
  );
}
```

## Multiple

```SnackPlayer name=Accordian%20Multiple
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  NativeBaseProvider,
} from "native-base";
function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 1 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 2 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 3 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AccordionComponent />
    </NativeBaseProvider>
  );
}
```

## Default Index

```SnackPlayer name=Accordian%20DefaultIndex
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  NativeBaseProvider,
} from "native-base";
function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[0, 2]}>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 1 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 2 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 3 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AccordionComponent />
    </NativeBaseProvider>
  );
}
```

## Toggle

```SnackPlayer name=Accordian%20Toggle
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  NativeBaseProvider,
} from "native-base";
function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowToggle defaultIndex={[2]}>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 1 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 2 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box>Section 3 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AccordionComponent />
    </NativeBaseProvider>
  );
}
```

## Expanded Style

```SnackPlayer name=Accordian%20Expanded
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  NativeBaseProvider,
} from "native-base";
function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.300" }}>
            <Box>Click me to see a different style</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id={9} isDisabled>
          <AccordionButton _disabled={{ backgroundColor: "gray.300" }}>
            <Box>I'm Disabled 😢</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AccordionComponent />
    </NativeBaseProvider>
  );
}
```

## Accessing the Internal State

```SnackPlayer name=Accordian%20Accessing
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
  NativeBaseProvider,
} from "native-base";
function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[1]}>
        <AccordionItem>
          <AccordionButton>
            <Box textAlign="left">Section 1 title</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }: any) => (
            <>
              <AccordionButton>
                <Box textAlign="left">{isExpanded ? "Fire" : "Snow"}</Box>
                {isExpanded ? (
                  <Icon name="fire" type="MaterialCommunityIcons" />
                ) : (
                  <Icon name="snowflake" type="MaterialCommunityIcons" />
                )}
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AccordionComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Accordion

| Name          | Type             | Description                                                                                              | Default |
| ------------- | ---------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| allowMultiple | boolean          | If true, multiple accordion items can be expanded at once.                                               | -       |
| allowToggle   | boolean          | If true, any expanded accordion item can be collapsed again.                                             | -       |
| index         | Number[], number | The index(es) of the expanded accordion item.                                                            | -       |
| defaultIndex  | Number[], number | The initial index(es) of the expanded accordion item. Must be an array for allowMultiple={true} to work. | -       |
| onChange      | function         | The callback invoked when accordion items are expanded or collapsed.                                     | -       |

### AccordionItem

| Name       | Type    | Description                                     | Default |
| ---------- | ------- | ----------------------------------------------- | ------- |
| id         | string  | A unique id for the accordion item.             | -       |
| isDisabled | boolean | If true, the accordion header will be disabled. | -       |

## AccordionButton props

**AccordionButton** renders a button and composes Box, this means you can pass all the `Box props` to AccordionButton, this means you can style it by passing the pseudo style props \_expanded, \_disabled, \_hover, etc.

## AccordionPanel props

**AccordionPanel** renders a **Box** and composes **Collapse** to provide height animation.
