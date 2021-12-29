import React from "react";
import { Heading, HStack, Icon, Link, Pressable } from "native-base";
import { getHeadingIds } from "../../utils";
import { Fontisto } from "@expo/vector-icons";

export const Heading3 = ({ children }: any) => {
  const idText = getHeadingIds(children);
  return (
    <Pressable>
      {({ isHovered }) => {
        return (
          <HStack alignItems="center" space="2">
            <Heading
              fontSize="xl"
              _light={{ color: "gray.700" }}
              _dark={{ color: "gray.300" }}
              // @ts-ignore
              nativeID={idText}
            >
              {children}
            </Heading>
            {isHovered && (
              <Link href={"#" + idText}>
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
