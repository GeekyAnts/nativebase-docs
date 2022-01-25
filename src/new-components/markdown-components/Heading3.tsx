import React from "react";
import { Heading, HStack, Icon, Link, Pressable } from "native-base";
import { getHeadingMeta } from "../../utils";
import { Fontisto } from "@expo/vector-icons";

export const Heading3 = ({ children }: any) => {
  const [content, id] = getHeadingMeta(children);
  return (
    <Pressable my="2" _web={{ cursor: "default" }}>
      {({ isHovered }) => {
        return (
          <HStack alignItems="center" space="2">
            <Heading
              fontSize="xl"
              fontWeight="normal"
              _light={{ color: "gray.700" }}
              _dark={{ color: "gray.300" }}
              // @ts-ignore
              nativeID={id}
            >
              {content}
            </Heading>
            {isHovered && (
              <Link href={"#" + id}>
                <Icon
                  as={Fontisto}
                  name="link"
                  color="coolGray.500"
                  size="3"
                  mt="1"
                />
              </Link>
            )}
          </HStack>
        );
      }}
    </Pressable>
  );
};
