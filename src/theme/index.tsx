import { extendTheme } from "native-base";
export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },

    backgroundLight: "#fff",
    backgroundDark: "#151719",

    borderColorDark: "#313538",
    borderColorLight: "#dfe3e6",

    sidebarBackgroundLight: "#fff",
    sidebarBackgroundDark: "#151718",
    sidebarItemDark: "#ecedee",
    sidebarItemLight: "#11181c",

    activeSidebarItemBackgroundLight: "",
    activeSidebarItemBackgroundDark: "",
    activeSidebarItemHoverBackgroundLight: "",
    activeSidebarItemHoverBackgroundDark: "",

    sidebarDeprecatedBadgeBackgroundLight: "#fffbd1",
    sidebarDeprecatedBadgeBackgroundDark: "#2c2100",
    sidebarDeprecatedBadgeColorLight: "#946800",
    sidebarDeprecatedBadgeColorDark: "#f0c000",

    sidebarComingSoonBadgeBackgroundLight: "#f1f3f5",
    sidebarComingSoonBadgeBackgroundDark: "#202425",
    sidebarComingSoonBadgeColorLight: "#687076",
    sidebarComingSoonBadgeColorDark: "#9ba1a6",

    sidebarUpdatedBadgeBackgroundLight: "",
    sidebarUpdatedBadgeBackgroundDark: "",
    sidebarUpdatedBadgeColorLight: "",
    sidebarUpdatedBadgeColorDark: "",

    sidebarNewBadgeBackgroundLight: "",
    sidebarNewBadgeBackgroundDark: "",
    sidebarNewBadgeColorLight: "",
    sidebarNewBadgeColorDark: "",

    inactiveHoverBorderBottomLinkColorDark: "#26292b",
    inactiveHoverBorderBottomLinkColorLight: "#eceef0",

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
    initialColorMode: "dark",
  },
});
