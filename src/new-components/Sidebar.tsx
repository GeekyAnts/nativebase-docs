import Link from "next/link";
import {
  Box,
  HStack,
  Menu,
  Pressable,
  ScrollView,
  Text,
  Badge,
} from "native-base";

export default function Sidebar(props: any) {
  const { sidebar } = props;

  return (
    <ScrollView flexShrink="0">
      <Box py="5" w="64" borderRightWidth="1" borderColor="gray.100">
        <SidebarItem sidebarItems={sidebar} level={0} />
      </Box>
    </ScrollView>
  );
}

const SidebarItem = (props: any) => {
  const { sidebarItems, level } = props;
  return sidebarItems.map((item: any, index: any) => {
    return (
      <Box key={index}>
        {item.pages === undefined ? (
          <Pressable
            _hover={{ bg: item?.status === "coming soon" ? "" : "primary.100" }}
            px="6"
            py="2"
          >
            <HStack space="3">
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
