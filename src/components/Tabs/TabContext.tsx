import { createContext } from "react";
export const DocTabContext = createContext({
  selectedId: "",
  setSelectedId: () => {},
});
