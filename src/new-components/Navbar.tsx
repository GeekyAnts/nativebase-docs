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
  Link as NBLink,
  Icon,
  Box,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { isLatestVersion, isLatestVersionSlug } from "../utils";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useRouter } from "next/router";
import versions from "../../versions.json";
import { FontAwesome } from "@expo/vector-icons";
import Discord from "./Discord";
import GitHub from "./Github";
import GeekyantsLogo from "./GeekyantsLogo";

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
      // position="absolute"
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
          //@ts-ignore
          _dark={{ bg: "blueGray.900" }}
          //@ts-ignore
          _light={{ bg: "blueGray.100" }}
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
            onPress={() => {
              setActiveVersion("next");
              updateActiveVersion("next", versions);
            }}
            _light={{
              bg: "next" === activeVersion ? "coolGray.200" : "coolGray.50",
            }}
            _dark={{
              bg: "next" === activeVersion ? "coolGray.800" : "coolGray.800",
            }}
          >
            next
          </Menu.Item>
          {versions.map((version: string, index: any) => {
            return (
              <Menu.Item
                key={index}
                onPress={() => {
                  setActiveVersion(isLatestVersion(version) ? "" : version);
                  updateActiveVersion(
                    isLatestVersion(version) ? "" : version,
                    versions
                  );
                }}
                _light={{
                  bg:
                    version === activeVersion ? "coolGray.200" : "coolGray.50",
                }}
                _dark={{
                  bg:
                    version === activeVersion ? "coolGray.800" : "coolGray.800",
                }}
              >
                {version}
              </Menu.Item>
            );
          })}
        </Menu>
        <NBLink
          href="https://startup.nativebase.io/?utm_source=DocsHeader&utm_medium=ad-banner&utm_campaign=NativeBase_3_Docs"
          isExternal
          _text={{
            textDecorationLine: "none",
            color: "primary.500",
            fontSize: "md",
          }}
          _hover={{ _text: { textDecorationLine: "underline" } }}
        >
          Announcing NativeBase Startup+ bundle 🎉
        </NBLink>
      </HStack>
      <HStack space="2" alignItems="center">
        <Box px="2">
          <NBLink href="https://discord.com/invite/TSgCw2UPmb" isExternal>
            <GitHub />
          </NBLink>
        </Box>
        <Box px="2">
          <NBLink href="https://github.com/GeekyAnts/nativebase" isExternal>
            <Discord />
          </NBLink>
        </Box>

        <Link href="/" passHref>
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
              fontSize: "sm",
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
        <NBLink
          href="https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase"
          isExternal
        >
          <Button
            variant="unstyled"
            _text={{
              color: "coolGray.400",
              fontWeight: "normal",
              fontSize: "sm",
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
            leftIcon={<GeekyantsLogo size="sm" />}
          >
            Hire us
          </Button>
        </NBLink>
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
