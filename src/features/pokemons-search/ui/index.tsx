import { pokemonModel } from "entities/pokemon";
import { useEffect, useState } from "react";
import { useDebounce } from "shared/api";


export const PokemonsSearch = () => {
    const [searchName, setSearchName] = useState("");
    const debauncedSearchName = useDebounce(searchName, 800)
    const [trigger] = pokemonModel.pokemonApi.endpoints.getFilteredPokemonsByName.useLazyQuery();
    const [triggerAll] = pokemonModel.pokemonApi.endpoints.getPokemons.useLazyQuery()

    const onFilter = () => {
        if (debauncedSearchName) {
            trigger(debauncedSearchName.toLowerCase());
        }

        if (!debauncedSearchName && !searchName) {
            triggerAll({ limit: 10, offset: 1 })
        }
    }

    useEffect(() => {
        onFilter();
    }, [searchName, debauncedSearchName])

    return (

        <input
            className="search-input"
            type="text"
            placeholder="Введите имя покемона"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
        />

    )
}
