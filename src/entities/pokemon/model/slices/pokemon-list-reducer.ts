import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonListResult } from 'shared/api';

type pokemonsStateType = {
    total: number;
    limit: number;
    isError: boolean;
    offset: number;
    results: PokemonListResult[];
};

const PokemonListReducer = createSlice({
    name: 'pokemons',
    initialState: {
        results: [],
        total: 0,
        offset: 1,
        isError: false,
        limit: 10,
    } as pokemonsStateType,
    reducers: {
        onChangeLimit: (state, { payload }: PayloadAction<number>) => {
            state.limit = payload;
        },

        onChangeErrorValue: (state, { payload }: PayloadAction<boolean>) => {
            state.isError = payload;
        },

        onChangeOffsetSize: (state, { payload }: PayloadAction<number>) => {
            state.offset = payload;
        },

        changeTotalElementCount: (state, { payload }: PayloadAction<number>) => {
            state.total = payload;
        },

        changePokemonDataList: (state, { payload }: PayloadAction<PokemonListResult[]>) => {
            state.results = payload;
        },
    },
});

export const {
    onChangeLimit,
    onChangeErrorValue,
    changeTotalElementCount,
    onChangeOffsetSize,
    changePokemonDataList,
} = PokemonListReducer.actions;

export default PokemonListReducer.reducer;
