import React from 'react';
import { Box, Button, HStack, Icon, Text, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const About = () => {
  return (
    <Box justifyContent="center" alignItems="center" py="16" bg="coolGray.900">
      <VStack w="full" maxW="1100px">
        <Text
          fontSize="6xl"
          fontWeight="semibold"
          textTransform="uppercase"
          color="white"
        >
          Design System
        </Text>
        <Text
          fontSize="lg"
          color="white"
          w="50%"
          fontWeight="normal"
          letterSpacing="lg"
        >
          Description of the design system. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque molestie
        </Text>
        <HStack space="4" my="8">
          <Button
            rounded="lg"
            colorScheme="primary"
            _text={{ color: 'white' }}
            h="10"
            minW="48"
          ></Button>
          <Button
            rounded="lg"
            colorScheme="primary"
            variant="outline"
            borderColor="primary.500"
            _text={{ color: 'white' }}
            h="10"
            minW="48"
          ></Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default About;
