import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
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
  MoonIcon,
  Box,
  useColorModeValue,
  Modal,
  Heading,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { isLatestVersion, isLatestVersionSlug } from "../utils";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useRouter } from "next/router";
import versions from "../../versions.json";
import { FontAwesome } from "@expo/vector-icons";
import Discord from "../icons/DiscordIcon";
import GitHub from "../icons/GithubIcon";
import FigmaIcon from "../icons/FigmaIcon";
import GeekyantsLogo from "./GeekyantsLogo";
import AlgoliaSearchButton from "./AlgoliaSearchButton";
import { parentUrl } from "../../docs.config";

export default function Navbar(props: any) {
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const ref = useRef(null);
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light")
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "light");
    else
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "dark");
  }, [colorMode]);

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
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
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
          <a href={parentUrl}>
            <NativebaseLogo />
          </a>
          <Menu
            //@ts-ignore
            _dark={{ bg: "blueGray.900" }}
            //@ts-ignore
            _light={{ bg: "blueGray.100" }}
            offset={-12}
            w="32"
            trigger={(triggerProps) => {
              return (
                <Pressable
                  p="2"
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                >
                  <HStack alignItems="center" space="1">
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
              _light={{
                bg:
                  "gluestack-ui" === activeVersion
                    ? "coolGray.200"
                    : "coolGray.50",
              }}
              _dark={{
                bg:
                  "gluestack-ui" === activeVersion
                    ? "coolGray.800"
                    : "coolGray.800",
              }}
            >
              <NBLink
                href="https://gluestack.io/?utm_source=nativebase&utm_medium=docs+header&utm_campaign=docs+homepage"
                isExternal
                isUnderlined={false}
              >
                gluestack-ui
              </NBLink>
            </Menu.Item>
            {/* <Menu.Item
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
            </Menu.Item> */}
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
                      version === activeVersion
                        ? "coolGray.200"
                        : "coolGray.50",
                  }}
                  _dark={{
                    bg:
                      version === activeVersion
                        ? "coolGray.700"
                        : "coolGray.800",
                  }}
                >
                  {version}
                </Menu.Item>
              );
            })}
          </Menu>
          {/* <NBLink
            display={{ base: "none", xl: "flex" }}
            href="https://startup.nativebase.io/?utm_source=DocsHeader&utm_medium=ad-banner&utm_campaign=NativeBase_3_Docs"
            isExternal
            _text={{
              textDecorationLine: 'none',
              color: 'primary.500',
              fontSize: 'md',
            }}
            _hover={{ _text: { textDecorationLine: 'underline' } }}
          >
            Announcing NativeBase Startup+ bundle 🎉
          </NBLink> */}
        </HStack>
        <DocSearch
          appId="QT6M4WLEXP"
          indexName="nativebase-v3"
          apiKey="3030e522f40cbea2b0386cdca3d88503"
        />
        <HStack space="6" alignItems="center">
          <AlgoliaSearchButton />
          <NBLink
            href="https://www.figma.com/@nativebase?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_figma"
            isExternal
          >
            <FigmaIcon size="6" />
          </NBLink>
          <NBLink href="https://github.com/GeekyAnts/nativebase" isExternal>
            <GitHub
              size="6"
              fill={useColorModeValue("coolGray.700", "gray.100")}
            />
          </NBLink>
          <NBLink href="/discord" isExternal>
            <Discord
              size="6"
              fill={useColorModeValue("coolGray.700", "gray.100")}
            />
          </NBLink>
          <IconButton
            p="0"
            onPress={() => {
              toggleColorMode();
              const date = new Date();
              if (
                colorMode === "dark" &&
                date.getMonth() === 8 &&
                date.getDate() === 13
              ) {
                setShowModal(true);
              }
            }}
            variant="unstyled"
            _icon={{
              size: "6",
              _light: { color: "coolGray.600" },
              _dark: { color: "coolGray.300" },
            }}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          />
          {/* <Link href="/" passHref>
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
        </Link> */}
          <NBLink
            href="https://geekyants.com/hire?utm_source=nativebase&utm_medium=header&utm_campaign=nativebase"
            isExternal
          >
            <Button
              colorScheme="coolGray"
              variant="outline"
              px="2.5"
              py="1.5"
              _light={{
                borderColor: "coolGray.300",
              }}
              _dark={{
                borderColor: "coolGray.600",
              }}
              _hover={{
                _light: {
                  borderColor: "coolGray.300",
                  bg: "coolGray.300:alpha.50",
                },
                _dark: {
                  borderColor: "coolGray.600",
                  bg: "coolGray.700:alpha.50",
                },
              }}
              leftIcon={<GeekyantsLogo size="sm" />}
            >
              Hire us
            </Button>
          </NBLink>
        </HStack>
      </HStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Light mode active 🚨</Modal.Header>
          <Modal.Body>
            <Text>
              Do you really want to stay here? Really? Really? Pakka? Sure?{" "}
              <Text bold>Are you a true developer?</Text>
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                No
              </Button>
              <Button
                _text={{ color: "coolGray.50" }}
                bg="gray.900"
                _hover={{ bg: "gray.800" }}
                _focus={{ bg: "gray.800" }}
                _pressed={{ bg: "gray.800" }}
                onPress={() => {
                  setShowModal(false);
                  toggleColorMode();
                }}
              >
                Back to DarkMode
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
