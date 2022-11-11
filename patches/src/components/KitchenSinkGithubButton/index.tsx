import React from "react";
import { Box, Link, Text } from "native-base";
import GithubIcon from "../../icons/GithubIcon";
export const KitchenSinkGithubButton = () => {
  return (
    <Link isExternal href="https://github.com/nativebase/kitchen-sink">
      <Box
        alignItems="center"
        justifyContent="center"
        w={{ base: "100%", md: "48" }}
        px="5"
        py="3"
        mt="6"
        bg="indigo.500"
        rounded="4"
        flexDirection="row"
      >
        <Box mr="5">
          <GithubIcon size="7" />
        </Box>
        <Text fontSize="md" textDecoration="none" color="coolGray.50">
          Github
        </Text>
      </Box>
    </Link>
  );
};
