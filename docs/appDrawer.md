---
id: appDrawer
title: App drawer
---

Creating an app drawer like layout is very common and with NativeBase's SimpleGrid make this extremely simple while still keeping it extremely customisable. Here is an example to illustrate it.

```SnackPlayer name=AppDrawer
import React from "react";
import { IconButton, SimpleGrid, Icon, NativeBaseProvider } from "native-base";
import {MaterialIcons} from '@expo/vector-icons';

function AppDrawer(){
  const icons = [
    "bolt",
    "build",
    "cloud",
    "delivery-dining",
    "favorite",
    "music-note",
    "invert-colors-on",
    "navigation",
    "settings",
    "sports-esports",
    "shield",
    "photo-camera",
    "network-wifi",
    "nightlight-round",
    "flight",
    "extension",
    "duo",
    "album",
    "access-alarm",
    "forum",
  ];

  return <SimpleGrid columns={5} spacingY={4} spacingX={4}>
      {icons.map((icon) => (
        <IconButton
          borderRadius="full"
          colorScheme="indigo"
          variant="solid"
          p={4}
          icon={<Icon name={icon} as={MaterialIcons} size='sm' />}
        />
      ))}
    </SimpleGrid>
}

export default function () {
  return (
  <NativeBaseProvider>
    <AppDrawer/>
  </NativeBaseProvider>
  );
}
```

```SnackPlayer name=Drawer-Navigation dependencies=@react-navigation/stack@5.1.0,@react-navigation/drawer,@react-navigation/native@5.0.8,react-native-vector-icons,react-native-gesture-handler@1.10.2
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
        <HamburgerIcon ml={2}/>
      </Pressable>
      <Center flex={1} >
        <Heading>{props.route.name} Screen</Heading>
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

<!--

NOTE: This is how we can add extra dependencies
```SnackPlayer name=AppDrawer dependencies=@react-navigation/native,react-navigation/drawer
``` -->
