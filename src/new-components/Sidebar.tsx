import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Box, HStack, Pressable, ScrollView, Text, Badge } from "native-base";
import { useRouter } from "next/router";
import React from "react";
import { isLatestVersionSlug } from "../utils";
export default function Sidebar(props: any) {
  const { sidebar } = props;

  return (
    <ScrollView>
      <Box
        py="5"
        w="64"
        borderRightWidth="1"
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
      <Box key={index}>
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
                bg: "activeSidebarItemHoverBackgroundDark",
              },
              _light: {
                bg: "activeSidebarItemHoverBackgroundLight",
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
                fontSize="13px"
                _dark={{ color: "sidebarItemTextDark" }}
                _light={{ color: "sidebarItemTextLight" }}
              >
                {item.title}
              </Text>
              {item?.status && (
                <Badge
                  rounded="full"
                  _text={{
                    textTransform: "capitalize",
                    fontWeight: "light",
                  }}
                  px="1"
                  py="0.5"
                >
                  {item.status}
                </Badge>
              )}
            </HStack>
          </Pressable>
        ) : (
          <Box mb="5">
            <Box px="6" py="2" _text={{ fontWeight: "medium" }}>
              {item.title}
            </Box>
            <SidebarItem sidebarItems={item.pages} level={level + 1} />
          </Box>
        )}
      </Box>
    );
  });
};
