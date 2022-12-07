import React from "react";
import { Badge, Box, ScrollView, Text, VStack } from "native-base";
import { Li } from "./Li";

export const TableBox = ({ isPropTable, children }: any) => {
  if (isPropTable) {
    let tableHeadings: string[] = [];
    let tableJson: any = [];
    for (let i = 0; i < children[0].props.children.length; i++) {
      tableHeadings.push(children[0].props.children[i].props.children);
    }
    for (let i = 1; i < children.length; i++) {
      let tableJsonData: any = {};
      for (let j = 0; j < tableHeadings.length; j++) {
        tableJsonData[tableHeadings[j]] =
          children[i].props.children[j].props.children;
      }
      tableJson.push(tableJsonData);
    }

    return (
      <Box mb="8">
        {tableJson.map((data: any, index: any) => {
          return (
            <Box key={index}>
              <Badge
                colorScheme="cyan"
                _light={{ bg: "primary.100" }}
                _dark={{ bg: "primary.900" }}
                variant="subtle"
                alignSelf="flex-start"
                mt="6"
                mb="2"
                _text={{
                  fontSize: "md",
                  _dark: { color: "primary.400" },
                  _light: { color: "primary.700" },
                }}
                py="0"
              >
                {data.Name}
              </Badge>
              <Box
                my="2"
                borderBottomWidth="1"
                borderColor="coolGray.500:alpha.30"
                // borderStyle="dashed"
                rounded="1"
              />
              <VStack space="3" mb="4" mt="2">
                {data.Description !== "-" && (
                  <Text
                    fontSize="md"
                    _dark={{ color: "coolGray.300" }}
                    _light={{ color: "coolGray.600" }}
                  >
                    {data.Description}
                  </Text>
                )}
                <Li>
                  <Text
                    // fontWeight="light"
                    fontSize="md"
                    _dark={{ color: "coolGray.300" }}
                    _light={{ color: "coolGray.800" }}
                  >
                    Type:{" "}
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    _dark={{ color: "coolGray.50" }}
                    _light={{ color: "coolGray.900" }}
                  >
                    {data.Type}
                  </Text>
                </Li>
                {data.Default !== "-" && (
                  <Li>
                    <Text
                      // fontWeight="light"
                      fontSize="md"
                      _dark={{ color: "coolGray.300" }}
                      _light={{ color: "coolGray.800" }}
                    >
                      Default:{" "}
                    </Text>
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      _dark={{ color: "coolGray.50" }}
                      _light={{ color: "coolGray.900" }}
                    >
                      {data.Default}
                    </Text>
                  </Li>
                )}
              </VStack>
            </Box>
          );
        })}
      </Box>
    );
  } else {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        mb="6"
      >
        <Box w="800px">{children}</Box>
      </ScrollView>
    );
  }
};
