import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import {
  Box,
  HStack,
  Pressable,
  Text,
  ChevronDownIcon,
  Collapse,
  ChevronUpIcon,
  Link as NBLink,
} from "native-base";
import { useRouter } from "next/router";
import versions from "../../versions.json";
import { isLatestVersion, isLatestVersionSlug } from "../utils";

export const MobileSidebarVersionDropdown = (props: any) => {
  const { setIsOpenSidebar } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const router = useRouter();
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
    <Box>
      <Pressable
        onPress={() => {
          setIsCollapsed(!isCollapsed);
        }}
        pl="8"
        pr="4"
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          pt="4"
          pb="2"
        >
          <Text fontWeight="medium" fontSize="md">
            Versions
          </Text>
          {isCollapsed ? (
            <ChevronDownIcon size="sm" />
          ) : (
            <ChevronUpIcon size="sm" />
          )}
        </HStack>
      </Pressable>
      <Collapse isOpen={!isCollapsed}>
        <Pressable
          py="2"
          onPress={() => {
            setActiveVersion("next");
            updateActiveVersion("next", versions);
            setIsOpenSidebar(false);
          }}
        >
          <Text
            pl="8"
            pr="4"
            _light={{
              color:
                activeVersion === "next" ? "cyan.600" : "sidebarItemTextLight",
            }}
            _dark={{
              color:
                activeVersion === "next" ? "cyan.500" : "sidebarItemTextDark",
            }}
          >
            next
          </Text>
        </Pressable>
        {versions.map((version: string, index: any) => {
          return (
            <Pressable
              py="2"
              key={index}
              onPress={() => {
                setActiveVersion(isLatestVersion(version) ? "" : version);
                updateActiveVersion(
                  isLatestVersion(version) ? "" : version,
                  versions
                );
                setIsOpenSidebar(false);
              }}
            >
              <Text
                pl="8"
                pr="4"
                _light={{
                  color:
                    version ===
                    (isLatestVersionSlug(activeVersion)
                      ? versions[0]
                      : activeVersion)
                      ? "cyan.500"
                      : "sidebarItemTextLight",
                }}
                _dark={{
                  color:
                    version ===
                    (isLatestVersionSlug(activeVersion)
                      ? versions[0]
                      : activeVersion)
                      ? "cyan.500"
                      : "sidebarItemTextDark",
                }}
              >
                {version}
              </Text>
            </Pressable>
          );
        })}
      </Collapse>
      <Pressable pl="8" pr="4" py="2">
        <NBLink
          href="https://startup.nativebase.io?utm_source=direct&utm_medium=banner&utm_campaign=nb_docs"
          isExternal
        >
          <Text fontWeight="medium" fontSize="md">
            NativeBase Startup+
          </Text>
        </NBLink>
      </Pressable>
    </Box>
  );
};
