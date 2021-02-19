---
id: stat
title: Stat
---

Stat provides a beautiful structure to display statistics and data.

## Implements

- `Box`,`Text`,`Icon` from native-base

## Import

```jsx
import { Stat } from 'native-base';
```

## Basic

```SnackPlayer name=Stat%20Usage
import React from 'react';
import {
  Stat,
  Box,
  Heading,
  NativeBaseProvider
} from 'native-base';

function StatComponent () {
  return (
    <Box>
      <Heading>Basic Stat Usage</Heading>
      <Stat mt={6}>
        <Stat.Label>Collected Fees</Stat.Label>
        <Stat.Number>£0.00</Stat.Number>
        <Stat.HelpText>Feb 12 - Feb 28</Stat.HelpText>
      </Stat>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <StatComponent />
    </NativeBaseProvider>
  );
}
```

## Stat with Indicator

```SnackPlayer name=Stat%20WithIndicator
import React from 'react';
import {
  Stat,
  Heading,
  Box,
  NativeBaseProvider
} from 'native-base';

function StatComponent () {
  return (
    <Box>
      <Heading>Stat with Indicator</Heading>
      <Stat.Group mt={6} color="indigo.5">
        <Stat>
          <Stat.Label>Sent</Stat.Label>
          <Stat.Number>3,670</Stat.Number>
          <Stat.HelpText>
            <Stat.Arrow type="increase" />
            23.36%
          </Stat.HelpText>
        </Stat>
        <Stat>
          <Stat.Label>Clicked</Stat.Label>
          <Stat.Number>45</Stat.Number>
          <Stat.HelpText>
            <Stat.Arrow type="increase" />
            9.05%
          </Stat.HelpText>
        </Stat>
      </Stat.Group>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <StatComponent />
    </NativeBaseProvider>
  );
}
```

## **Props**

- `Stat.Label`, `Stat.Number` composes the `Text` component.
- `Stat.Arrow` composes the `Icon` component but only accepts **_increase_** and **_decrease_** as **type**, yielding icon respectively.
- `Stat`, `Stat.HelpText` composes the `Box` component.
- `Stat.Group` composes the `HStack` component.
