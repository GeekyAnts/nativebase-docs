import React from "react";
import { Box, Heading, Link, Text, VStack, Stack } from "native-base";
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
            <Text color="coolGray.400" fontSize="md" mb="4">
              NativeBase is a component library that enables devs to build
              universal design systems. It is built on top of React Native,
              allowing you to develop apps for Android, iOS and the Web.
            </Text>
            <Stack direction={{ lg: "row" }} space="4">
              <TileLink
                title="Installation Guide"
                url="installation"
                description="Setup NativeBase in your project"
                bg="cyan.600"
              />
              <TileLink
                title="Playground"
                url="https://snack.expo.io/@nishanbende/example"
                description="Try NativeBase on Snack by Expo"
                bg="teal.600"
              />
            </Stack>
            <Stack direction={{ lg: "row" }} space="4">
              <TileLink
                title="Theming"
                url="default-theme"
                description="Create your own Design System"
                bg="pink.600"
              />
              <TileLink
                title="Recipes"
                url="loginsignupforms"
                description="Popular Recipes for Apps"
                bg="indigo.600"
              />
            </Stack>
          </VStack>
          <Box mt="4" >
            <Heading2>A Brief History of NativeBase</Heading2>
            <NBHistory />
          </Box>
        </Box>
        <KitchenSinkIframe />
      </Stack>
    </Box>
  );
}
