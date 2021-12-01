import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import {
  Box,
  HStack,
  Menu,
  Pressable,
  ScrollView,
  Text,
  Badge,
  Hidden,
  Actionsheet,
  Fab,
  HamburgerIcon,
  IconButton,
  CloseIcon,
  useDisclose,
} from "native-base";
import { useRouter } from "next/router";
import { isLatestVersionSlug } from "../utils";
export default function MobileSidebar(props: any) {
  const { sidebar } = props;
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Hidden from="lg">
      <>
        <Fab
          borderRadius="full"
          placement="bottom-right"
          icon={<HamburgerIcon size="5" />}
          p="2"
          rounded="md"
          px="4"
          bottom="8"
          right="8"
          // @ts-ignore
          onPress={onOpen}
        />
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content roundedTop="0" overflow="auto">
            <SidebarItem sidebarItems={sidebar} level={0} />
          </Actionsheet.Content>
          <IconButton
            variant="solid"
            position="absolute"
            bottom="8"
            px="4"
            right="8"
            // @ts-ignore
            onPress={onClose}
            icon={<CloseIcon size="xs" />}
          />
        </Actionsheet>
      </>
    </Hidden>
  );
}

const SidebarItem = (props: any) => {
  const { sidebarItems, level } = props;
  const router = useRouter();
  const { activeVersion, setActiveVersion } = useContext(AppContext);

  function changeRoute(path: string) {
    router.push(path);
  }

  return sidebarItems.map((item: any, index: any) => {
    return (
      <Box key={index} w="100%">
        {item.pages === undefined ? (
          <Pressable
            // @ts-ignore
            onPress={() => {
              changeRoute(
                `${
                  isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
                }${item.id}`
              );
            }}
            _hover={{
              bg: item?.status === "coming soon" ? "" : "primary.100",
            }}
            px="6"
            py="2"
          >
            <HStack
              space="3"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                color={
                  item?.status === "coming soon"
                    ? "coolGray.400"
                    : "coolGray.700"
                }
                fontSize="13px"
              >
                {item.title}
              </Text>
              {item?.status && (
                <Badge
                  rounded="xl"
                  _text={{
                    textTransform: "capitalize",
                    fontWeight: "light",
                    color:
                      item.status === "deprecated"
                        ? "yellow.700"
                        : "coolGray.700",
                  }}
                  px="1"
                  py="0.5"
                  bg={
                    item.status === "deprecated" ? "yellow.100" : "coolGray.100"
                  }
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
