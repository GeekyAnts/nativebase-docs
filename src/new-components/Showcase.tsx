import { Box, HStack, Link, Text, VStack } from 'native-base';
import React from 'react';
const showcaseSites = [
  {
    name: 'TopGeek1',
    description: 'TopGeek1 is a site to create ',
    link: 'https://topgeek.io/',
    image: '/img/showcase-img.png',
  },
  {
    name: 'TopGeek2',
    description: 'TopGeek2 is a site to create ',
    link: 'https://topgeek.io/',
    image: '/img/showcase-img.png',
  },
  {
    name: 'TopGeek3',
    description: 'TopGeek3 is a site to create ',
    link: 'https://topgeek.io/',
    image: '/img/showcase-img.png',
  },
  {
    name: 'TopGeek4',
    description: 'TopGeek4 is a site to create ',
    link: 'https://topgeek.io/',
    image: '/img/showcase-img.png',
  },
  {
    name: 'TopGeek5',
    description: 'TopGeek5 is a site to create ',
    link: 'https://topgeek.io/',
    image: '/img/showcase-img.png',
  },
];
const Showcase = () => {
  return (
    <Box alignItems="center" justifyContent="center" pt="20">
      <VStack w="full" maxW="1100px" py="4" space="6">
        <Box>
          <Text fontSize="3xl" color="coolGray.800">
            Showcase
          </Text>
        </Box>
        <HStack alignItems="flex-start" flexWrap="wrap" space="16">
          {showcaseSites.map((site: any) => (
            <VStack py="4" space="1">
              <img
                src={site.image}
                alt={site.name}
                height="auto"
                width="300"
                style={{ objectFit: 'contain' }}
              />
              <Link
                href={site.link}
                isExternal
                _text={{
                  fontSize: 'md',
                  fontWeight: 'semibold',
                  color: 'primary.700',
                  textDecoration: 'none',
                }}
                _hover={{
                  _text: { color: 'primary.600' },
                }}
              >
                {site.name}
              </Link>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Showcase;
