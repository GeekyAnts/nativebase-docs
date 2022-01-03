import React from "react";
import {
  HStack,
  IconButton,
  HamburgerIcon,
  SunIcon,
  useColorMode,
  ArrowBackIcon,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

export default function MobileNavbar(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpenSidebar, setIsOpenSidebar } = props;
  return (
    <HStack
      px="6"
      w="100%"
      justifyContent="space-between"
      h="16"
      alignItems="center"
      borderBottomWidth="1"
      _light={{ borderColor: "borderColorLight" }}
      _dark={{ borderColor: "borderColorDark" }}
    >
      <HStack alignItems="center" space="4">
        <IconButton
          pl="0"
          variant="unstyled"
          icon={
            isOpenSidebar ? (
              <ArrowBackIcon size="7" />
            ) : (
              <HamburgerIcon size="7" />
            )
          }
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
