import { Box, Heading, Text, HStack, Stack, VStack, Hidden } from "native-base";
import { Li } from "../../new-components/markdown-components/Li";
import React from "react";
import { PinDropIcon } from "../../icons";
export default function NBHistory() {
  return (
    <Box mt="10">
      <Hidden till="md">
        <>
          <Box
            w="100%"
            borderTopWidth={2}
            _dark={{ borderColor: "coolGray.700" }}
            _light={{ borderColor: "coolGray.300" }}
            borderStyle="dashed"
            rounded="1"
          />
          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-around"}
          >
            <Stack
              space={2}
              direction={{ base: "row", md: "column" }}
              alignItems={"center"}
            >
              <Box
                h="5"
                w="1"
                _dark={{ bg: "coolGray.700" }}
                _light={{ bg: "coolGray.300" }}
                mt="-2.5"
                mb="2"
              />
              <Text
                _dark={{ color: "coolGray.300" }}
                _light={{ color: "coolGray.600" }}
              >
                NativeBase v1.x
              </Text>
              <Text
                _dark={{ color: "coolGray.300" }}
                _light={{ color: "coolGray.600" }}
              >
                (2016)
              </Text>
            </Stack>
            <Stack
              space={2}
              direction={{ base: "row", md: "column" }}
              alignItems={"center"}
            >
              <Box
                h="5"
                w="1"
                _dark={{ bg: "coolGray.700" }}
                _light={{ bg: "coolGray.300" }}
                mt="-2.5"
                mb="2"
              />
              <Text
                _dark={{ color: "coolGray.300" }}
                _light={{ color: "coolGray.600" }}
              >
                NativeBase v2.x
              </Text>
              <Text
                _dark={{ color: "coolGray.300" }}
                _light={{ color: "coolGray.600" }}
              >
                (2017)
              </Text>
            </Stack>
            <Stack
              space={2}
              direction={{ base: "row", md: "column" }}
              alignItems={"center"}
            >
              <Box
                h="5"
                w="1"
                _dark={{ bg: "coolGray.700" }}
                _light={{ bg: "coolGray.300" }}
                mt="-2.5"
                mb="2"
              />
              <Text
                _dark={{ color: "coolGray.300" }}
                _light={{ color: "coolGray.600" }}
              >
                NativeBase v3.x
              </Text>
              <Text
                _dark={{ color: "coolGray.300" }}
                _light={{ color: "coolGray.600" }}
              >
                (2021)
              </Text>
            </Stack>
            <Stack
              space={2}
              direction={{ base: "row", md: "column" }}
              alignItems={"center"}
              pt="2px"
            >
              <PinDropIcon size="6" mt="-6" mb="5" />
              <Text
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "coolGray.800", fontWeight: "medium" }}
                mt="-1"
              >
                gluestack-ui
              </Text>
              <Text
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "coolGray.800", fontWeight: "medium" }}
              >
                (2023)
              </Text>
            </Stack>
          </Stack>
        </>
      </Hidden>
      <VStack mt={["0", "0", "10"]} space="6">
        <Li>
          <Text
            _dark={{ color: "coolGray.400" }}
            _light={{ color: "coolGray.600" }}
            lineHeight="xl"
          >
            <Text
              _dark={{ color: "coolGray.300" }}
              _light={{ color: "coolGray.800", fontWeight: "medium" }}
            >
              NativeBase v1.x :{" "}
            </Text>
            NativeBase started out as an open source framework that enabled
            developers to build high-quality mobile apps using React Native. The
            first version included UITabBar on iOS and Drawer on Android.
            NativeBase v1 was very well-received by the dev community.
          </Text>
        </Li>
        <Li>
          <Text
            _dark={{ color: "coolGray.400" }}
            _light={{ color: "coolGray.600" }}
            lineHeight="xl"
          >
            <Text
              _dark={{ color: "coolGray.300" }}
              _light={{ color: "coolGray.800", fontWeight: "medium" }}
            >
              NativeBase v2.x :{" "}
            </Text>
            The second version was released with new components, preset themes,
            unified icons & more. The main focus of v2 was to make components
            easy to theme with very few modifications. From v2.4.1 onwards,
            NativeBase also included support for the web.
          </Text>
        </Li>
        <Li>
          <Text
            _dark={{ color: "coolGray.400" }}
            _light={{ color: "coolGray.600" }}
            lineHeight="xl"
          >
            <Text
              _dark={{ color: "coolGray.300" }}
              _light={{ color: "coolGray.800", fontWeight: "medium" }}
            >
              NativeBase v3.x :{" "}
            </Text>
            We wanted to make NativeBase the go-to component library for anyone
            building with React Native and Web. This version is accessible,
            highly customizable and consistent across android, iOS & web.
            That&apos;s not all though, read on for the full benefits of using
            v3.
          </Text>
        </Li>
        <Li>
          <Text
            _dark={{ color: "coolGray.400" }}
            _light={{ color: "coolGray.600" }}
            lineHeight="xl"
          >
            <Text
              _dark={{ color: "coolGray.300" }}
              _light={{ color: "coolGray.800", fontWeight: "medium" }}
            >
              gluestack-ui :{" "}
            </Text>
            With the introduction of gluestack-ui, we aim to address the
            performance and maintainability issues of NativeBase v3. By
            splitting the library into three parts and focusing on a universal,
            headless, and independent set of components, gluestack-ui now offers
            better performance and easier maintenance.
          </Text>
        </Li>
      </VStack>
    </Box>
  );
}
