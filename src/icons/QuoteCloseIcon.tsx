import { Icon, IIconProps } from "native-base";
import React from "react";
import { Path } from "react-native-svg";

export const QuoteCloseIcon = (props: IIconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <Path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" />
    </Icon>
  );
};
