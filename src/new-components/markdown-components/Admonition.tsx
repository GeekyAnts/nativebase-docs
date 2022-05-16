import React, { createContext } from "react";
import { Box, Heading, Alert, VStack, HStack, Text } from "native-base";
export const AdmonitionContext = createContext({
  admonitionStatus: "",
});
const TipAdmonition = ({ children, title }: any) => {
  return (
    <Box
      mb="8"
      px="8"
      rounded="8"
      py="5"
      borderWidth="1"
      borderLeftWidth="12"
      _light={{
        bg: "emerald.50",
        borderColor: "emerald.300",
        borderLeftColor: "emerald.600",
      }}
      _dark={{
        bg: "black:alpha.10",
        borderColor: "emerald.700:alpha.30",
        borderLeftColor: "emerald.700",
      }}
    >
      <Text
        fontSize="lg"
        mb={title ? "3" : "0"}
        _dark={{ color: "coolGray.50" }}
        _light={{ color: "coolGray.900" }}
        fontWeight="medium"
      >
        Tip:{" "}
        {title ? (
          title
        ) : (
          <Text
            fontSize="md"
            fontWeight="light"
            _light={{ color: "tipBackgroundColorLight" }}
            _dark={{ color: "tipBackgroundColorDark" }}
          >
            {children}
          </Text>
        )}
      </Text>
      {title && <Text fontSize="md">{children}</Text>}
    </Box>
  );
};
const NoteAdmonition = ({ children, title }: any) => {
  return (
    <Box
      mb="8"
      px="8"
      rounded="8"
      py="6"
      borderWidth="1"
      borderLeftWidth="12"
      _light={{
        bg: "indigo.50",
        borderColor: "indigo.600",
        borderLeftColor: "indigo.600",
      }}
      _dark={{
        bg: "black:alpha.10",
        borderColor: "indigo.700:alpha.30",
        borderLeftColor: "indigo.700",
      }}
    >
      <Text
        fontSize="lg"
        mb={title ? "3" : "0"}
        _dark={{ color: "coolGray.50" }}
        _light={{ color: "coolGray.900" }}
        fontWeight="medium"
      >
        Note:{" "}
        {title ? (
          title
        ) : (
          <Text
            fontSize="md"
            fontWeight="light"
            _light={{ color: "tipBackgroundColorLight" }}
            _dark={{ color: "tipBackgroundColorDark" }}
          >
            {children}
          </Text>
        )}
      </Text>
      {title && <Text fontSize="md">{children}</Text>}
    </Box>
  );
};
const InfoAdmonition = ({ children, title }: any) => {
  return (
    <Box
      mb="8"
      px="8"
      rounded="8"
      py="6"
      borderWidth="1"
      borderLeftWidth="12"
      _light={{
        bg: "info.50",
        borderColor: "info.600",
        borderLeftColor: "info.600",
      }}
      _dark={{
        bg: "black:alpha.10",
        borderColor: "info.700:alpha.30",
        borderLeftColor: "info.700",
      }}
    >
      <Text
        fontSize="lg"
        mb={title ? "3" : "0"}
        _light={{ color: "tipBackgroundColorLight" }}
        _dark={{ color: "coolGray.50" }}
        fontWeight="medium"
      >
        Info:{" "}
        {title ? (
          title
        ) : (
          <Text
            fontSize="md"
            fontWeight="light"
            _light={{ color: "tipBackgroundColorLight" }}
            _dark={{ color: "tipBackgroundColorDark" }}
          >
            {children}
          </Text>
        )}
      </Text>
      {title && <Text fontSize="md">{children}</Text>}
    </Box>
  );
};

const AdmonitionStatusHandler = ({ status, ...props }: any) => {
  switch (status) {
    case "info":
      return <InfoAdmonition {...props} />;
    case "note":
      return <NoteAdmonition {...props} />;
    case "tip":
      return <TipAdmonition {...props} />;
    default:
      return <InfoAdmonition {...props} />;
  }
};
export const Admonition = (props: any) => {
  return (
    <AdmonitionContext.Provider value={{ admonitionStatus: props.status }}>
      <AdmonitionStatusHandler {...props} />
    </AdmonitionContext.Provider>
  );
};
