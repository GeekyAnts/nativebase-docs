import { Icon, IIconProps, useColorModeValue } from "native-base";
import React from "react";
import { Path } from "react-native-svg";

export const PinDropIcon = (props: IIconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <Path
        d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z"
        fill={useColorModeValue("rose.400", "rose.500")}
      />
    </Icon>
  );
};
