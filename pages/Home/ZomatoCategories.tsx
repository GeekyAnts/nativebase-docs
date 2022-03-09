import React from "react";

import { useRouter } from "next/router";
import {
  Box,
  Center,
  FlatList,
  Image,
  Pressable,
  useBreakpointValue,
  VStack,
} from "native-base";

const list = [
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
    text: "Order Food Online",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
    text: "Go out for a meal",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
    text: "Zomato Pro",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
    text: "Nightlife & Clubs",
  },
];

function ZomatoCategories() {
  const router = useRouter();
  const noColumn = useBreakpointValue({
    base: 2,
    md: 4,
  });
  return (
    <FlatList
      w="90%"
      mx="4"
      mt="8"
      numColumns={noColumn}
      key={noColumn}
      data={list}
      keyExtractor={(item, index) => "key" + index}
      ItemSeparatorComponent={() => <Box w="10" h="10" />}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      renderItem={({ item, index }) => (
        <Pressable
          key={index}
          onPress={() => {
            router.push("/goformeal");
          }}
          width={{ base: "49%", md: "22%" }}
        >
          <Card item={item} />
        </Pressable>
      )}
    />
  );
}

function Card(props: any) {
  return (
    <VStack
      w="100%"
      alignItems="center"
      borderWidth={1}
      borderColor="coolGray.200"
      borderRadius="lg"
    >
      <Image
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        w="100%"
        h={220}
        source={{
          uri: props.item.imageUri,
        }}
        alt="Alternate Text"
      />
      <Center
        h={20}
        py={2}
        _text={{ fontSize: "lg", textAlign: "center" }}
        color="coolGray.800"
        fontWeight="extrabold"
      >
        {props.item.text}
      </Center>
    </VStack>
  );
}

export default ZomatoCategories;
