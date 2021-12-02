import React from "react";
import { Link } from "native-base";
export const Anchor = (props: any) => {
  return (
    <Link _text={{ color: "cyan.400" }} href={props.href}>
      {props.children}
    </Link>
  );
};
