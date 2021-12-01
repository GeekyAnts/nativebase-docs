import { extendTheme } from "native-base";
import colors from "native-base/src/theme/base/colors";
export const theme = extendTheme({
  colors: {
    backgroundLight: "#fff",
    backgroundDark: "#151719",

    borderColorDark: "#313538",
    borderColorLight: "#dfe3e6",

    sidebarBackgroundLight: "#fff",
    sidebarBackgroundDark: "#151718",
    sidebarItemDark: "#ecedee",
    sidebarItemLight: "#11181c",

    activeSidebarItemBackgroundLight: colors.cyan[100],
    activeSidebarItemBackgroundDark: colors.cyan[700],
    activeSidebarItemHoverBackgroundLight: colors.cyan[100],
    activeSidebarItemHoverBackgroundDark: colors.cyan[700],

    inactiveSidebarItemHoverBackgroundLight: colors.cyan[50],
    inactiveSidebarItemHoverBackgroundDark: colors.cyan[800],

    sidebarDeprecatedBadgeBackgroundLight: colors.emerald[100],
    sidebarDeprecatedBadgeBackgroundDark: colors.emerald[900],
    sidebarDeprecatedBadgeColorLight: colors.emerald[900],
    sidebarDeprecatedBadgeColorDark: colors.emerald[100],

    sidebarComingSoonBadgeBackgroundLight: colors.lightBlue[100],
    sidebarComingSoonBadgeBackgroundDark: colors.lightBlue[900],
    sidebarComingSoonBadgeColorLight: colors.lightBlue[900],
    sidebarComingSoonBadgeColorDark: colors.lightBlue[100],

    sidebarUpdatedBadgeBackgroundLight: colors.indigo[100],
    sidebarUpdatedBadgeBackgroundDark: colors.indigo[900],
    sidebarUpdatedBadgeColorLight: colors.indigo[900],
    sidebarUpdatedBadgeColorDark: colors.indigo[100],

    sidebarNewBadgeBackgroundLight: colors.violet[100],
    sidebarNewBadgeBackgroundDark: colors.violet[900],
    sidebarNewBadgeColorLight: colors.violet[900],
    sidebarNewBadgeColorDark: colors.violet[100],

    inactiveLinkTextColorLight: "",
    inactiveLinkTextColorDark: "",
    inactiveHoverBorderBottomLinkColorDark: "#26292b",
    inactiveHoverBorderBottomLinkColorLight: "#eceef0",

    activeLinkTextColorLight: "",
    activeLinkTextColorDark: "",
    activeBorderBottomLinkColorLight: "#eceef0",
    activeBorderBottomLinkColorDark: "#eceef0",
    activeHoverBorderBottomLinkColorDark: "#26292b",
    activeHoverBorderBottomLinkColorLight: "#eceef0",

    activeLinkColorDark: "",
    activeLinkColorLight: "",

    inactiveLinkColorDark: "",
    inactiveLinkColorLight: "",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});
