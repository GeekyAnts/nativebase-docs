---
id: thumbnail
title: Thumbnail
---

With v3 we have replaced the **Thumbnail** with [`Image`](/image). And we also provide [`Avatar`](/avatar) as well.

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
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    const uri =
      'https://facebook.github.io/react-native/docs/assets/favicon.png';
    return (
      <Container>
        <Header />
        <Content>
          <Text>Square Thumbnail</Text>
          <Thumbnail square small source={{ uri: uri }} />
          <Thumbnail square source={{ uri: uri }} />
          <Thumbnail square large source={{ uri: uri }} />
          <Text>Circular Thumbnail</Text>
          <Thumbnail small source={{ uri: uri }} />
          <Thumbnail source={{ uri: uri }} />
          <Thumbnail large source={{ uri: uri }} />
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
import { Avatar, VStack, Text, Image } from 'native-base';

export default function () {
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

  return (
    <VStack space={2} alignItems="center">
      <Text>Square Thumbnail</Text>
      <Image size={12} source={{ uri: uri }} alt="react-native" />
      <Image size={16} source={{ uri: uri }} alt="react-native" />
      <Image size={20} source={{ uri: uri }} alt="react-native" />
      <Text>Circular Thumbnail</Text>
      <Avatar size="xs" source={{ uri: uri }} />
      <Avatar size="md" source={{ uri: uri }} />
      <Avatar size="lg" source={{ uri: uri }} />
    </VStack>
  );
}
```

</DocTabItem>
</DocTabs>
