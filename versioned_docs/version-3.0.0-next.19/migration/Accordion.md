import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We have sliced Accordion into multiple smaller component which not only provides more control over the the code but also makes it more readable.

## Overview

Migrating Checkbox components can broadly described in these points:

- **dataArray** is depreciated.
- **expanded** → `defaultIndex`, and now accepts array of index.
- Pros like **headerStyle**, **contentStyle**, **icon**, **expandedIcon**, **iconStyle**, **expandedIconStyle**, **renderHeader**, **renderContent** are _no longer required_ as components like `AccordionButton`, `AccordionPanel`, `AccordionIcon` replaces them.
- **onAccordionOpen,** **onAccordionOpen** → `onChange`, one callback instead of 2.

## Code Comparison

<Tabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<TabItem value="v2">

```tsx
import React, { Component } from 'react';
import { Container, Header, Content, Accordion } from 'native-base';
const dataArray = [
  {
    title: 'First Element',
    content: 'Lorem ipsum dolor sit amet',
  },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  {
    title: 'Third Element',
    content: 'Lorem ipsum dolor sit amet',
  },
];
export default class AccordionExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    );
  }
}
```

</TabItem>
<TabItem value="v3">

```tsx
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from 'native-base';
export default function () {
  return (
    <Accordion index={[0]}>
      <AccordionItem>
        <AccordionButton>
          First Element
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>Lorem ipsum dolor sit amet</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Second Element
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>Lorem ipsum dolor sit amet</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Third Element
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>Lorem ipsum dolor sit amet</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
```

</TabItem>
</Tabs>
