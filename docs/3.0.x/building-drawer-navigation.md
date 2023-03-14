---
id: buildingDrawerNavigation
title: Drawer Navigation
---

Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens.

## Example

Here is an example to show how easily and quickly we can use React Native's [DrawerNavigation](https://reactnavigation.org/docs/drawer-based-navigation/) in NB.

```jsx isSnackPlayer name="Building Drawer Navigation"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <HStack alignItems="center" mt={6}>
      <Pressable
        onPress={() => props.navigation.toggleDrawer()}
        position="absolute"
        ml={2}
        zIndex={1}
      >
        <HamburgerIcon ml={2} size="sm" />
      </Pressable>
      <Center flex={1}>
        <Heading size="md">{props.route.name}</Heading>
      </Center>
    </HStack>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Inbox":
      return "email";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space={6} my={2} mx={1}>
        <Box px={4}>
          <Text bold color="gray.700">
            Mail
          </Text>
          <Text fontSize={14} mt={1} color="gray.500" fontWeight={500}>
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space={4}>
          <VStack space={3}>
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px={5}
                py={3}
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space={7} alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size={5}
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight={500}
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space={5}>
            <Text fontWeight={500} fontSize={14} px={5} color="gray.500">
              Labels
            </Text>
            <VStack space={3}>
              <Pressable px={5} py={3}>
                <HStack space={7} alignItems="center">
                  <Icon
                    color="gray.500"
                    size={5}
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight={500}>
                    Family
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px={5} py={2}>
                <HStack space={7} alignItems="center">
                  <Icon
                    color="gray.500"
                    size={5}
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight={500}>
                    Friends
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px={5} py={3}>
                <HStack space={7} alignItems="center">
                  <Icon
                    color="gray.500"
                    size={5}
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text fontWeight={500} color="gray.700">
                    Work
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Inbox" component={Component} />
        <Drawer.Screen name="Outbox" component={Component} />
        <Drawer.Screen name="Favorites" component={Component} />
        <Drawer.Screen name="Archive" component={Component} />
        <Drawer.Screen name="Trash" component={Component} />
        <Drawer.Screen name="Spam" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}
export default function Example() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
```
