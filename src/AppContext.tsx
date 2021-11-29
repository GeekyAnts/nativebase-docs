import {createContext} from 'react';
export const AppContext = createContext({
    activeVersion:"next",
    setActiveVersion:(version:string)=>{},
});