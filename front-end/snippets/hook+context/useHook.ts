// custom hook to be consumed and used inside components
// provides crud ops for agents to be used to call api

import {useContext} from "react";
import {HookContext} from "./HookContext";

const useHook = () => {
    const context = useContext(HookContext);
    if (!context) {
        throw new Error("useHook must be used inside HookProvider");
    }
    return context;
}

export default useHook;