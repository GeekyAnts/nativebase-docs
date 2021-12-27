import React, { useContext } from "react";
import { Box } from "native-base";
import { DocTabContext } from "./TabContext";

export const DocTabItem = (props: any) => {
  const { children, value } = props;
  //   @ts-ignore
  const { selected } = useContext(DocTabContext);
  return value === selected && <Box>{children}</Box>;
};
