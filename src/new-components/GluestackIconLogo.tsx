import Image from "next/image";
import React from "react";
import { useColorMode } from "native-base";

export default function GluestackIconLogo(props: any) {
  const { colorMode } = useColorMode();
  return (
    <Image
      alt="Gluestack logo"
      src={
        colorMode === "dark"
          ? "/img/gluestack-logo-light.png"
          : "/img/gluestack-logo-dark.png"
      }
      layout="fixed"
      width="38"
      height="42"
      quality={100}
      {...props}
    />
  );
}
