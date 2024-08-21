import React from "react";
import { Box, Text, VStack, Stack, useColorModeValue, Link } from "native-base";
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
              <br />
              <br />
              <Box
                mb="8"
                px="8"
                rounded="8"
                py="6"
                borderWidth="1"
                borderLeftWidth="12"
                _light={{
                  bg: "info.50",
                  borderColor: "info.600",
                  borderLeftColor: "info.600",
                }}
                _dark={{
                  bg: "black:alpha.10",
                  borderColor: "info.700:alpha.30",
                  borderLeftColor: "info.700",
                }}
              >
                <Text
                  fontSize="lg"
                  mb={"0"}
                  _light={{ color: "tipBackgroundColorLight" }}
                  _dark={{ color: "coolGray.50" }}
                  fontWeight="medium"
                >
                  Info:{" "}
                  <Text
                    fontSize="md"
                    fontWeight="light"
                    _light={{ color: "tipBackgroundColorLight" }}
                    _dark={{ color: "tipBackgroundColorDark" }}
                  >
                    If you are starting a new project, please try{" "}
                    <Link href="https://gluestack.io/ui/docs/home/getting-started/installation/?utm_source=nativebase&utm_medium=docs&utm_campaign=docs+homepage">
                      gluestack-ui
                    </Link>{" "}
                    for better performance and new design.
                  </Text>
                </Text>
              </Box>
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
                url="https://snack.expo.dev/@native-base/nativebase-playground"
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
