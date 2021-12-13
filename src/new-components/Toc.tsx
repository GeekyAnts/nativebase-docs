import Link from "next/link";
import { Button, Box, Heading, Text, Pressable, ScrollView } from "native-base";
import React from "react";
export default function Toc(props: any) {
  const { tocArray } = props;
  return (
    <ScrollView>
      <Box w="64" py="16" px="8">
        <Heading fontSize="xl" fontWeight="medium" mb="4">
          Quick Nav
        </Heading>
        <TocItem tocArrayItems={tocArray} />
      </Box>
    </ScrollView>
  );
}

const TocItem = (props: any) => {
  const { tocArrayItems } = props;
  return tocArrayItems.map((item: any, index: any) => {
    if (item.level === 0) {
      return null;
    }
    return (
      <Link href={"#" + item.id} key={index} passHref>
        <Pressable my="1" pl={(item.level - 1) * 12 + "px"}>
          {({ isHovered }) => {
            return (
              <Box
                _text={{
                  flex: 1,
                  flexWrap: "wrap",
                  fontWeight: "light",
                  fontSize: "13px",
                  color: "gray.500",
                  textDecorationLine: isHovered ? "underline" : "none",
                }}
              >
                {item.title}
              </Box>
            );
          }}
        </Pressable>
      </Link>
    );
  });
};
