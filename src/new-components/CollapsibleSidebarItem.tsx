import { useState, useRef, useEffect } from "react";
import { Box, Pressable, Collapse, HStack, AddIcon } from "native-base";
import React from "react";
import { Animated } from "react-native";

export const CollapsibleSidebarItem = (props: any) => {
  const { children, title, level, collapsed } = props;
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <Box mb={!isCollapsed && level == 0 ? "9" : "0"}>
      <Pressable
        onPress={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        <HStack
          justifyContent="space-between"
          alignItems="center"
          px="6"
          py="2"
        >
          <Box
            pl={level * 10 + "px"}
            flexShrink="1"
            _text={{
              fontWeight: "medium",
              fontSize: "md",
              _dark: { color: "sidebarItemHeadingTextDark" },
              _light: { color: "sidebarItemHeadingTextLight" },
            }}
          >
            {title}
          </Box>
          <RotatingView isCollapsed={isCollapsed}>
            <AddIcon size="3" />
          </RotatingView>
        </HStack>
      </Pressable>
      <Collapse isOpen={!isCollapsed}>{children}</Collapse>
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
                outputRange: ["0deg", "45deg"],
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
