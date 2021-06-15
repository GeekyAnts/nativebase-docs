---
id: buildingCard
title: Card
---

A card is a flexible and extensible content container. It comes in caries shapes and sizes and here we'll make few of them.

## 1. Most Commonly used design:

This card design widely used where the Header consist of Avatar, accompanied by the Title and Sub-title.

Followed by the image which flows till the very edge.

And lastly a description.

```SnackPlayer name=Card
import React from "react";
import { VStack, HStack, Avatar, Image, Text, NativeBaseProvider, Center } from "native-base";

function CardComponent(){
 return<VStack m={4} space={4} border={1} borderRadius="lg">
      <HStack alignItems="center" px={4} pt={4}>
        <Avatar borderWidth={1} size="lg" />
        <VStack ml={2} space={2}>
          <Text fontSize="lg" bold underline>
            Title
          </Text>
          <Text>Sub Title</Text>
        </VStack>
      </HStack>
      <Image
        w="100%"
        height={72}
        source={{
          uri:
            "https://images.pexels.com/photos/5199154/pexels-photo-5199154.jpeg?cs=srgb&dl=pexels-tamara-velazquez-5199154.jpg&fm=jpg",
        }}
        alt="NativeBase logo"
      ></Image>
      <VStack px={4} pb={4}>
        <Text>
          NativeBase <Text bold>v3</Text> a universal Design System for Mobile &
          Web built for React Native and React with the same API. Ships a bunch
          of components for most of the use-cases that includes Button, AppBar,
          Dialog, Modal and what not.
        </Text>
      </VStack>
    </VStack>
}


export default function () {
  return (
  <NativeBaseProvider>
    <Center flex={1}>
      <CardComponent/>
    </Center>
  </NativeBaseProvider>
  );
}
```
