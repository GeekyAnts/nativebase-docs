---
id: loginsignupforms
title: Login/Signup Forms
---

## Example

### Login Form

```SnackPlayer name=login dependencies=react-native-linear-gradient
import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
} from 'native-base';

export default function App() {

 return (
      <NativeBaseProvider>
      <Box
        flex={1}
        p={2}
        bg="white"
        px={5}
        mt={{ base: 16, lg: 0 }}
        maxWidth="600px"
        mx="auto"
        w="100%"
      >
        <Heading size="2xl">
          Welcome
        </Heading>
        <Heading color="coolGray.400" size="md">
          Sign in to continue!
        </Heading>

        <VStack space={5} mt={20}>
          <FormControl>
            <FormControl.Label>
              <Text bold fontSize="sm" >
                Email ID
              </Text>
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb={6}>
            <FormControl.Label>
              <Text bold fontSize="sm">
                Password
              </Text>
            </FormControl.Label>
            <Input type="password" />
            <FormControl.HelperText>
              <Link
                _text={{ fontSize: 'xs', fontWeight: '700', color:'cyan.500' }}
                alignSelf="flex-end"
                mt={1}
              >
                Forget Password?
              </Link>
            </FormControl.HelperText>
          </FormControl>
          <Button bg='cyan.500' colorScheme="cyan" _text={{color: 'white' }}>
              Login
          </Button>
          <Button

            bg="blueGray.200"
            opacity="0.5"
            _text={{ color: 'lightBlue.600', fontSize: 'sm' }}
            startIcon={
              <Icon
                as={<FontAwesome5 name="facebook-square" />}
                color="lightBlue.600"
                size="sm"
              />
            }
            _pressed={{
              bg: 'blueGray.400',
            }}
          >
            Connect with Facebook
          </Button>
          <HStack mt={12} justifyContent="center">
            <Text>I'm a new user. </Text>
            <Link _text={{ color: 'cyan.500' }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
```

### Signup Form

```SnackPlayer name=Signup dependencies=react-native-linear-gradient
import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
} from 'native-base';

export default function App() {

return (
    <NativeBaseProvider>
      <Box flex={1} p={2} bg="white" px={5} mt={{ base: 10, lg:0 }}
        maxWidth="600px"
        mx="auto"
        w="100%"
        safeAr
      >
        <Heading size="2xl">
          Create Account
        </Heading>
        <Heading color="coolGray.400" size="md">
          Sign up to get Started!
        </Heading>

        <VStack space={5} mt={{ base: 20, lg: 8 }}>
         <FormControl>
            <FormControl.Label>
              <Text bold fontSize="sm" >
               Fullname
              </Text>
            </FormControl.Label>
            <Input />

          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text bold fontSize="sm" >
                Email ID
              </Text>
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb={6}>
            <FormControl.Label>
              <Text bold fontSize="sm" >
                Password
              </Text>
            </FormControl.Label>
            <Input type="password" />

          </FormControl>
          <Button
          bg="cyan.500"
           _text={{ color: 'white' }} >
             Signup
          </Button>
          <Button
            bg="blueGray.200"
            opacity="0.5"
            _text={{ color: 'lightBlue.600', fontSize: 'sm' }}
            startIcon={
              <Icon
                as={<FontAwesome5 name="facebook-square" />}
                color="lightBlue.600"
                size="sm"
              />
            }
            _pressed={{
              bg: 'blueGray.400',
            }}
          >
            Connect with Facebook
          </Button>
          <HStack mt={12} justifyContent="center">
            <Text>I'm a already a member. </Text>
            <Link _text={{ color: 'cyan.500' }} href="#">
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
```
