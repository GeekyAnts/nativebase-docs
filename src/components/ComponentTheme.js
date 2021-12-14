import React from "react";
import { Box, Heading, Link, Text, VStack } from "native-base";
import config from "../../docs.config";
const url = config.REPO_LINK + "/tree/" + config.REPO_BRANCH;

export function ComponentTheme({ name, fileName }) {
  fileName = fileName ?? name;

  return (
    <VStack
      space={4}
      style={{
        "--ifm-link-hover-decoration": "none",
      }}
    >
      <Box rounded="md">
        <Text>
          NativeBase ships with a default theme for each component.{" "}
          <Link
            _text={{ textDecorationLine: "none" }}
            href={url + "/" + "src/theme/components/" + fileName + ".ts"}
            isExternal
          >
            <Text
              borderBottomWidth="2px"
              _hover={{
                bg: "secondary.200",
                color: "black",
                borderColor: "gray.900",
              }}
              borderStyle="dashed"
              rounded="md"
              p={1}
              borderColor="secondary.300"
            >
              Checkout the default theme of {name}
            </Text>
          </Link>
        </Text>
      </Box>
      <Heading size="sm">
        We can easily extend the {name} component theme using extendTheme
        function as shown below.
      </Heading>

      <Link
        _text={{ textDecorationLine: "none" }}
        href={"customizing-components"}
      >
        <Text
          borderBottomWidth="2px"
          _hover={{
            bg: "secondary.200",
            color: "black",
            borderColor: "gray.900",
          }}
          borderStyle="dashed"
          py={1}
          borderColor="secondary.300"
          fontWeight="bold"
        >
          Read more about extending component theme here.
        </Text>
      </Link>
    </VStack>
  );
}
