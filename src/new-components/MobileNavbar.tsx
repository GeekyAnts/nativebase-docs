import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  HStack,
  IconButton,
  Text,
  Pressable,
  Button,
  VStack,
  Box,
  HamburgerIcon,
  Slide,
  useColorModeValue,
  SunIcon,
  useColorMode,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { useRouter } from "next/router";
import { AppContext } from "../AppContext";
import versions from "../../versions.json";
import { isLatestVersion, isLatestVersionSlug } from "../utils";

export default function MobileNavbar(props: any) {
  const { isNavbarOpen, setIsNavbarOpen } = useContext(AppContext);
  const [isCollapsible, setIsCollapsible] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const { activeVersion, setActiveVersion } = useContext(AppContext);
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
  useEffect(() => {
    window.document.body.addEventListener("click", () => {
      setIsNavbarOpen(false);
    });
  });
  return (
    <HStack
      w="100%"
      borderBottomWidth="1"
      h="16"
      px="6"
      _light={{ borderColor: "borderColorLight" }}
      _dark={{ borderColor: "borderColorDark" }}
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

            <Box pt="3" px={{ base: "2", sm: "3" }}>
              <Pressable
                rounded="md"
                // @ts-ignore
                onPress={() => {
                  setIsCollapsible(!isCollapsible);
                }}
                mb="3"
              >
                <HStack justifyContent="space-between" px="3" py="1">
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
                    transform={isCollapsible ? "rotate(90)" : ""}
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
              <VStack display={isCollapsible ? "flex" : "none"} space="1">
                <Pressable
                  px="4"
                  py="1"
                  mx="4"
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
                {versions.map((version: string, index: any) => {
                  return (
                    <Pressable
                      // @ts-ignore
                      accessibilityLabel={version}
                      isUnderlined={false}
                      onPress={() => {
                        setActiveVersion(
                          isLatestVersion(version) ? "" : version
                        );
                        updateActiveVersion(
                          isLatestVersion(version) ? "" : version,
                          versions
                        );
                        setIsNavbarOpen(false);
                      }}
                      key={index}
                      px="4"
                      py="1"
                      mx="4"
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
                            : "transparent",
                      }}
                      _dark={{
                        bg:
                          version === activeVersion
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
            </Box>
          </VStack>
        </Box>
      </Slide>
    </HStack>
  );
}
