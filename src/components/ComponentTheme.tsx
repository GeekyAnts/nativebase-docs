import React from "react";
import { Box, Heading, Link, Text, VStack } from "native-base";
import config from "../../docs.config";
import { Admonition, Anchor } from "../new-components/markdown-components";
const url = config.REPO_LINK + "/tree/" + config.REPO_BRANCH;

export function ComponentTheme({ name, fileName }: any) {
  fileName = fileName ?? name;

  return (
    <VStack
      space={4}
      // style={{
      //   "--ifm-link-hover-decoration": "none",
      // }}
    >
      <Box rounded="1">
        <Text
          _light={{ color: "coolGray.500" }}
          _dark={{ color: "coolGray.300" }}
          fontWeight="normal"
          fontSize="md"
        >
          NativeBase ships with a default theme for each component. Check out the
          default theme of the {name}
          <Anchor
            href={url + "/" + "src/theme/components/" + fileName + ".ts"}
            isExternal
          >
            {" "}
            here
          </Anchor>
          .
        </Text>
      </Box>
      <Admonition status="info">
        <Text size="md">
          We can easily extend the {name} component theme using extendTheme
          function as described in the documentation{" "}
        </Text>
        <Anchor href={"customizing-components"}>
          {/* <Text
            // @ts-ignore
            _hover={{
              bg: "secondary.200",
              color: "black",
              borderColor: "gray.900",
            }}
          > */}
          here
          {/* </Text> */}
        </Anchor>
        .
      </Admonition>
    </VStack>
  );
}
