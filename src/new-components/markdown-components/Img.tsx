import React from "react";
import { AspectRatio, Box, Image } from "native-base";
export const Img = (props: any) => {
  let imgSrc = `${props.src}`;
  return (
    <Box w="100%">
      <AspectRatio
        my="10"
        py="10"
        ratio={16 / 10}
        width={props.width ?? "100%"}
      >
        <Image
          alt="disoc"
          src={imgSrc}
          // source={{
          //   uri: require(`../../public/img/theme.png`).default.src,
          // }}
          width={props.width ?? "100%"}
        />
      </AspectRatio>
    </Box>
  );
};
