type Fallbacks<T> = {
    success?: (result: T) => void;
    error?: (error: Error) => void;
    start?: () => void;
    end?: () => void;
}

type Options = RequestInit & {
    showErrors?: boolean;
}

const callApi = async<T = unknown> (
    url: string, 
    options?: Options, 
    fallbacks?: Fallbacks<T>
): Promise<any> => {
    try {
        // calls the start fallback when fetch starts
        fallbacks?.start?.();
        
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`${url} not ok with status ${response.status}`);
        }
        
        const result = await response.json();
        
        // calls the success fallback when fetch is successful before exiting the function
        fallbacks?.success?.(result);
        
        return result;
    } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        fallbacks?.error?.(err);
        
        if (options?.showErrors) {
            throw err;
        } 
        else return null;
    }
    finally {
        // calls the end fallback when fetch completes
        fallbacks?.end?.();
    }
}

export default callApi