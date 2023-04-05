import { pokemonModel } from "entities/pokemon";
import { useEffect, useState } from "react";
import { useAppSelector, useDebounce } from "shared/api";


export const PokemonsSearch = () => {
    const { isError } = useAppSelector(state => state.pokemons)
    const [searchName, setSearchName] = useState("");
    const debauncedSearchName = useDebounce(searchName, 800)
    const [trigger] = pokemonModel.pokemonApi.endpoints.getFilteredPokemonsByName.useLazyQuery();
    const [triggerAll] = pokemonModel.pokemonApi.endpoints.getPokemons.useLazyQuery()

    const onFilter = () => {
        if (debauncedSearchName) {
            trigger(debauncedSearchName.toLowerCase());
        }

        if (!debauncedSearchName && !searchName) {
            triggerAll({ limit: 10, offset: 0 })
        }
    }

    useEffect(() => {
        onFilter();
    }, [searchName, debauncedSearchName])

    return (
        <>
            {!isError &&
                <input
                    className="search-input"
                    type="text"
                    placeholder="Введите имя покемона"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
            }
        </>

    )
}

