import { useState, useRef, useEffect } from "react";
import { Box, Pressable, Collapse, HStack, AddIcon, Icon } from "native-base";
import React from "react";
import { Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const CollapsibleSidebarItem = (props: any) => {
  const { children, title, level, collapsed, isMobile, setIsOpenSidebar } =
    props;
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const isHeadingCollapsible = false;
  if (isHeadingCollapsible || level > 0)
    return (
      <Box>
        <Pressable
          onPress={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            pl="8"
            px="4"
            py="2.5"
          >
            <Box
              flexShrink="1"
              _text={{
                fontWeight: "300",
                fontSize: "sm",
                _dark: { color: "sidebarItemHeadingTextDark" },
                _light: { color: "sidebarItemHeadingTextLight" },
              }}
            >
              {title}
            </Box>
            <RotatingView isCollapsed={isCollapsed}>
              <Icon
                as={AntDesign}
                name="caretdown"
                size="2"
                color="coolGray.400"
              />
            </RotatingView>
          </HStack>
        </Pressable>
        <Collapse isOpen={!isCollapsed}>{children}</Collapse>
      </Box>
    );
  else
    return (
      <Box mb="9">
        <HStack
          justifyContent="space-between"
          alignItems="center"
          pl="8"
          px="4"
          py="2.5"
        >
          <Box
            flexShrink="1"
            _text={{
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "sm",
              _dark: { color: "sidebarItemHeadingTextDark" },
              _light: { color: "sidebarItemHeadingTextLight" },
            }}
          >
            {title}
          </Box>
        </HStack>
        {children}
      </Box>
    );
};
const RotatingView = (props: any) => {
  const { isCollapsed, children } = props;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const rotateRight = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const rotateLeft = () => {
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isCollapsed === true) {
      rotateLeft();
    } else {
      rotateRight();
    }
  }, [isCollapsed]);

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "180deg"],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};
