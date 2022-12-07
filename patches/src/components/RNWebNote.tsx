import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';

export const RNWebNote = () => {
  return (
    <Box bg="violet.500" p="5" borderRadius="md">
      <VStack space="1">
        <Text color="white" fontSize="md" fontWeight="500">
          NOTE
        </Text>
        <HStack>
          <Text color="white" fontSize="md">
            Make sure to update your root element styles as
          </Text>
          <Text
            color="white"
            textDecorationLine="underline"
            borderColor="white"
            // @ts-ignore
            href="https://necolas.github.io/react-native-web/docs/setup/#root-element"
            hrefAttrs={{ target: '_blank' }}
            fontSize="md"
            fontWeight="500"
          >
            {' '}
            shown here
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
