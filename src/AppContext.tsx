import { createContext } from "react";
export const AppContext = createContext({
  activeSidebarItem: "getting-started",
  activeVersion: "next",
  setActiveVersion: (version: string) => {},
  setActiveSidebarItem: (sidebarItem: string) => {},
  isNavbarOpen: false,
  setIsNavbarOpen: (isNavbarOpen: boolean) => {},
});
