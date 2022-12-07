import {
  createIcon,
  IIconProps,
  useColorModeValue,
  useToken,
} from "native-base";
import React from "react";
import { Path } from "react-native-svg";

export const BookMarkIcon = (props: IIconProps) => {
  const NewIcon = createIcon({
    viewBox: "0 0 18 18",
    path: [
      <Path
        d="M14.25 13.5L15.75 14.25V2.25C15.75 1.425 15.075 0.75 14.25 0.75H6.7425C5.9175 0.75 5.25 1.425 5.25 2.25H12.75C13.575 2.25 14.25 2.925 14.25 3.75V13.5ZM11.25 3.75H3.75C2.925 3.75 2.25 4.425 2.25 5.25V17.25L7.5 15L12.75 17.25V5.25C12.75 4.425 12.075 3.75 11.25 3.75Z"
        fill={useColorModeValue(
          useToken("colors", "coolGray.700"),
          useToken("colors", "coolGray.50")
        )}
      />,
    ],
  });
  return <NewIcon {...props} />;
};
