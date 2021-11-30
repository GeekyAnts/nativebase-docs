import Link from "next/link";
import {
  HStack,
  Button,
  AddIcon,
  IconButton,
  SunIcon,
  Box,
  Text,
  Badge,
  Pressable,
  Heading,
} from "native-base";
import { MDXRemote } from "next-mdx-remote";
import React from 'react'

import NativebaseLogo from "./NativebaseLogo";

export default function Toc(props: any) {
  const { tocArray } = props;
  return (
    <Box w="64" py="16" px="8">
      <Heading fontSize="xl" fontWeight="medium" mb="4">
        Quick Nav
      </Heading>
      <TocItem tocArrayItems={tocArray} level={0} />
    </Box>
  );
}

const TocItem = (props: any) => {
  const { tocArrayItems, level } = props;
  return tocArrayItems.map((item: any, index: any) => {
    return (
      <Box key={index}>
        {item.topics === undefined ? (
          <Link href="#" passHref>
            <Button
              alignSelf="flex-start"
              variant="unstyled"
              my="1"
              py="0"
              rounded="0"
              pl={level * 25 + "px"}
              _text={{
                fontWeight: "light",
                fontSize: "13px",
                color: "gray.500",
              }}
              _hover={{
                // @ts-ignore
                _text: {
                  textDecorationLine: "underline",
                },
              }}
            >
              {item.title}
            </Button>
          </Link>
        ) : (
          <>
            <Link href="#" passHref>
              <Button
                alignSelf="flex-start"
                variant="unstyled"
                py="1"
                rounded="0"
                pl={level * 25 + "px"}
                _text={{
                  fontWeight: "light",
                  fontSize: "13px",
                  color: "gray.500",
                }}
                _hover={{
                  // @ts-ignore
                  _text: {
                    textDecorationLine: "underline",
                  },
                }}
              >
                {item.title}
              </Button>
            </Link>
            <TocItem tocArrayItems={item.topics} level={level + 1} />
          </>
        )}
      </Box>
    );
  });
};
