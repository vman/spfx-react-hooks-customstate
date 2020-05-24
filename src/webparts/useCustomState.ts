import { useCallback, useState, SetStateAction } from 'react';

/*
Function returns 
1) A state object 
2) A function which accepts a partial state to merge
3) A function which accepts a SetStateAction to update the state based on previous state
*/
export const useCustomState = <T extends object>(initialState: T): [T, (newPartialState: Partial<T>) => void, (newStateFunction: SetStateAction<T>) => void] => {

    const [state, setState] = useState<T>(initialState);

    //function which accepts a partial state to merge
    const setCustomState = useCallback((newPartialState: T) => {

        try {
            setState((prevState): T => {
                return { ...prevState, ...newPartialState };
            });
        } catch (error) {
            console.error(error);
        }

    }, []);

    //A function which accepts an action to update the state based on previous state
    const setCustomStateDispatch = useCallback((newStateFunction: SetStateAction<T>) => {

        try {
            setState(newStateFunction);
        } catch (error) {
            console.error(error);
        }
        
    }, []);

    return [state, setCustomState, setCustomStateDispatch];
};
