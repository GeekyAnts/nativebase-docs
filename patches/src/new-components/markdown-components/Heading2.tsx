import React from 'react';
import { Heading, HStack, Icon, Pressable, Link } from 'native-base';
import { getHeadingMeta } from '../../utils';
import { Fontisto } from '@expo/vector-icons';

export const Heading2 = ({ children }: any) => {
  const [content, id] = getHeadingMeta(children);

  return (
    <Pressable
      mt="7"
      mb="4"
      // @ts-ignore
      _web={{ cursor: 'default' }}
    >
      {({ isHovered }) => {
        return (
          <HStack alignItems="center" space="2">
            <Heading
              fontSize="2xl"
              _dark={{ color: 'gray.300' }}
              _light={{ color: 'gray.700' }}
              // @ts-ignore
              nativeID={'h2-' + id}
            >
              {content}
            </Heading>
            {isHovered && (
              <Link href={'#' + 'h2-' + id}>
                <Icon as={Fontisto} name="link" color="coolGray.500" size="4" />
              </Link>
            )}
          </HStack>
        );
      }}
    </Pressable>
  );
};
