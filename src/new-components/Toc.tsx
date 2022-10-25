import Link from "next/link";
import {
  Box,
  Heading,
  Pressable,
  ScrollView,
  HStack,
  Circle,
} from "native-base";
import { ScrollContext } from "./ScrollContext";
import React, { useEffect, useState, useContext } from "react";
export default function Toc(props: any) {
  const { tocArray } = props;

  if (tocArray.length <= 1) return null;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box py="16" px="4">
        {tocArray.length !== 0 && (
          <Heading
            ml="-1"
            fontSize="md"
            textTransform="uppercase"
            fontWeight="semibold"
            mb="4"
          >
            Quick Nav
          </Heading>
        )}
        <HStack space="6">
          <Box
            my="3"
            borderLeftWidth={2}
            borderColor={"coolGray.700"}
            borderStyle={"dashed"}
            rounded={1}
            _light={{
              borderColor: "tocLeftLightBorder",
            }}
            _dark={{
              borderColor: "tocLeftDarkBorder",
            }}
          />
          <Box w="100%">
            <TocItems tocArrayItems={tocArray} />
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  );
}

const TocItems = (props: any) => {
  const { tocArrayItems } = props;
  const [elementInViewPort, setElementInViewPort] = useState(
    tocArrayItems.length > 0 ? tocArrayItems[0].id : ""
  );
  useEffect(() => {
    setElementInViewPort(tocArrayItems.length > 0 ? tocArrayItems[0].id : "");
  }, [tocArrayItems]);
  return tocArrayItems.map((item: any, index: any, tocArrayItems: any) => {
    if (item.level === 0) {
      return null;
    }
    return (
      <TocItem
        isHeadingID={tocArrayItems[index + 1]?.level === 1}
        item={item}
        key={index}
        tocArrayItems={tocArrayItems}
        elementInViewPort={elementInViewPort}
        setElementInViewPort={setElementInViewPort}
      />
    );
  });
};

const TocItem = ({
  item,
  elementInViewPort,
  setElementInViewPort,
  isHeadingID,
  tocArrayItems,
}: any) => {
  const { timestamp } = useContext(ScrollContext);
  const level = item.level;

  const checkInViewPort = (el: any) => {
    if (!el) {
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
  const getHeadingId = (id: string) => {
    let headingId = "";
    for (let i = 0; i < tocArrayItems.length; i++) {
      if (tocArrayItems[i].level === 1) {
        headingId = tocArrayItems[i].id;
      }
      if (id === tocArrayItems[i].id) {
        return headingId;
      }
    }
    return headingId;
  };

  useEffect(() => {
    const elem = document.getElementById(item.id);
    if (checkInViewPort(elem)) {
      setElementInViewPort(item.id);
    }
  }, [timestamp]);

  return level === 1 ? (
    <Box flexDir="row" alignItems="center" mb={isHeadingID ? "14px" : "0"}>
      <Circle
        ml={-31}
        _light={{
          bg:
            getHeadingId(elementInViewPort) === item.id
              ? "tocLeftLightBorderActiveBall"
              : "tocLeftLightBorderBall",
        }}
        _dark={{
          bg:
            getHeadingId(elementInViewPort) === item.id
              ? "tocLeftDarkBorderActiveBall"
              : "tocLeftDarkBorderBall",
        }}
        size="3"
      />
      <Box pl="7" pr="2.5" w="100%">
        <Link href={"#" + item.id} passHref>
          <Pressable my="1.5">
            {({ isHovered }) => {
              return (
                <Box
                  _text={{
                    textTransform: "uppercase",
                    flex: 1,
                    flexWrap: "wrap",
                    fontWeight: "semibold",
                    fontSize: "13px",
                    _light: {
                      color:
                        getHeadingId(elementInViewPort) === item.id
                          ? "tocActiveTextLightColor"
                          : "tocTextLightColor",
                    },
                    _dark: {
                      color:
                        getHeadingId(elementInViewPort) === item.id
                          ? "tocActiveTextDarkColor"
                          : "tocTextDarkColor",
                    },
                    textDecorationLine: isHovered ? "underline" : "none",
                  }}
                >
                  {item.title}
                </Box>
              );
            }}
          </Pressable>
        </Link>
      </Box>
    </Box>
  ) : (
    <Box mx="2.5" mb={isHeadingID ? "14px" : "0"}>
      <Link href={"#" + item.id} passHref>
        <Pressable my="1.5">
          {({ isHovered }) => {
            return (
              <Box
                _text={{
                  flex: 1,
                  flexWrap: "wrap",
                  fontWeight: "regular",
                  fontSize: "13px",
                  _light: {
                    color:
                      elementInViewPort === item.id
                        ? "tocActiveTextLightColor"
                        : "tocTextLightColor",
                  },
                  _dark: {
                    color:
                      elementInViewPort === item.id
                        ? "tocActiveTextDarkColor"
                        : "tocTextDarkColor",
                  },
                  textDecorationLine: isHovered ? "underline" : "none",
                }}
              >
                {item.title}
              </Box>
            );
          }}
        </Pressable>
      </Link>
    </Box>
  );
};
