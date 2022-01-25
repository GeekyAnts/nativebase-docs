import React from "react";
import TileLink from "../TileLink";
import { Box, Heading, Stack, Text, useColorModeValue } from "native-base";

export default function InstallationTiles() {
  const isDarkTheme = false;
  const bgColor = isDarkTheme ? "bg-blueGray-700" : "bg-gray-600";

  return (
    <Box>
      <Stack space="4" mb="4" direction={{ lg: "row" }}>
        <TileLink
          title="Install in Expo project"
          url="install-expo"
          description="Follow this guide to install NativeBase in your existing or new Expo project"
          _dark={{ bg: "blueGray.700" }}
          _light={{ bg: "coolGray.200" }}
          imgSrc="/img/expo.svg"
          _Image={{
            position: "absolute",
            top: -65,
            size: 80,
            right: -230,
            opacity: useColorModeValue(0.4, 0.1),
          }}
          maxW={{ lg: 96 }}
        />
        <TileLink
          title="Install in React Native project"
          url="install-rn"
          description="Follow this guide to install NativeBase in your existing or new React Native project"
          imgSrc="/img/react-native.svg"
          _dark={{ bg: "blueGray.700" }}
          _light={{ bg: "coolGray.200" }}
          _Image={{
            position: "absolute",
            bottom: -35,
            right: -40,
            size: 32,
            opacity: useColorModeValue(0.2, 0.1),
          }}
          maxW={{ lg: 96 }}
        />
      </Stack>
      <Stack space="4" direction={{ lg: "row" }}>
        <TileLink
          title="Install in Next.js project"
          url="install-next"
          description="Follow this guide to install NativeBase in your existing or new Next.js project"
          imgSrc="/img/next.svg"
          _dark={{ bg: "blueGray.700" }}
          _light={{ bg: "coolGray.200" }}
          _Image={{
            position: "absolute",
            bottom: -65,
            right: -20,
            size: 48,
            opacity: useColorModeValue(0.4, 0.1),
          }}
          maxW={{ lg: 96 }}
        />
        <TileLink
          title="Install in Create React App project"
          url="install-cra"
          description="Follow this guide to install NativeBase in your existing or new React project"
          imgSrc="/img/cra.svg"
          _dark={{ bg: "blueGray.700" }}
          _light={{ bg: "coolGray.200" }}
          _Image={{
            position: "absolute",
            bottom: -62,
            right: -45,
            height: 165,
            width: 165,
            opacity: useColorModeValue(0.2, 0.1),
          }}
          maxW={{ lg: 96 }}
        />
      </Stack>
    </Box>
  );
}
