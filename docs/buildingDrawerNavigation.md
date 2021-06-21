---
id: buildingDrawerNavigation
title: Drawer Navigation
---

Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens.

## Example

Here is an example to show how easily and quickly we can use React Native's [DrawerNavigation](https://reactnavigation.org/docs/drawer-based-navigation/) in NB.

```SnackPlayer name=Drawer-Navigation dependencies=@react-navigation/stack@5.1.0,@react-navigation/drawer,@react-navigation/native@5.0.8,react-native-vector-icons,react-native-gesture-handler@1.10.2,react-native-linear-gradient,@react-native-community/masked-view@0.1.10,react-native-screens@3.0.0,react-native-reanimated@2.1.0
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
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
  HStack
} from 'native-base';
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <HStack alignItems="center" mt={6}>
      <Pressable onPress={() => props.navigation.toggleDrawer()}>
        <HamburgerIcon ml={2} size="sm"/>
      </Pressable>
      <Center flex={1} >
        <Heading size="md">{props.route.name} Screen</Heading>
      </Center>
    </HStack>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space={2}>
        {props.state.routeNames.map((name, index) => (
          <Button
            key={index}
            bg={index === props.state.index ? 'cyan.500' : 'transparent'}
            colorScheme="blueGray"
            justifyContent="flex-start"
            onPress={(event) => {
              props.navigation.navigate(name);
            }}
            my="4px"
            mx="10px"
            p={2}
            borderRadius={4}
          >
            <Text color={index === props.state.index ? 'white' : 'black'}>
              {name}
            </Text>
          </Button>
        ))}
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1} >
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={Component} />
      <Drawer.Screen name="Feed" component={Component} />
      <Drawer.Screen name="Article" component={Component} />
      <Drawer.Screen name="Blog" component={Component} />
      <Drawer.Screen name="Settings" component={Component} />
      <Drawer.Screen name="Help" component={Component} />
    </Drawer.Navigator>
    </Box>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
```
