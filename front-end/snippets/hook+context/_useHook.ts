// private custom hook meant to be used by the context provider only

import {useState, useCallback} from "react";

const _useHook = () => {
    const [value, setValue] = useState<string>('');
    
    const stackValue = useCallback((char: string) => {
        setValue((prev: string) => {
            prev += char;
            return prev;
        })
    }, []);
    
    return {
        value,
        stackValue,
    }
};

export default _useHook;