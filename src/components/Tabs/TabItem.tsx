import React, { useContext } from "react";
import { Box, Pressable, Text } from "native-base";
import { TabContext } from "./TabContext";

export const TabItem = (props: any) => {
  const { children, value } = props;
  //   @ts-ignore
  const { selected } = useContext(TabContext);
  return value === selected && <Box>{children}</Box>;
};
