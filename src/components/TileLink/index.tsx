import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Box, Text, Factory, HStack, Pressable } from "native-base";

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
  _description,
  TitleIcon,
  _titleIcon,
  _title,
  ...props
}: any) {
  const Image = Factory(NextImage);
  return (
    <Link passHref href={url}>
      <Pressable
        flex="1"
        position="relative"
        overflow="hidden"
        py="6"
        px="4"
        shadow="2"
        rounded="md"
        _dark={{
          bg: "blueGray.800",
          _hover: {
            bg: "blueGray.700",
          },
        }}
        _light={{
          bg: "coolGray.200",
          _hover: {
            bg: "coolGray.300",
          },
        }}
        {...props}
      >
        <HStack space={TitleIcon ? "1" : "0"}>
          {TitleIcon && <TitleIcon {..._titleIcon} />}
          <Text bold mb="2" fontSize="md" {..._title}>
            {title}
          </Text>
        </HStack>
        <Text fontSize="sm" lineHeight="sm" {..._description}>
          {description}
        </Text>
        {imgSrc && (
          <Box {..._Image}>
            <Image
              height="100%"
              width="100%"
              layout="fill"
              src={imgSrc}
              alt="image"
            />
          </Box>
        )}
      </Pressable>
    </Link>
  );
}
