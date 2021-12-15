import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Box, Text, Factory } from "native-base";

export default function TileLink({
  title,
  description,
  className = "",
  url,
  imgSrc,
  imgStyle,
  titleClassName = "text-white",
  descriptionClassName = "text-gray-100",
  wide = false,
  _Image,
  ...props
}: any) {
  const Image = Factory(NextImage);
  return (
    <Link passHref href={url}>
      <Box
        flex="1"
        position="relative"
        overflow="hidden"
        py="6"
        px="4"
        shadow="6"
        rounded="md"
        {...props}
      >
        <Text bold mb="2" fontSize="md">
          {title}
        </Text>
        <Text fontSize="sm" lineHeight="sm">
          {description}
        </Text>
        {imgSrc && (
          <Box {..._Image}>
            <Image height="100%" width="100%" layout="fill" src={imgSrc} />
          </Box>
        )}
      </Box>
    </Link>
  );
}
