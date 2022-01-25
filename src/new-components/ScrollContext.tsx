import { createContext } from "react";
export const ScrollContext = createContext({
  timestamp: "",
  setTimestamp: (timestamp: string) => {},
});
