import { Icon, createIcon, IIconProps } from "native-base";
import React from "react";
import { Rect, Pattern, Use, Image, Circle, Path } from "react-native-svg";

export const CodePlaygroundIcon = (props: IIconProps) => {
  const NewIcon = createIcon({
    viewBox: "0 0 36 36",
    // d: ['M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0','150'],
    path: [
      <Path
        d="M24 13.2012L22.3033 14.8979L25.4061 18.0011L22.3022 21.1043L23.9989 22.8009L28.8002 18.0011L24 13.2012ZM12.0001 22.8009L13.6971 21.1043L10.5939 18.0011L13.6982 14.8979L12.0012 13.2012L7.2002 18.0011L12.0001 22.8009Z"
        fill="#FAFAF9"
      />,
      <Path
        d="M14.0303 28.1791L19.6506 7.2019L21.969 7.8229L16.3483 28.8001L14.0303 28.1791Z"
        fill="#BEF264"
      />,
    ],
  });
  return <NewIcon {...props} />;
//   return (
//     <svg
//       width="36"
//       height="36"
//       viewBox="0 0 36 36"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M24 13.2012L22.3033 14.8979L25.4061 18.0011L22.3022 21.1043L23.9989 22.8009L28.8002 18.0011L24 13.2012ZM12.0001 22.8009L13.6971 21.1043L10.5939 18.0011L13.6982 14.8979L12.0012 13.2012L7.2002 18.0011L12.0001 22.8009Z"
//         fill="#FAFAF9"
//       />
//       <path
//         d="M14.0303 28.1791L19.6506 7.2019L21.969 7.8229L16.3483 28.8001L14.0303 28.1791Z"
//         fill="#BEF264"
//       />
//     </svg>
//   );
};
