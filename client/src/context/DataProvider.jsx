import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children})=>{
    const [account , setAccount] = useState('');
    return(
        <DataContext.Provider value={{account , setAccount}}>
            {children}
        </DataContext.Provider>
    )
}

