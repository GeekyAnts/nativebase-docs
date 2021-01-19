---
id: doc2
title: Document Number 2
---

## Implements

- `Collapse`, `Box` from native-base.

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

## Accessing Internal State

## Accordion props

- `style`: Applies user-defined styles and accepts a `stylesheet`.
- `allowMultiple` : ( **boolean )** If true, multiple accordion items can be expanded at once.
- `allowToggle` : ( **boolean )** If true, any expanded accordion item can be collapsed again.
- `index` : (**NumberOrArrayOfNumber**) The index(es) of the expanded accordion item.
- `defaultIndex` : ( **NumberOrArrayOfNumber** ) The initial index(es) of the expanded accordion item. Must be an array for allowMultiple={true} to function.
- `onChange` : ( **(NumberOrArrayOfNumber) => void** ) The callback invoked when accordion items are expanded or collapsed.
- `children` : ( **JSX.Element | JSX.Element[]** ) The content of the accordion. The children must be the AccordionButton and AccordionPanel components.

## AccordionItem props

- `id` : ( **string )** A unique id for the accordion item.
- `isDisabled` : ( **boolean )** If true, the accordion header will be disabled.
- `children` : ( **JSX.Element | JSX.Element[]** ) The content of the accordion. The children must be the AccordionButton and AccordionPanel components.

## AccordionButton props

**AccordionButton** renders a button and composes Box, this means you can pass all the `Box props` to AccordionButton

## AccordionPanel props

**AccordionPanel** renders a **Box** and composes **Collapse** to provide the height animation.
