// context to be applied on top of application

import {createContext, ReactNode} from "react";
import _useHook from "./_useHook";


type HookContextType = {
    value: string;
    stackValue: (char: string) => void;
}


export const HookContext = createContext<HookContextType | null>(null);

const HookProvider = ({children}: {children: ReactNode}) => {
    const {value, stackValue} = _useHook();
    
    return (
        <HookContext.Provider value={{value, stackValue}}>
            {children}
        </HookContext.Provider>
    )
}

export default HookProvider;