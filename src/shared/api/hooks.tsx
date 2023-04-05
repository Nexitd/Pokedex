import { useEffect, useState } from 'react';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'app/store';


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = (value: string, delay: number): string => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };

    }, [value, delay]);

    return debouncedValue;
}