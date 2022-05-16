import { Icon, IIconProps } from "native-base";
import React from "react";
import { Path } from "react-native-svg";

export const QuoteOpenIcon = (props: IIconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <Path d="M18 7H15L13 11V17H19V11H16L18 7ZM10 7H7L5 11V17H11V11L8 11L10 7Z" />
    </Icon>
  );
};
