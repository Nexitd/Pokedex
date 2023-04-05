import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonList } from 'shared/api';
import { changePokemonDataList } from '../slices/pokemon-list-reducer';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v2/' }),
    tagTypes: ['Pokemons'],
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
            providesTags: (result) => ['Pokemons'],
        }),

        getFilteredPokemonsByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
            providesTags: (result) => ['Pokemons'],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(changePokemonDataList([data]));
                } catch {
                    dispatch(changePokemonDataList([]));
                }
            },
        }),

        getPokemons: builder.query<PokemonList, { limit: number; offset: number }>({
            query: ({ limit = 3, offset = 1 }) => ({
                url: 'pokemon',
                params: {
                    limit: limit,
                    offset: offset,
                },
            }),

            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(changePokemonDataList(data.results));
                } catch {
                    dispatch(changePokemonDataList([]));
                }
            },

            merge: (currentCache, newItems) => {
                currentCache.results.push(...newItems.results);
            },

            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },

            transformResponse: (response: { results: Pokemon[]; count: number }, meta, arg) => {
                return { results: response.results, count: response.count };
            },
            providesTags: (result) => ['Pokemons'],
        }),

        getPokemonsByType: builder.query<PokemonList | any, string>({
            query: (type) => `type/${type}`,
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(changePokemonDataList(data.results));
                } catch {
                    dispatch(changePokemonDataList([]));
                }
            },
            transformResponse: (response: { pokemon: Pokemon[]; count: number }, meta, arg) => {
                return {
                    results: response.pokemon.map((el: any) => ({ name: el.pokemon.name })),
                    count: response.pokemon.length,
                };
            },
        }),
    }),
});

export const {
    useGetPokemonsQuery,
    useGetFilteredPokemonsByNameQuery,
    useGetPokemonByNameQuery,
    useGetPokemonsByTypeQuery,
} = pokemonApi;
