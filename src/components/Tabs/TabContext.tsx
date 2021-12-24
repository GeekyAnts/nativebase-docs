import { createContext } from "react";
export const TabContext = createContext({
  selectedId: "",
  setSelectedId: () => {},
});
