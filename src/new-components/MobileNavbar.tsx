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

export default function MobileNavbar(props: any) {
  const { isNavbarOpen, setIsNavbarOpen } = useContext(AppContext);
  useEffect(() => {
    window.document.body.addEventListener("click", () => {
      setIsNavbarOpen(false);
    });
  });
  return (
    <>
      {/* navbar on mobile */}
      <HStack
        w="100%"
        borderBottomWidth="1"
        h="16"
        px="6"
        _light={{
          bg: { base: isNavbarOpen ? "black:alpha.30" : "", lg: "" },
          borderColor: "borderColorLight",
        }}
        _dark={{
          bg: { base: isNavbarOpen ? "black:alpha.70" : "", lg: "" },
          borderColor: "borderColorDark",
        }}
        space="5"
        alignItems="center"
      >
        <IconButton
          icon={<HamburgerIcon size="7" />}
          // @ts-ignore
          onPress={() => setIsNavbarOpen(!isNavbarOpen)}
          accessibilityLabel="Mobile Menu"
          aria-controls="mobile-menu"
          aria-expanded="false"
          mr="2"
        />
        <NativebaseLogo />
      </HStack>

      {/* navbar when opened in a left slider */}
      <NavbarSlider />
    </>
  );
}

const NavbarSlider = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useContext(AppContext);
  return (
    <Slide
      in={isNavbarOpen}
      placement="left"
      flex="1"
      height="100%"
      duration={100}
    >
      <Box
        flexDirection="column"
        w="400px"
        height="100vh"
        _light={{ bg: "backgroundLight" }}
        _dark={{ bg: "backgroundDark" }}
        overflow="scroll"
      >
        <VStack space="2">
          {/* navbar in the slider panel  */}
          <NavbarInSliderPanel />

          {/* collapsible versions  */}
          <Versions />
          {/* other navbar items */}
          <NavbarItems />
        </VStack>
      </Box>
    </Slide>
  );
};
const NavbarInSliderPanel = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      space="3"
      alignItems="center"
      h="16"
      px={{ base: "2", sm: "3" }}
      borderBottomWidth="1"
      _light={{ borderColor: "borderColorLight" }}
      _dark={{ borderColor: "borderColorDark" }}
    >
      <NativebaseLogo />
      <IconButton
        // @ts-ignore
        onPress={toggleColorMode}
        colorScheme="gray"
        _icon={{ size: "5", color: "coolGray.500" }}
        icon={<SunIcon />}
      />
    </HStack>
  );
};
const Versions = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const router = useRouter();
  const { isNavbarOpen, setIsNavbarOpen } = useContext(AppContext);

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
    <Box pt="3">
      <Pressable
        // @ts-ignore
        onPress={handleToggle}
        _hover={{
          _dark: {
            bg: "activeSidebarItemHoverBackgroundDark",
          },
          _light: {
            bg: "activeSidebarItemHoverBackgroundLight",
          },
        }}
        py="2"
        mb="1"
      >
        <HStack justifyContent="space-between" px={{ base: "3", sm: "4" }}>
          <Text
            // @ts-ignore
            accessibilityLabel="Versions"
            fontSize="sm"
            color={useColorModeValue("black", "gray.400")}
          >
            Versions
          </Text>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            transform={show ? "rotate(90)" : ""}
            fill="none"
            viewBox="0 0 24 24"
            stroke={useColorModeValue("black", "gray")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 5l6 6-6 6"
            />
          </svg>
        </HStack>
      </Pressable>
      <Collapse isOpen={show}>
        <VStack space="1">
          {/* version : next */}
          <Pressable
            py="2"
            px="8"
            // @ts-ignore
            accessibilityLabel={"next"}
            onPress={() => {
              setActiveVersion("next");
              updateActiveVersion("next", versions);
              setIsNavbarOpen(false);
            }}
            _hover={{
              _dark: {
                bg: "activeSidebarItemHoverBackgroundDark",
              },
              _light: {
                bg: "activeSidebarItemHoverBackgroundLight",
              },
            }}
            _light={{
              bg:
                "next" === activeVersion
                  ? "activeSidebarItemBackgroundLight"
                  : "transparent",
            }}
            _dark={{
              bg:
                "next" === activeVersion
                  ? "activeSidebarItemBackgroundDark"
                  : "transparent",
            }}
          >
            <Text
              _dark={{ color: "sidebarItemTextDark" }}
              _light={{ color: "sidebarItemTextLight" }}
            >
              next
            </Text>
          </Pressable>

          {/* other versions */}
          {versions.map((version: string, index: any) => {
            return (
              <Pressable
                // @ts-ignore
                accessibilityLabel={version}
                isUnderlined={false}
                onPress={() => {
                  setActiveVersion(isLatestVersion(version) ? "" : version);
                  updateActiveVersion(
                    isLatestVersion(version) ? "" : version,
                    versions
                  );
                  setIsNavbarOpen(false);
                }}
                key={index}
                px="8"
                py="2"
                _hover={{
                  _dark: {
                    bg: "activeSidebarItemHoverBackgroundDark",
                  },
                  _light: {
                    bg: "activeSidebarItemHoverBackgroundLight",
                  },
                }}
                _light={{
                  bg:
                    version === activeVersion
                      ? "activeSidebarItemBackgroundLight"
                      : isLatestVersionSlug(activeVersion) && index === 0
                      ? "activeSidebarItemBackgroundLight"
                      : "transparent",
                }}
                _dark={{
                  bg:
                    version === activeVersion
                      ? "activeSidebarItemBackgroundDark"
                      : isLatestVersionSlug(activeVersion) && index === 0
                      ? "activeSidebarItemBackgroundDark"
                      : "transparent",
                }}
              >
                <Text
                  _dark={{ color: "sidebarItemTextDark" }}
                  _light={{ color: "sidebarItemTextLight" }}
                >
                  {version}
                </Text>
              </Pressable>
            );
          })}
        </VStack>
      </Collapse>
    </Box>
  );
};
const NavbarItems = () => {
  return (
    <>
      <Pressable
        py="2"
        px="8"
        // @ts-ignore
        accessibilityLabel={"v2 docs"}
        _hover={{
          _dark: {
            bg: "activeSidebarItemHoverBackgroundDark",
          },
          _light: {
            bg: "activeSidebarItemHoverBackgroundLight",
          },
        }}
      >
        <Text
          _dark={{ color: "sidebarItemTextDark" }}
          _light={{ color: "sidebarItemTextLight" }}
        >
          Looking for{" "}
          <NBLink href="https://v2.nativebase.io/" isExternal>
            <Text
              _light={{ color: "primaryTextLight" }}
              _dark={{ color: "primaryTextDark" }}
            >
              v2.0
            </Text>
          </NBLink>
          ?
        </Text>
      </Pressable>
      <NBLink href="https://github.com/Geekyants/nativebase" isExternal>
        <Pressable
          w="100%"
          py="2"
          px="8"
          // @ts-ignore
          accessibilityLabel={"github"}
          _hover={{
            _dark: {
              bg: "activeSidebarItemHoverBackgroundDark",
            },
            _light: {
              bg: "activeSidebarItemHoverBackgroundLight",
            },
          }}
        >
          <Text
            _dark={{ color: "sidebarItemTextDark" }}
            _light={{ color: "sidebarItemTextLight" }}
          >
            Github
          </Text>
        </Pressable>
      </NBLink>
      <NBLink href="https://discord.com/invite/TSgCw2UPmb" isExternal>
        <Pressable
          w="100%"
          py="2"
          px="8"
          // @ts-ignore
          accessibilityLabel={"Discord"}
          _hover={{
            _dark: {
              bg: "activeSidebarItemHoverBackgroundDark",
            },
            _light: {
              bg: "activeSidebarItemHoverBackgroundLight",
            },
          }}
        >
          <Text
            _dark={{ color: "sidebarItemTextDark" }}
            _light={{ color: "sidebarItemTextLight" }}
          >
            Discord
          </Text>
        </Pressable>
      </NBLink>

      <Link href="https://docs.nativebase.io/" passHref>
        <Pressable
          py="2"
          px="8"
          // @ts-ignore
          accessibilityLabel={"Documentation"}
          _hover={{
            _dark: {
              bg: "activeSidebarItemHoverBackgroundDark",
            },
            _light: {
              bg: "activeSidebarItemHoverBackgroundLight",
            },
          }}
        >
          <Text
            _dark={{ color: "sidebarItemTextDark" }}
            _light={{ color: "sidebarItemTextLight" }}
          >
            Docs
          </Text>
        </Pressable>
      </Link>
      <NBLink
        href="https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase"
        isExternal
      >
        <Pressable
          w="100%"
          py="2"
          px="8"
          // @ts-ignore
          accessibilityLabel={"Hire us"}
          _hover={{
            _dark: {
              bg: "activeSidebarItemHoverBackgroundDark",
            },
            _light: {
              bg: "activeSidebarItemHoverBackgroundLight",
            },
          }}
        >
          <Text
            _dark={{ color: "sidebarItemTextDark" }}
            _light={{ color: "sidebarItemTextLight" }}
          >
            Hire Us
          </Text>
        </Pressable>
      </NBLink>
    </>
  );
};
