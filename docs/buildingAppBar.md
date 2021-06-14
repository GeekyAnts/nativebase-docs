---
id: buildingAppBar
title: AppBar
---

The top app bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

## Example:

We can easily create it using basic layout components from NativeBase.

```SnackPlayer name=App%20Bar
import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';


function AppBar(){
  return (
    <VStack space={4} flex={1} >
      <HStack bg='primary.300' justifyContent='space-between'>
        <HStack alignItems='center'>
          <IconButton icon={<Icon as={<MaterialIcons name='menu' />} />} />
          <Text fontWeight='bold'>Home</Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' />} />
          <IconButton icon={<Icon as={<MaterialIcons name='search' />} />} size='sm' />
          <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' />} />
        </HStack>
      </HStack>
    </VStack>
  )
}

export default function () {
  return (
    <NativeBaseProvider>
      <AppBar/>
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
