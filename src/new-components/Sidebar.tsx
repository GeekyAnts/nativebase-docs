import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { Box, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { isLatestVersionSlug } from "../utils";
import { SidebarBadge } from "./SidebarBadge";
import { CollapsibleSidebarItem } from "./CollapsibleSidebarItem";
import Link from "next/link";

const Hoverable = ({ children }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const child = typeof children === "function" ? children(isHovered) : children;

  const hoverIn = () => setIsHovered(true);
  const hoverOut = () => setIsHovered(false);

  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
  });
};

export default function Sidebar(props: any) {
  const { sidebar, isMobile, setIsOpenSidebar } = props;
  return (
    // @ts-ignore
    <ScrollView overflowY="overlay">
      <Box
        py="5"
        w={isMobile ? "100%" : "64"}
        flex="1"
        borderRightWidth={isMobile ? "0" : "1"}
        _light={{
          borderColor: "borderColorLight",
          bg: "sidebarBackgroundLight",
        }}
        _dark={{ borderColor: "borderColorDark", bg: "sidebarBackgroundDark" }}
      >
        <SidebarItem
          sidebarItems={sidebar}
          level={0}
          isMobile={isMobile}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      </Box>
    </ScrollView>
  );
}

const SidebarItem = (props: any) => {
  const { sidebarItems, level, isMobile, setIsOpenSidebar } = props;
  const { activeVersion, activeSidebarItem, setActiveSidebarItem } =
    useContext(AppContext);

  return sidebarItems.map((item: any, index: any) => {
    if (item?.notVisibleInSidebar === true) return null;
    return (
      <Box key={index} w="100%">
        {item.pages === undefined ? (
          <Hoverable>
            {(isHovered: any) => {
              return (
                <Box
                  // //@ts-ignore
                  // onPress={() => {
                  //   setActiveSidebarItem(item.id);
                  //   if (isMobile) {
                  //     setIsOpenSidebar(false);
                  //   }
                  // }}
                  _light={{
                    bg:
                      item.id === activeSidebarItem
                        ? isHovered
                          ? "activeSidebarItemHoverBackgroundLight:alpha.80"
                          : "activeSidebarItemBackgroundLight:alpha.60"
                        : isHovered
                        ? "inactiveSidebarItemHoverBackgroundLight"
                        : "transparent",
                  }}
                  _dark={{
                    bg:
                      item.id === activeSidebarItem
                        ? isHovered
                          ? "activeSidebarItemHoverBackgroundDark"
                          : "activeSidebarItemBackgroundDark"
                        : isHovered
                        ? "inactiveSidebarItemHoverBackgroundDark"
                        : "transparent",
                  }}
                  bg={item.id === activeSidebarItem ? "cyan.100" : undefined}
                >
                  <Link
                    passHref
                    href={`${
                      isLatestVersionSlug(activeVersion)
                        ? ""
                        : activeVersion + "/"
                    }${item.id}`}
                  >
                    <a
                      onClick={() => {
                        setActiveSidebarItem(item.id);
                        if (isMobile) {
                          setIsOpenSidebar(false);
                        }
                      }}
                    >
                      <Box pl="8" px="4" py="2">
                        <HStack
                          space="3"
                          alignItems="center"
                          pl={level > 1 ? level + 14 + "px" : "0px"}
                        >
                          <Text
                            fontWeight="300"
                            fontSize="sm"
                            _dark={{ color: "sidebarItemTextDark" }}
                            _light={{ color: "sidebarItemTextLight" }}
                          >
                            {item.title}
                          </Text>
                          {item?.status && (
                            <SidebarBadge status={item.status} />
                          )}
                        </HStack>
                      </Box>
                    </a>
                  </Link>
                </Box>
              );
            }}
          </Hoverable>
        ) : (
          <CollapsibleSidebarItem
            isMobile={isMobile}
            title={item.title}
            level={level}
            collapsed={item.isCollapsed || false}
            setIsOpenSidebar={setIsOpenSidebar}
          >
            <SidebarItem
              sidebarItems={item.pages}
              level={level + 1}
              setIsOpenSidebar={setIsOpenSidebar}
              isMobile={isMobile}
            />
          </CollapsibleSidebarItem>
        )}
      </Box>
    );
  });
};