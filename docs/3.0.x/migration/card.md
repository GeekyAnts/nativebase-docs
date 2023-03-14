With NativeBase v3 we have removed Card components because as it's very simple to create various card layout using primitive components.

## Code Comparison

<DocTabs
defaultValue="v2"
values={[
{label: 'v2', value: 'v2'},
{label: 'v3', value: 'v3'},
]}>
<DocTabItem value="v2">

```tsx
import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

</DocTabItem>
<DocTabItem value="v3">

```tsx
import React from 'react';
import { VStack, Box, Divider } from 'native-base';

export default function () {
  return (
    <Box border={1} borderRadius="md">
      <VStack space={4} divider={<Divider />}>
        <Box px={4} pt={4}>
          NativeBase
        </Box>
        <Box px={4}>
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px={4} pb={4}>
          GeekyAnts
        </Box>
      </VStack>
    </Box>
  );
}
```

</DocTabItem>
</DocTabs>
