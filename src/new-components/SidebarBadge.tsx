import { Badge } from "native-base";
import React from "react";

export const SidebarBadge = (props: any) => {
  const { status } = props;

  let badgeStyle: any = {
    variant: "solid",
    content: "",
    props: {
      _text: { fontSize: "2xs", fontWeight: "medium" },
      py: "0",
      rounded: "4",
    },
  };

  switch (status) {
    case "new":
      badgeStyle.variant = "solid";
      badgeStyle.colorScheme = "cyan";
      badgeStyle.content = "New";
      badgeStyle.props = { ...badgeStyle.props, bg: "cyan.500" };

      break;
    case "coming-soon":
      badgeStyle.variant = "subtle";
      badgeStyle.colorScheme = "dark";
      badgeStyle.content = "Coming Soon";
      break;
    case "update":
      badgeStyle.variant = "outline";
      badgeStyle.colorScheme = "cyan";
      badgeStyle.content = "Update";
      badgeStyle.props = { ...badgeStyle.props, py: "0.5" };
      break;
    case "experimental":
      badgeStyle.variant = "outline";
      badgeStyle.colorScheme = "cyan";
      badgeStyle.content = "experimental";
      badgeStyle.props = { ...badgeStyle.props, py: "0.5" };
      break;
  }

  return (
    <Badge
      variant={badgeStyle.variant}
      colorScheme={badgeStyle.colorScheme}
      {...badgeStyle.props}
    >
      {badgeStyle.content}
    </Badge>
  );
};
