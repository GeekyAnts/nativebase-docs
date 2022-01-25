import {
  Icon,
  createIcon,
  IIconProps,
  useColorModeValue,
  useToken,
} from "native-base";
import React from "react";
import { Path } from "react-native-svg";

export const CodePlaygroundIcon = (props: IIconProps) => {
  const NewIcon = createIcon({
    viewBox: "0 0 29 29",
    path: [
      <Path
        d="M22.3334 8.23489L20.1183 10.45L24.1692 14.5014L20.1169 18.5528L22.332 20.7679L28.6004 14.5014L22.3334 8.23489ZM6.6669 20.7679L8.88248 18.5528L4.83108 14.5014L8.88389 10.45L6.66831 8.23489L0.400391 14.5014L6.6669 20.7679Z"
        fill={useColorModeValue(
          useToken("colors", "warmGray.800"),
          useToken("colors", "warmGray.50")
        )}
      />,
      <Path
        d="M9.31641 27.7893L16.654 0.402344L19.6808 1.21309L12.3427 28.6L9.31641 27.7893Z"
        fill={useColorModeValue(
          useToken("colors", "lime.400"),
          useToken("colors", "lime.300")
        )}
      />,
    ],
  });
  return <NewIcon {...props} />;
};
