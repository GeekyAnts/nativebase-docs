---
id: stat
title: Stat
---

Stat provides a beautiful structure to display statistics and data.

## Implements

- `Box`,`Text`,`Icon` from native-base

## Import

```jsx
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from 'native-base';
```

## Usage

```SnackPlayer name=Stat%20Usage
import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Box,
  NativeBaseProvider
} from 'native-base';

function StatComponent () {
  return (
    <Box>
      <Heading>Basic Stat Usage</Heading>
      <Stat mt={6}>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
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
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Heading,
  Box,
  NativeBaseProvider
} from 'native-base';

function StatComponent () {
  return (
    <Box>
      <Heading>Stat with Indicator</Heading>
      <StatGroup mt={6} color="indigo.500">
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>3,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
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

- StatLabel, StatNumber composes `Text` component
- StatArrow composes `Icon` component
- Stat, StatGroup, StatHelpText composes `Box` component
