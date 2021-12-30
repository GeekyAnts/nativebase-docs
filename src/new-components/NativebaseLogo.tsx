import Link from "next/link";
import Image from "next/image";
import { Box, HStack, Menu, Pressable, ScrollView, Text } from "native-base";
import React from "react";

export default function NativebaseLogo(props: any) {
  const { sidebar } = props;

  return (
    <HStack alignItems="center">
      <Image
        alt="Nativebase logo"
        src="https://docs.nativebase.io/img/nativebaselogo.svg"
        layout="fixed"
        width="38"
        height="42"
        quality={100}
      />
      <Text fontWeight="bold" fontSize="20" pl="2">
        NativeBase
      </Text>
    </HStack>
  );
}
