import React from "react";
import { GluestackDarkTextLogo, GluestackLogo, Warning } from "./images";
import { Box, HStack, Link, Text, useColorMode } from "native-base";

export function BannerGluestack() {
  const { colorMode } = useColorMode();
  return (
    <Box
      width="100%"
      alignItems="center"
      py={{ base: "6", md: "20" }}
      _light={{
        bg: "rgba(245, 245, 245)",
      }}
      _dark={{
        bg: "rgba(23, 30, 46)",
      }}
      bg="red.800"
      nativeID="12345"
      // gap-12 px-6 pt-6 pb-12 lg:items-center md:pt-20 xl:px-0 md:pb-20
    >
      <Box>
        <HStack
          space="3"
          maxW={1152}
          mt="6"
          mb="0"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Warning />
          <Text
            // fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            // fontSize={["2xl", "3xl", "4xl"]}
            fontSize="4xl"
            fontWeight="semibold"
            _light={{
              color: "gray.900",
            }}
            _dark={{
              color: "gray.400",
            }}
            textAlign="center"
            lineHeight={{ base: "sm", md: "md" }}
          >
            NativeBase is moving to
          </Text>
          <a href="https://www.gluestack.io/" target="blank">
            <Box
              alignItems="center"
              width="100%"
              maxW={276}
              style={{
                aspectRatio: 424 / 62,
              }}
            >
              {colorMode === "dark" ? (
                <GluestackLogo />
              ) : (
                <GluestackDarkTextLogo />
              )}
            </Box>
          </a>
        </HStack>
        <Text
          fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          textAlign="center"
          lineHeight={40}
          w={{ base: "full", md: "5/6" }}
          maxW={1152}
          _light={{
            color: "gray.600",
          }}
          _dark={{
            color: "gray.400",
          }}
          mt="12"
        >
          IMPORTANT: This library is no longer maintained! The successor of this
          library is <b>gluestack-ui</b>, which is a{" "}
          <Text
            _light={{
              color: "#DBDBDB",
            }}
            _dark={{
              color: "#404040",
            }}
          >
            ground-up rewrite
          </Text>{" "}
          of NativeBase, this prioritizes performance and is focused on
          improving developer experience.{" "}
          <Link
            href="https://github.com/GeekyAnts/NativeBase/issues/4302"
            isExternal
            _text={{
              color: "blue.500",
            }}
            isUnderlined
          >
            Know more
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
