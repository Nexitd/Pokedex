import { Select } from "antd";
import { pokemonModel } from "entities/pokemon";
import { changeTotalElementCount } from "entities/pokemon/model";
import { useState } from "react";
import { pokemonsTypeDefenition, useAppDispatch, useAppSelector } from "shared/api";

export const PokemonsFilter = () => {
    const { isError } = useAppSelector(state => state.pokemons)
    const [trigger] = pokemonModel.pokemonApi.endpoints.getPokemonsByType.useLazyQuery()
    const [triggerAll] = pokemonModel.pokemonApi.endpoints.getPokemons.useLazyQuery()
    const dispatch = useAppDispatch()

    const handleChange = (value: string) => {
        if (value) {
            trigger(value)
        }

        dispatch(changeTotalElementCount(0))
    }

    const handleClear = () => {
        triggerAll({ limit: 10, offset: 1 })
    }

    const selectOptions = Object.entries(pokemonsTypeDefenition).map(([key, value]) => {
        return { value: value, label: key }
    })

    return (
        <>
            {!isError &&
                <Select
                    size={window.innerWidth >= 500 ? "middle" : "large"}
                    className="pokemon__select_list"
                    placeholder="Выберите тип покемона"
                    autoFocus={false}
                    style={{ width: 250 }}
                    onChange={handleChange}
                    onClear={handleClear}
                    allowClear={true}
                    options={selectOptions}
                />
            }
        </>
    )
}

