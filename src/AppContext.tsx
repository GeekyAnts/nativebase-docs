import {createContext} from 'react';
export const AppContext = createContext({
    activeVersion:"",
    setActiveVersion:(version:string)=>{},
});