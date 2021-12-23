import Link from "next/link";
import { Button, Box, Heading, Text, Pressable, ScrollView } from "native-base";
import { ScrollContext } from "./ScrollContext";
import React, { useEffect, useState, useContext } from "react";
export default function Toc(props: any) {
  const { tocArray } = props;
  return (
    <ScrollView>
      <Box w="64" py="16" px="8">
        {tocArray.length !== 0 && (
          <Heading fontSize="xl" fontWeight="medium" mb="4">
            Quick Nav
          </Heading>
        )}
        <TocItems tocArrayItems={tocArray} />
      </Box>
    </ScrollView>
  );
}

const TocItems = (props: any) => {
  const { tocArrayItems } = props;
  const [elementInViewPort, setElementInViewPort] = useState("");
  return tocArrayItems.map((item: any, index: any) => {
    if (item.level === 0) {
      return null;
    }
    return (
      <TocItem
        item={item}
        key={index}
        elementInViewPort={elementInViewPort}
        setElementInViewPort={setElementInViewPort}
      />
    );
  });
};

const TocItem = ({ item, elementInViewPort, setElementInViewPort }: any) => {
  const { timestamp } = useContext(ScrollContext);
  const checkInViewPort = (el: any) => {
    if(!el){
      return false;
    }
    let rect = el?.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) / 2 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  useEffect(() => {
    const elem = document.getElementById(item.id);
    if (checkInViewPort(elem)) {
      setElementInViewPort(item.id);
    }
  }, [timestamp]);

  return (
    <Link href={"#" + item.id} passHref>
      <Pressable my="1" pl={(item.level - 1) * 12 + "px"}>
        {({ isHovered }) => {
          return (
            <Box
            borderColor="coolGray.400"
              borderLeftWidth={elementInViewPort === item.id ? "4" : "0"}
              ml={elementInViewPort === item.id ? "-1" : "0"}
              _text={{
                flex: 1,
                flexWrap: "wrap",
                fontWeight: "light",
                fontSize: "13px",
                color: "gray.500",
                textDecorationLine: isHovered ? "underline" : "none",
              }}
            >
              {item.title}
            </Box>
          );
        }}
      </Pressable>
    </Link>
  );
};
