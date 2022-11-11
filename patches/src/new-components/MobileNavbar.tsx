import React from "react";
import {
  HStack,
  IconButton,
  HamburgerIcon,
  SunIcon,
  useColorMode,
  ArrowBackIcon,
  Button,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import "@docsearch/css";
import AlgoliaSearchButtonMobile from "./AlgoliaSearchButtonMobile";
import { parentUrl } from "../../docs.config";

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
        <a href={parentUrl}>
          <NativebaseLogo />
        </a>
      </HStack>
      <HStack alignItems="center" space="4">
        <AlgoliaSearchButtonMobile />
        <IconButton
          onPress={toggleColorMode}
          colorScheme="gray"
          _icon={{ size: "5" }}
          _light={{
            // @ts-ignore
            _icon: { color: "coolGray.500" },
          }}
          _dark={{
            // @ts-ignore
            _icon: { color: "coolGray.400" },
          }}
          icon={<SunIcon />}
        />
      </HStack>
    </HStack>
  );
}
