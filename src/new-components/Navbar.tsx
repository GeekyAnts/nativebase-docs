import React from "react";
import Link from "next/link";
import {
  HStack,
  Button,
  AddIcon,
  IconButton,
  SunIcon,
  Menu,
  Text,
  View,
  ChevronDownIcon,
  Pressable,
  useColorMode,
  HamburgerIcon,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { isLatestVersion, isLatestVersionSlug } from "../utils";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useRouter } from "next/router";
import versions from "../../versions.json";

export default function Navbar(props: any) {
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const updateActiveVersion = (version: string, versions: string[]) => {
    const currentPathArray = window?.location.href.split("/");
    let pathArray: string[] = [];
    currentPathArray.map((val, ind) => {
      ind < 3 ? null : pathArray.push(val);
    });
    let path = "";

    if ([...versions, "next"].includes(pathArray[0])) {
      pathArray[0] = version;
    } else {
      pathArray = [version, ...pathArray];
    }

    pathArray.map((val) => {
      path += "/" + val;
    });
    router.push(path);
  };
  return (
    <HStack
      w="100%"
      borderBottomWidth="1"
      _light={{ borderColor: "borderColorLight" }}
      _dark={{ borderColor: "borderColorDark" }}
      px="6"
      h="16"
      justifyContent="space-between"
    >
      <HStack space="4" alignItems="center">
        <NativebaseLogo />
        <Menu
          offset={-15}
          w="32"
          trigger={(triggerProps) => {
            return (
              <Pressable
                p="2"
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <HStack alignItems="center">
                  <Text color="cyan.500">
                    {isLatestVersionSlug(activeVersion)
                      ? versions[0]
                      : activeVersion}
                  </Text>
                  <ChevronDownIcon size="sm" color="cyan.500" />
                </HStack>
              </Pressable>
            );
          }}
        >
          <Menu.Item
            // @ts-ignore
            onPress={() => {
              setActiveVersion("next");
              updateActiveVersion("next", versions);
            }}
            bg={"next" === activeVersion ? "coolGray.200" : "coolGray.50"}
          >
            next
          </Menu.Item>
          {versions.map((version: string, index: any) => {
            return (
              <Menu.Item
                key={index}
                // @ts-ignore
                onPress={() => {
                  setActiveVersion(isLatestVersion(version) ? "" : version);
                  updateActiveVersion(
                    isLatestVersion(version) ? "" : version,
                    versions
                  );
                }}
                bg={version === activeVersion ? "coolGray.200" : "coolGray.50"}
              >
                {version}
              </Menu.Item>
            );
          })}
        </Menu>
      </HStack>
      <HStack space="2" alignItems="center">
        <Link href="#" passHref>
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
            }}
            _hover={{
              _light: {
                // @ts-ignore
                _text: {
                  borderBottomWidth: "1px",
                  borderBottomColor: "inactiveHoverBorderBottomLinkColorLight",
                },
              },
              _dark: {
                // @ts-ignore
                _text: {
                  borderBottomWidth: "1px",
                  borderBottomColor: "inactiveHoverBorderBottomLinkColorDark",
                },
              },
            }}
          >
            Documentation
          </Button>
        </Link>
        <Link href="#" passHref>
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
            }}
            _hover={{
              _light: {
                // @ts-ignore
                _text: {
                  borderBottomWidth: "1px",
                  borderBottomColor: "inactiveHoverBorderBottomLinkColorLight",
                },
              },
              _dark: {
                // @ts-ignore
                _text: {
                  borderBottomWidth: "1px",
                  borderBottomColor: "inactiveHoverBorderBottomLinkColorDark",
                },
              },
            }}
          >
            Case Studies
          </Button>
        </Link>
        <Link href="#" passHref>
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
            }}
            _hover={{
              _light: {
                // @ts-ignore
                _text: {
                  borderBottomWidth: "1px",
                  borderBottomColor: "inactiveHoverBorderBottomLinkColorLight",
                },
              },
              _dark: {
                // @ts-ignore
                _text: {
                  borderBottomWidth: "1px",
                  borderBottomColor: "inactiveHoverBorderBottomLinkColorDark",
                },
              },
            }}
            rightIcon={<AddIcon size="3" />}
          >
            Resources
          </Button>
        </Link>
        <IconButton
          // @ts-ignore
          onPress={toggleColorMode}
          colorScheme="gray"
          _icon={{ size: "5", color: "coolGray.500" }}
          icon={<SunIcon />}
        />
      </HStack>
    </HStack>
  );
}
