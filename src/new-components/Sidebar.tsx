import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import {
  Box,
  HStack,
  Pressable,
  ScrollView,
  Text,
  Collapse,
} from "native-base";
import { useRouter } from "next/router";
import React from "react";
import { isLatestVersionSlug } from "../utils";
import { SidebarBadge } from "./SidebarBadge";
import { CollapsibleSidebarItem } from "./CollapsibleSidebarItem";

export default function Sidebar(props: any) {
  const { sidebar } = props;

  return (
    <ScrollView>
      <Box
        py="5"
        w="64"
        borderRightWidth="1"
        flex="1"
        _light={{
          borderColor: "borderColorLight",
          bg: "sidebarBackgroundLight",
        }}
        _dark={{ borderColor: "borderColorDark", bg: "sidebarBackgroundDark" }}
      >
        <SidebarItem sidebarItems={sidebar} level={0} />
      </Box>
    </ScrollView>
  );
}

const SidebarItem = (props: any) => {
  const { sidebarItems, level } = props;
  const router = useRouter();
  const { activeVersion, activeSidebarItem, setActiveSidebarItem } =
    useContext(AppContext);

  function changeRoute(path: string) {
    router.push(path);
  }

  return sidebarItems.map((item: any, index: any) => {
    if (item?.notVisibleInSidebar === true) return null;
    return (
      <Box key={index} pl={level * 10 + "px"}>
        {item.pages === undefined ? (
          <Pressable
            onPress={() => {
              changeRoute(
                `${
                  isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
                }${item.id}`
              );
              setActiveSidebarItem(item.id);
            }}
            _hover={{
              _dark: {
                bg:
                  item.id === activeSidebarItem
                    ? "activeSidebarItemHoverBackgroundDark"
                    : "inactiveSidebarItemHoverBackgroundDark",
              },
              _light: {
                bg:
                  item.id === activeSidebarItem
                    ? "activeSidebarItemHoverBackgroundLight"
                    : "inactiveSidebarItemHoverBackgroundLight",
              },
            }}
            _light={{
              bg:
                item.id === activeSidebarItem
                  ? "activeSidebarItemBackgroundLight"
                  : "transparent",
            }}
            _dark={{
              bg:
                item.id === activeSidebarItem
                  ? "activeSidebarItemBackgroundDark"
                  : "transparent",
            }}
            bg={item.id === activeSidebarItem ? "cyan.100" : undefined}
            px="6"
            py="2"
          >
            <HStack space="3" alignItems="center">
              <Text
                fontWeight="300"
                fontSize="sm"
                _dark={{ color: "sidebarItemTextDark" }}
                _light={{ color: "sidebarItemTextLight" }}
              >
                {item.title}
              </Text>
              {item?.status && <SidebarBadge status={item.status} />}
            </HStack>
          </Pressable>
        ) : (
          <CollapsibleSidebarItem title={item.title}>
            <SidebarItem sidebarItems={item.pages} level={level + 1} />
          </CollapsibleSidebarItem>
        )}
      </Box>
    );
  });
};
