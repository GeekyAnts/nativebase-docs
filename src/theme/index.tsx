import { extendTheme } from "native-base";
import colors from "native-base/src/theme/base/colors";
export const theme = extendTheme({
  colors: {
    backgroundLight: colors.coolGray[100],
    backgroundDark: colors.blueGray[900],

    primaryTextDark: colors.cyan[200],
    primaryTextLight: colors.cyan[700],

    borderColorDark: "#313538",
    borderColorLight: "#dfe3e6",

    // -------------------------------------------------- SideBar -------------------------------------------

    sidebarBackgroundLight: "#fff",
    sidebarBackgroundDark: colors.blueGray[900],
    sidebarItemHeadingTextDark: colors.coolGray[50],
    sidebarItemHeadingTextLight: colors.coolGray[800],
    sidebarItemTextDark: colors.coolGray[200],
    sidebarItemTextLight: "#11181c",

    activeSidebarItemBackgroundLight: colors.cyan[100],
    activeSidebarItemBackgroundDark: colors.cyan[700],
    activeSidebarItemHoverBackgroundLight: colors.cyan[100],
    activeSidebarItemHoverBackgroundDark: colors.cyan[600],

    inactiveSidebarItemHoverBackgroundLight: colors.blueGray[100],
    inactiveSidebarItemHoverBackgroundDark: colors.blueGray[800],

    // -------------------------------------------------- Link -------------------------------------------

    inactiveLinkTextColorLight: "#687076",
    inactiveLinkTextColorDark: "#9ba1a6",
    inactiveHoverBorderBottomLinkColorDark: "#26292b",
    inactiveHoverBorderBottomLinkColorLight: "#eceef0",

    activeLinkTextColorLight: "#11181c",
    activeLinkTextColorDark: "#ecedee",
    activeBorderBottomLinkColorLight: "#eceef0",
    activeBorderBottomLinkColorDark: "#eceef0",
    activeHoverBorderBottomLinkColorDark: "#26292b",
    activeHoverBorderBottomLinkColorLight: "#eceef0",

    // -------------------------------------------------- Page Navs -------------------------------------------

    pageNavigationHeadingLight: "#687076",
    pageNavigationHeadingDark: "#9ba1a6",
    pageNavigationMainTitleLight: "#006adc",
    pageNavigationMainTitleDark: "#52a9ff",

    // -------------------------------------------------- Tabs -------------------------------------------

    SelectedTabTextColor: "#52a9ff",
    SelectedTabBorderColor: "#52a9ff",

    // -------------------------------------------------- CodeBlock -------------------------------------------

    codeBlockBackgroundColor: "#171E2E",

    // -------------------------------------------------- Admonitions -------------------------------------------
    tipBackgroundColorDark: colors.coolGray[300],
    tipBackgroundColorLight: colors.coolGray[900],
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});
