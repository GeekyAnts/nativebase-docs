import React from "react";
import { Box } from "native-base";

export default function KitchenSinkIframe() {
  return (
    <Box
      w="360px"
      h="680px"
      borderWidth="10px"
      rounded="54px"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <iframe
        loading="lazy"
        // @ts-ignore
        importance="low"
        frameBorder="0"
        style={{ height: "100%", position: "absolute", width: "100%" }}
        // className="kichen-sink-iframe-iframe"
        src="https://kitchensink.nativebase.io/"
      ></iframe>
      <Box w="60%">
        <svg viewBox="0 0 219 31">
          <path
            d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
            fillRule="evenodd"
          ></path>
        </svg>
      </Box>
      {/* <Box className="kichen-sink-iframe-safe-aria"></Box> */}
    </Box>
  );
}
