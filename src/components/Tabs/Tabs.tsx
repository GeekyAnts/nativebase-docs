import React from "react";
import { Box, Pressable, Text } from "native-base";
import { DocTabContext } from "./TabContext";

export const DocTabs = ({ children, values, defaultValue }: any) => {
  const [selected, setSelected] = React.useState("");
  const onPressHandler = (index: any) => {
    setSelected(values[index].value);
  };
  React.useEffect(() => {
    setSelected(defaultValue);
  }, []);
  return (
    // @ts-ignore
    <DocTabContext.Provider value={{ selected, setSelected }}>
      <Box flexDir="row">
        {values.map((value: any, index: any) => {
          return (
            <Pressable
              key={"Tab-" + index}
              _hover={{ bg: "coolGray.700:alpha.40" }}
              onPress={() => onPressHandler(index)}
              justifyContent={"center"}
              alignItems="center"
              py="4"
              px="5"
              roundedTop="6"
              borderBottomWidth={2}
              borderColor={
                selected !== values[index].value
                  ? "transparent"
                  : "SelectedTabBorderColor"
              }
            >
              <Text
                color={
                  selected !== values[index].value
                    ? "white"
                    : "SelectedTabTextColor"
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
