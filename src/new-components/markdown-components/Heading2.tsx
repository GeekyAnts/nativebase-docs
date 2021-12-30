import React from "react";
import { Heading, HStack, Icon, Pressable, Link } from "native-base";
import { getHeadingIds } from "../../utils";
import { Fontisto } from "@expo/vector-icons";

export const Heading2 = ({ children }: any) => {
  const idText = getHeadingIds(children);
  return (
    <Pressable mt="7" mb="4" _web={{ cursor: "default" }}>
      {({ isHovered }) => {
        return (
          <HStack alignItems="center" space="2">
            <Heading
              fontSize="2xl"
              _dark={{ color: "gray.300" }}
              _light={{ color: "gray.700" }}
              // @ts-ignore
              nativeID={idText}
            >
              {children}
            </Heading>
            {isHovered && (
              <Link href={"#" + idText}>
                <Icon as={Fontisto} name="link" color="coolGray.500" size="4" />
              </Link>
            )}
          </HStack>
        );
      }}
    </Pressable>
  );
};
