import React from 'react';
import { Box, Text, VStack, Stack, Button } from 'native-base';
import Link from 'next/link';

const HowToUseFold = () => {
  return (
    <Box justifyContent="center" alignItems="center" py="16">
      <Stack
        w="full"
        maxW="1100px"
        direction={{ base: 'column', lg: 'row' }}
        space="32"
      >
        <VStack
          space="2"
          flex="1"
          borderLeftWidth="2"
          borderColor="coolGray.600"
          pl="6"
        >
          <Text fontSize="3xl" color="coolGray.900">
            How to use
          </Text>
          <Text fontSize="xl" color="coolGray.700" fontWeight="light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            vestibulum et vitae, condimentum. Sit odio in fames eu facilisi odio
            in fames eu facilisi
          </Text>
          <Link href="#">
            <Button alignSelf="flex-start" minW="32">
              Learn more
            </Button>
          </Link>
        </VStack>
        <Box flex="1" bg="trueGray.300" boxSize="48"></Box>
      </Stack>
    </Box>
  );
};

export default HowToUseFold;
