import PokemonRow from "entities/pokemon/ui/pokemon-row";
import { Pagination } from "features/pagination-select";
import { PokemonsFilter } from "features/pokemons-filter";
import { PokemonsSearch } from "features/pokemons-search";
import { BackTop } from "shared/ui";

const PokemonsList = () => {
    return (
        <>
            <div className="pokemon__list_filters">
                <PokemonsSearch />
                <PokemonsFilter />
            </div>
            <PokemonRow />
            <Pagination />
            <BackTop />
        </>
    )
}

export default PokemonsList;