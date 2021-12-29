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
      py="6"
      borderWidth="1"
      borderColor="emerald.700:alpha.30"
      borderLeftWidth="12"
      borderLeftColor="emerald.700"
      bg="black:alpha.10"
    >
      <Text fontSize="lg" mb="3" color="coolGray.50" fontWeight="medium">
        Tip: {title}
      </Text>
      <Text fontSize="md">{children}</Text>
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
      borderColor="indigo.700:alpha.30"
      borderLeftWidth="12"
      borderLeftColor="indigo.700"
      bg="black:alpha.10"
    >
      <Text fontSize="lg" mb="3" color="coolGray.50" fontWeight="medium">
        Note: {title}
      </Text>
      <Text fontSize="md">{children}</Text>
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
      borderColor="info.700:alpha.30"
      borderLeftWidth="12"
      borderLeftColor="info.700"
      bg="black:alpha.10"
    >
      <Text fontSize="lg" mb="3" color="coolGray.50" fontWeight="medium">
        Info: {title}
      </Text>
      <Text fontSize="md">{children}</Text>
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
