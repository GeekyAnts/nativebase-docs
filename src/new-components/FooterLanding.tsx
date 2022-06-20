import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';

const footerItems = [
  {
    name: 'title1',
    isTitle: true,
    pages: [
      { name: 'item1', link: '/item1' },
      { name: 'item1', link: '/item1' },
      { name: 'item1', link: '/item1' },
    ],
  },
  {
    name: 'title2',
    isTitle: true,
    pages: [
      { name: 'item2', link: '/item2' },
      { name: 'item2', link: '/item2' },
      { name: 'item2', link: '/item2' },
    ],
  },
  {
    name: 'title3',
    isTitle: true,
    pages: [
      { name: 'item3', link: '/item3' },
      { name: 'item3', link: '/item3' },
      { name: 'item3', link: '/item3' },
    ],
  },
  {
    name: 'title4',
    isTitle: true,
    pages: [
      { name: 'item4', link: '/item4' },
      { name: 'item4', link: '/item4' },
      { name: 'item4', link: '/item4' },
    ],
  },
];
const FooterLanding = () => {
  return (
    <Box justifyContent="center" alignItems="center" bg="coolGray.900" py="8">
      <HStack
        w="full"
        maxW="1100px"
        py="4"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {footerItems.map((item, index) => {
          return (
            <Box w="250" key={index}>
              <VStack space="3">
                <Text fontSize="lg" color="coolGray.200">
                  {item.name}
                </Text>
                <VStack space="1">
                  {item.pages.map((page: any) => {
                    return (
                      <Text fontSize="sm" color="coolGray.200">
                        {page.name}
                      </Text>
                    );
                  })}
                </VStack>
              </VStack>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

export default FooterLanding;
