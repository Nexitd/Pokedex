import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { pokemonApi } from 'entities/pokemon/model';
import pokemonListReducer from 'entities/pokemon/model/slices/pokemon-list-reducer';

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemons: pokemonListReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

setupListeners(store.dispatch);
