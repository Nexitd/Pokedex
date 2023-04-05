import { Select } from "antd";
import { pokemonModel } from "entities/pokemon";
import { changeTotalElementCount } from "entities/pokemon/model";
import { pokemonsTypeDefenition, useAppDispatch, useAppSelector } from "shared/api";

export const PokemonsFilter = () => {
    const { isError } = useAppSelector(state => state.pokemons)
    const [trigger] = pokemonModel.pokemonApi.endpoints.getPokemonsByType.useLazyQuery()
    const [triggerAll] = pokemonModel.pokemonApi.endpoints.getPokemons.useLazyQuery()
    const dispatch = useAppDispatch()

    const handleChange = (value: string) => {
        if (value) {
            trigger(value)
        } else {
            triggerAll({ limit: 10, offset: 1 })
        }

        dispatch(changeTotalElementCount(0))
    }

    const selectOptions = Object.entries(pokemonsTypeDefenition).map(([key, value]) => {
        return { value: value, label: key }
    })


    return (
        <>
            {!isError &&
                <Select
                    placeholder="Выберите тип покемона"
                    style={{ width: 250 }}
                    onChange={handleChange}
                    allowClear={true}
                    options={selectOptions}
                />
            }
        </>
    )
}

