import React from "react";
import Link from "next/link";
import { Box, Text, Image } from "native-base";

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
  ...props
}: any) {
  return (
    <Link
      passHref
      href={url}
    >
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
        <div
          className="absolute h-20 w-20"
          style={imgStyle ? imgStyle : { right: -20, top: -10 }}
        >
          {imgSrc && <img src={imgSrc}></img>}
        </div>
      </Box>
    </Link>
  );
}
