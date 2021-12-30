import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  HStack,
  IconButton,
  Text,
  Pressable,
  VStack,
  Box,
  HamburgerIcon,
  Slide,
  useColorModeValue,
  SunIcon,
  useColorMode,
  Collapse,
} from "native-base";
import { Link as NBLink } from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { useRouter } from "next/router";
import { AppContext } from "../AppContext";
import versions from "../../versions.json";
import { isLatestVersion, isLatestVersionSlug } from "../utils";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

export default function MobileNavbar(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpenSidebar, setIsOpenSidebar } = props;
  // useEffect(() => {
  //   window.document.body.addEventListener("click", () => {
  //     setIsNavbarOpen(false);
  //   });
  // });
  return (
    <HStack
      px="6"
      w="100%"
      justifyContent="space-between"
      h="16"
      alignItems="center"
    >
      <HStack alignItems="center" space="4">
        <IconButton
          icon={<HamburgerIcon />}
          onPress={() => {
            setIsOpenSidebar(!isOpenSidebar);
          }}
        />
        <NativebaseLogo />
      </HStack>
      <HStack alignItems="center" space="4">
        <DocSearch
          appId="QT6M4WLEXP"
          indexName="nativebase-v3"
          apiKey="3030e522f40cbea2b0386cdca3d88503"
        />
        <IconButton
          onPress={toggleColorMode}
          colorScheme="gray"
          _icon={{ size: "5", color: "coolGray.500" }}
          icon={<SunIcon />}
        />
      </HStack>
    </HStack>
  );
}
