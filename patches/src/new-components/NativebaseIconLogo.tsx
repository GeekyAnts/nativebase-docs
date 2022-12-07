import Image from "next/image";
import React from "react";

export default function NativebaseIconLogo(props: any) {
  return (
    <Image
      alt="Nativebase logo"
      src="https://docs.nativebase.io/img/nativebaselogo.svg"
      layout="fixed"
      width="38"
      height="42"
      quality={100}
      {...props}
    />
  );
}
