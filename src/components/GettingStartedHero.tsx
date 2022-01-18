import React from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  VStack,
  Stack,
  useColorModeValue,
} from "native-base";
import {
  CodePlaygroundIcon,
  BookMarkIcon,
  ColorPaletteIcon,
  CookerIcon,
} from "../icons";
import config from "../../docs.config";
import { TileLink, KitchenSinkIframe, NBHistory } from "../components";
import { Heading2 } from "../new-components/markdown-components";
const url = config.REPO_LINK + "/tree/" + config.REPO_BRANCH;

export function GettingStartedHero() {
  return (
    <Box>
      <Stack
        direction={{ lg: "row" }}
        space="16"
        justifyContent="space-between"
      >
        <Box flex="1">
          <VStack space="4">
            <Text
              _dark={{ color: "coolGray.400" }}
              _light={{ color: "coolGray.600" }}
              fontSize="md"
              mb="4"
            >
              NativeBase is a component library that enables devs to build
              universal design systems. It is built on top of React Native,
              allowing you to develop apps for Android, iOS and the Web.
            </Text>
            <Stack direction={{ lg: "row" }} space="4">
              <TileLink
                title="Installation Guide"
                url="installation"
                description="Setup NativeBase in your project"
                _description={{
                  _dark: { color: "coolGray.400" },
                  _light: { color: "coolGray.600" },
                }}
                _titleIcon={{ size: 5 }}
                TitleIcon={BookMarkIcon}
                bg={useColorModeValue("coolGray.200", "coolGray.800")}
              />
              <TileLink
                title="Playground"
                url="https://snack.expo.io/@nishanbende/example"
                description="Try NativeBase on Snack by Expo"
                _description={{
                  _dark: { color: "coolGray.400" },
                  _light: { color: "coolGray.600" },
                }}
                TitleIcon={CodePlaygroundIcon}
                _titleIcon={{ size: 6 }}
                bg={useColorModeValue("coolGray.200", "coolGray.800")}
              />
            </Stack>
            <Stack direction={{ lg: "row" }} space="4">
              <TileLink
                title="Theming"
                url="default-theme"
                description="Create your own Design System"
                _description={{
                  _dark: { color: "coolGray.400" },
                  _light: { color: "coolGray.600" },
                }}
                _titleIcon={{ size: 6 }}
                TitleIcon={ColorPaletteIcon}
                bg={useColorModeValue("coolGray.200", "coolGray.800")}
              />
              <TileLink
                title="Recipes"
                url="login-signup-forms"
                description="Popular Recipes for Apps"
                _description={{
                  _dark: { color: "coolGray.400" },
                  _light: { color: "coolGray.600" },
                }}
                _titleIcon={{ size: 6 }}
                TitleIcon={CookerIcon}
                bg={useColorModeValue("coolGray.200", "coolGray.800")}
              />
            </Stack>
          </VStack>
          <Box mt="4">
            <Heading2>A Brief History of NativeBase</Heading2>
            <NBHistory />
          </Box>
        </Box>
        <KitchenSinkIframe />
      </Stack>
    </Box>
  );
}
