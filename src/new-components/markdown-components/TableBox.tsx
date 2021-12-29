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
      <Box>
        {tableJson.map((data: any) => {
          return (
            <>
              <Badge
                colorScheme="cyan"
                variant="subtle"
                alignSelf="flex-start"
                mt="6"
                _text={{ fontSize: "sm" }}
                py="0"
              >
                {data.Name}
              </Badge>
              <Box
                my="2"
                borderBottomWidth="2"
                borderColor="#374151"
                borderStyle="dashed"
                rounded="1"
              />
              <VStack space="3" mb="4" mt="2">
                {data.Description !== "-" && <Text>{data.Description}</Text>}
                <Li>
                  <Text color="warmGray.300" fontWeight="light">
                    Type:{" "}
                  </Text>
                  <Text>{data.Type}</Text>
                </Li>
                {data.Default !== "-" && (
                  <Li>
                    <Text color="warmGray.300" fontWeight="light">
                      Default:{" "}
                    </Text>
                    <Text>{data.Default}</Text>
                  </Li>
                )}
              </VStack>
            </>
          );
        })}
      </Box>
    );
  } else {
    return (
      <ScrollView horizontal={true}>
        <Box w="800px">{children}</Box>
      </ScrollView>
    );
  }
};
