import Link from "next/link";
import { Button, Box, Heading } from "native-base";
import React from "react";
export default function Toc(props: any) {
  const { tocArray } = props;
  return (
    <Box w="64" py="16" px="8">
      <Heading fontSize="xl" fontWeight="medium" mb="4">
        Quick Nav
      </Heading>
      <TocItem tocArrayItems={tocArray} />
    </Box>
  );
}

const TocItem = (props: any) => {
  const { tocArrayItems } = props;
  return tocArrayItems.map((item: any, index: any) => {
    return (
      <Box key={index}>
        <Link href="#" passHref>
          <Button
            alignSelf="flex-start"
            variant="unstyled"
            my="1"
            py="0"
            rounded="0"
            pl={item.level * 20 + "px"}
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
      </Box>
    );
  });
};
