import { Box, Heading, Text, HStack } from "native-base";
import React from "react";

export default function NBHistory() {
  return (
    <Box
      my="6"
      w={{ base: "90%", lg: "100%" }}
      borderLeftWidth="4"
      _dark={{ borderColor: "blueGray.100:alpha.70" }}
      _light={{ borderColor: "blueGray.200" }}
    >
      <HStack alignItems="center">
        <Box w="5" h="5" bg="gray.500" rounded="full" ml="-3" flexShrink="0" />
        <Box pl="8" w="100%" pr="2">
          <Box
            py="5"
            px="6"
            _dark={{ bg: "blueGray.600:alpha.40" }}
            _light={{ bg: "blueGray.500" }}
            shadow="7"
            rounded="md"
            maxW="100%"
            w="100%"
          >
            <Heading fontSize="lg" mb="2">
              NativeBase v1.x
            </Heading>
            <Text fontSize="md" lineHeight="xl">
              NativeBase started out as an open source framework that enabled
              developers to build high-quality mobile apps using React Native.
              The first version included UITabBar on iOS and Drawer on Android.
              NativeBase v1 was very well-received by the dev community.
            </Text>
          </Box>
        </Box>
      </HStack>

      <HStack alignItems="center" mt="8">
        <Box w="5" h="5" bg="gray.500" rounded="full" flexShrink="0" ml="-3" />
        <Box pl="8" w="100%" pr="2">
          <Box
            // ml="8"
            py="5"
            px="6"
            shadow="7"
            rounded="md"
            _dark={{ bg: "blueGray.600:alpha.40" }}
            _light={{ bg: "blueGray.500" }}
            maxW="100%"
            // maxW="100%"
            w="100%"
          >
            <Heading fontSize="lg" mb="2">
              NativeBase v2.x
            </Heading>
            <Text fontSize="md" lineHeight="xl">
              The second version was released with new components, preset
              themes, unified icons & more. The main focus of v2 was to make
              components easy to theme with very few modifications. From v2.4.1
              onwards, NativeBase also included support for the web.
            </Text>
          </Box>
        </Box>
      </HStack>

      <HStack alignItems="center" mt="8">
        <Box w="5" h="5" bg="gray.500" rounded="full" flexShrink="0" ml="-3" />
        <Box pl="8" w="100%" pr="2">
          <Box
            _dark={{ bg: "cyan.700:alpha.7  0" }}
            _light={{ bg: "cyan.500" }}
            rounded="md"
            shadow="7"
            // ml="8"
            py="5"
            px="6"
            maxW="100%"
            // maxW="100%"
            w="100%"
          >
            <Heading fontSize="lg" mb="2">
              NativeBase v3.x
            </Heading>
            <Text fontSize="md" lineHeight="xl">
              We wanted to make NativeBase the go-to component library for
              anyone building with React Native and Web (in alpha). This version
              is accessible, highly customizable and consistent across android,
              iOS & web. That&apos;s not all though, read on for the full
              benefits of using v3.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
