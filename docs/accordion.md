---
id: accordion
title: Accordion
---

## Implements

- [`Collapse`](collapse.md), [`Box`](box.md)

## Import

```jsx
import { Accordion } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Basic
import React from 'react';
import { Accordion, NativeBaseProvider, Center } from 'native-base';

function AccordionComponent() {
  return (
    <Accordion index={[0, 1]}>
      <Accordion.Item>
        <Accordion.Summary>
          Section 1 title
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Details>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Summary>
          Section 2 title
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Details>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Summary>
          Section 3 title
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Details>
      </Accordion.Item>
    </Accordion>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AccordionComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Multiple

```SnackPlayer name=Multilple
import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center } from 'native-base';

function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 1 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 2 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 3 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AccordionComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Default Index

```SnackPlayer name=DefaultIndex
import React from 'react';
import { ScrollView } from 'react-native';
import { Accordion, Box, NativeBaseProvider, Center } from 'native-base';

function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[0, 2]}>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 1 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 2 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 3 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ScrollView>
          <AccordionComponent />
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
}

```

### Toggle

```SnackPlayer name=Toggle
import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center } from 'native-base';

function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowToggle defaultIndex={[2]}>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 1 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 2 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            <Box>Section 3 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AccordionComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Expanded Style

```SnackPlayer name=Style
import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center } from 'native-base';

function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple>
        <Accordion.Item>
          <Accordion.Summary _expanded={{backgroundColor: 'orange.300'}}>
            <Box>Click me to see a different style</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item id={9} isDisabled>
          <Accordion.Summary _disabled={{backgroundColor: 'gray.300'}}>
            <Box>I'm Disabled 😢</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AccordionComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Accessing Internal State

```SnackPlayer name=InternalState
import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center, Icon } from 'native-base';

function AccordionComponent() {
  return (
    <Box m={3}>
      <Accordion allowMultiple defaultIndex={[1]}>
        <Accordion.Item>
          <Accordion.Summary>
            <Box textAlign="left">Section 1 title</Box>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>

        <Accordion.Item>
          {({isExpanded}: any) => (
            <>
              <Accordion.Summary>
                <Box textAlign="left">{isExpanded ? 'Fire' : 'Snow'}</Box>
                {isExpanded ? (
                  <Icon name="fire" type="MaterialCommunityIcons" />
                ) : (
                  <Icon name="snowflake" type="MaterialCommunityIcons" />
                )}
              </Accordion.Summary>
              <Accordion.Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Details>
            </>
          )}
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AccordionComponent />
      </Center>
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

### Accordion.Summary

**Accrodion.Summary** renders a button and composes **[Box](box.md)**. All the **Box** props can be passed to **Accrodion.Summary** and you can style it by passing pseudo style props like `_expanded`, `_disabled`, `_hover`, etc.

### Accordion.Details

**AccordionDetails** renders a **Box** and composes **[Collapse](collapse.md)** to provide height animation.

### Accordion.Icon

**AccordionIcon** renders an Icon and composes **[Icon](icon.md)**.
