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
} from "native-base";
```

## Usage

```SnackPlayer name=Accordion%20Usage
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "native-base";
export default function () {
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
```

## Multiple

```SnackPlayer name=Accordion%20Multiple
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "native-base";
export default function () {
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
```

## Default Index

```SnackPlayer name=Accordion%20Default%20Index
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "native-base";
export default function () {
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
```

## Toggle

```SnackPlayer name=Accordion%20Toggle
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "native-base";
export default function () {
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
```

## Expanded Style

```SnackPlayer name=Accordion%20Expanded%20Style
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "native-base";
export default function () {
  return (
    <Box m={3}>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton _expanded={{ backgroundColor: "orange.3" }}>
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
          <AccordionButton _disabled={{ backgroundColor: "gray.3" }}>
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
```

## Accessing the Internal State

```SnackPlayer name=Accordion%20Internal%20State
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
} from "native-base";
export default function () {
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
```

## Props

[Accordion](https://www.notion.so/fc7b92a3707846aba22f1b68fafc6884)

[AccordionItem](https://www.notion.so/b7feab8e266145dcbfa20ca3ff2f09c6)

## AccordionButton props

**AccordionButton** renders a button and composes Box, this means you can pass all the `Box props` to AccordionButton, this means you can style it by passing the pseudo style props \_expanded, \_disabled, \_hover, etc.

## AccordionPanel props

**AccordionPanel** renders a **Box** and composes **Collapse** to provide height animation.
