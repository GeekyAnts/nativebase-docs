import React from "react";
import { Box,Heading } from "native-base";
export const Admonition = ({children,title,status }: any) => {
  return <Box bg="blueGray.600" p="4">
    <Heading size="md">{title}</Heading>
    {children}
    </Box>;
};
