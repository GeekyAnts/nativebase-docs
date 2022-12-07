import React from "react";
import { SearchIcon, Pressable } from "native-base";

export default function AlgoliaSearchButtonMobile(props: any) {
  return (
    <Pressable
      p="2"
      rounded="full"
      // _dark={{ bg: "blueGray.700" }}
      // _light={{ bg: "blueGray.200" }}
      onPress={() => {
        // @ts-ignore
        document.getElementsByClassName("DocSearch-Button")[0]?.click();
      }}
    >
      <SearchIcon
        size="4"
        _dark={{ color: "coolGray.400" }}
        _light={{ color: "coolGray.500" }}
      />
    </Pressable>
  );
}
