import React from "react";
import { getDependencies } from "./expoController";

import { AppContext } from "../../../AppContext";
import { useColorModeValue } from "native-base";

export const SnackPlayer = ({ children, ...props }: any) => {
  const { activeVersion } = React.useContext(AppContext);

  return (
    <div
      data-snack-code={encodeURI(children)}
      data-snack-dependencies={encodeURI(getDependencies(activeVersion))}
      data-snack-name={encodeURI(props?.name)}
      data-snack-theme={useColorModeValue("light", "dark")}
      data-snack-description="Build%20Drawer%20Snack"
      data-snack-preview="true"
      style={{
        overflow: "hidden",
        background: "#fafafa",
        border: "1px solid rgba(0,0,0,.08)",
        borderRadius: "4px",
        height: "505px",
        width: "100%",
      }}
    ></div>
  );
};
