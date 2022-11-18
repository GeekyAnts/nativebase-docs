import React from "react";
import { Box, Pressable, Text, useColorModeValue } from "native-base";
import { DocTabContext } from "./TabContext";

export const DocTabs = ({ children, values, defaultValue }: any) => {
  const [selected, setSelected] = React.useState("");
  const onPressHandler = (index: any) => {
    setSelected(values[index].value);
  };
  React.useEffect(() => {
    setSelected(defaultValue);
  }, []);
  const textColor = useColorModeValue("black", "white");
  return (
    // @ts-ignore
    <DocTabContext.Provider value={{ selected, setSelected }}>
      <Box flexDir="row">
        {values.map((value: any, index: any) => {
          return (
            <Pressable
              key={"Tab-" + index}
              _hover={{
                _light: { bg: "inactiveSidebarItemHoverBackgroundLight" },
                _dark: { bg: "inactiveSidebarItemHoverBackgroundDark" },
              }}
              onPress={() => onPressHandler(index)}
              justifyContent={"center"}
              alignItems="center"
              py="4"
              px="6"
              roundedTop="8"
              borderBottomWidth={2}
              _light={{
                borderColor:
                  selected !== values[index].value
                    ? "transparent"
                    : "primary.600",
              }}
              borderColor={
                selected !== values[index].value ? "transparent" : "primary.500"
              }
            >
              <Text
                _light={{
                  color:
                    selected !== values[index].value
                      ? textColor
                      : "primary.600",
                }}
                color={
                  selected !== values[index].value ? textColor : "primary.500"
                }
              >
                {value.label}
              </Text>
            </Pressable>
          );
        })}
      </Box>
      {children}
    </DocTabContext.Provider>
  );
};
