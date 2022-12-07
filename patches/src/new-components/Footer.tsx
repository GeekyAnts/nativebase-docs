import React from "react";
import { HStack, Icon, Box, Stack, VStack, Link } from "native-base";
import NextLink from "next/link";
import { FontAwesome } from "@expo/vector-icons";
import { footer } from "../../docs.config";

export default function Footer(props: any) {
  return (
    <Stack
      justifyContent="space-between"
      w="100%"
      direction={{ sm: "column", lg: "row" }}
      px="24"
      py="12"
      space="8"
      _dark={{ bg: "blueGray.800" }}
      _light={{ bg: "coolGray.50" }}
    >
      {footer.map((footerItemStack: any, index: any) => {
        return (
          <VStack key={index} space="4">
            <Box mb="2" _text={{ fontSize: "lg" }}>
              {footerItemStack?.title}
            </Box>
            {footerItemStack?.pages?.map((footerItem: any, index: any) => {
              if (footerItem.linkType === "internal") {
                return (
                  <NextLink href={footerItem.link} passHref>
                    <Box
                      key={index}
                      _text={{ fontSize: "md", fontWeight: "300" }}
                      _light={{ _text: { color: "warmGray.800" } }}
                      _dark={{ _text: { color: "coolGray.50" } }}
                    >
                      {footerItem.title}
                    </Box>
                  </NextLink>
                );
              } else {
                return (
                  <Link href={footerItem.link} isExternal>
                    <Box
                      key={index}
                      _text={{ fontSize: "md", fontWeight: "300" }}
                    >
                      {footerItem.title}
                    </Box>
                  </Link>
                );
              }
            })}
          </VStack>
        );
      })}
      <BrandingAndSocialHandles />
    </Stack>
  );
}

const BrandingAndSocialHandles = () => {
  return (
    <VStack space="2">
      <Box _text={{ fontSize: "md" }}>Built with ❤️ at GeekyAnts.</Box>
      <HStack space="4">
        <Link
          href="https://www.linkedin.com/company/nativebase/about/?viewAsMember=true"
          isExternal
        >
          <Icon as={FontAwesome} name="linkedin" size="sm" />
        </Link>
        <Link href="https://www.instagram.com/nativebaseio/?hl=en" isExternal>
          <Icon as={FontAwesome} name="instagram" size="sm" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCoL_iTwpY07vDs91974z3xA/about"
          isExternal
        >
          <Icon as={FontAwesome} name="youtube-play" size="sm" />
        </Link>
      </HStack>
      <Box>Copyright © 2021 NativeBase</Box>
    </VStack>
  );
};
