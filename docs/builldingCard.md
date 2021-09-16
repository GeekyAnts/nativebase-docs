---
id: building-card
title: Card
---

A card is a flexible and extensible content container. It comes in caries shapes and sizes and here we'll make few of them.

## Most Commonly used design

This card design widely used where the Header consist of Avatar, accompanied by the Title and Sub-title.

Followed by the image which flows till the very edge.

And lastly a description.

```SnackPlayer name=Card
import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider
} from 'native-base';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

function CardComponent(){
 return(
    <Box
      width="72"
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri:
                'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            _light={{ color: 'violet.500' }}
            _dark={{ color: 'violet.300' }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400" >
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text  color="gray.500" fontWeight="400" >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
    );
}

export default function () {
  return (
  <NativeBaseProvider>
    <Center flex="1" px="3">
      <CardComponent/>
    </Center>
  </NativeBaseProvider>
  );
}
```
