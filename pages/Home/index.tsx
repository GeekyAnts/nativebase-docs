import React, { useState } from "react";
import {
  Box,
  Center,
  CloseIcon,
  Divider,
  HamburgerIcon,
  Heading,
  HStack,
  Icon,
  Input,
  Pressable,
  Image,
  Text,
  useBreakpointValue,
  VStack,
  View,
} from "native-base";
import ZomatoCategories from "./ZomatoCategories";
// import Footer from "../../components/Footer";
// import Image from "next/image";
import { AntDesign, Entypo, FontAwesome } from "@native-base/icons";

// const img = require("/public/images/tomatoWhite.png");
export default function Home() {
  const isTablet = useBreakpointValue({
    base: false,
    md: true,
  });

  const [isSlideOpen, setSlideOpen] = useState(false);
  console.log("HEREEEE");
  return (
    <Box w="100%">
      <VStack
        alignItems="center"
        w="100%"
        bg="coolGray.50"
        display={!isSlideOpen ? "flex" : "none"}
      >
        <VStack w="100%" h={500} nativeID="1234">
          {/* <Image
            position="absolute"
            zIndex="-1"
            source={{
              uri: "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png",
            }}
            alt="Alternate Text"
            width="100%"
            height={500}
          /> */}
          {/* {isTablet ? (
            <HStack
              alignItems="center"
              justifyContent="space-between"
              mx={{ base: 10, md: 20, lg: 40 }}
              py={4}
            >
              <Pressable flexDir="row" alignItems="center">
                <Icon as={FontAwesome} name="mobile" size="xs" color="white" />
                <Text color="white" fontWeight="medium" fontSize="md">
                  Get the App
                </Text>
              </Pressable>

              <HStack space={{ base: "5", sm: "10" }} alignItems="center">
                <Pressable>
                  <Text color="white" fontWeight="medium" fontSize="md">
                    Add restaurant
                  </Text>
                </Pressable>
                <Pressable>
                  <Text color="white" fontWeight="medium" fontSize="md">
                    Log in
                  </Text>
                </Pressable>
                <Pressable>
                  <Text color="white" fontWeight="medium" fontSize="md">
                    Sign up
                  </Text>
                </Pressable>
              </HStack>
            </HStack>
          ) : (
            <HStack>
              <Pressable m="3" onPress={() => setSlideOpen(true)}>
                <HamburgerIcon color="white" />
              </Pressable>
            </HStack>
          )} */}
          <Center mt={20} w="100%">
            {/* <Image
              width={80}
              height={16}
              source={{ uri: img.default.src }}
              alt="Alternate Text"
            /> */}
            <View
              textAlign="center"
              bg={{ base: "red.800", md: "green.300", lg: "blue.300" }}
              // w={{ base: "90%", md: "60%", lg: "48%" }}
              // color="white"
              // fontSize={"3xl"}
              // fontSize={{ base: "xl", md: "3xl", lg: "3xl", xl: "4xl" }}
              // fontSize={["3xl", "3xl", "4xl"]}
              fontWeight="normal"
              lineHeight="xs"
              mt={10}
              // mx={{ base: 10 }}
            >
              Discover the best food &amp; drinks in Delhi NCR
            </View>

            {/* <HStack
              bg="white"
              space="3"
              alignItems="center"
              w={{ base: "90%", md: "60%", lg: "48%" }}
              py={2}
              mt={12}
              borderRadius="lg"
            >
              <Pressable flexDir="row" alignItems="center">
                <Icon
                  ml="2"
                  as={Entypo}
                  name="location-pin"
                  size="6"
                  color="red.400"
                />
                <Text color="coolGray.500" fontSize="md" mx="1">
                  Bangla Sahib Gurdwara |
                </Text>
                <Icon
                  as={AntDesign}
                  name="caretdown"
                  size="3"
                  color="coolGray.600"
                />
                <Divider h={5} w={0.5} ml={2} orientation="vertical" />
              </Pressable>
              <HStack space="3" alignItems="center" flex={1}>
                <Icon
                  ml={3}
                  as={AntDesign}
                  name="search1"
                  size="5"
                  color="coolGray.500"
                />
                <Input
                  w="100%"
                  _hover={{ bg: "white" }}
                  _focus={{ bg: "white" }}
                  color="coolGray.500"
                  fontSize="md"
                  flex={1}
                  borderWidth={0}
                  outline="undefined"
                />
              </HStack>
            </HStack> */}
          </Center>
        </VStack>
        {/* <ZomatoCategories /> */}
        {/* <Footer /> */}
      </VStack>
      {/* <Box
        w="100%"
        h="100vh"
        bg="white"
        display={isSlideOpen ? "flex" : "none"}
      >
        <HStack
          justifyContent="space-between"
          my="6"
          px="4"
          alignItems="center"
        >
          <Pressable onPress={() => setSlideOpen(false)}>
            <CloseIcon size="xs" color="black" />
          </Pressable>
          <Heading fontWeight="black" color="black" size="xl" italic>
            Tomato
          </Heading>
        </HStack>
        <VStack py="2" px="7" space="8" mt="8">
          <Pressable>
            <Text color="trueGray.500" fontSize="xl">
              Add restaurant
            </Text>
          </Pressable>
          <Pressable>
            <Text color="trueGray.500" fontSize="xl">
              Log in
            </Text>
          </Pressable>
          <Pressable>
            <Text color="trueGray.500" fontSize="xl">
              Sign up
            </Text>
          </Pressable>
        </VStack>
      </Box> */}
    </Box>
  );
}
