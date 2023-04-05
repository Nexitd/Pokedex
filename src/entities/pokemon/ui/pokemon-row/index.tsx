import { useEffect, useMemo } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { pokemonModel } from "entities/pokemon";
import { useAppDispatch, useAppSelector } from 'shared/api';
import { Error, Empty, Spin } from 'shared/ui';
import PokemonCard from "../pokemon-card";


const PokemonRow = () => {
    const { offset, limit, results } = useAppSelector((state) => state.pokemons)
    const dispatch = useAppDispatch()


    const { data = { results: [], count: 0 }, isError, isFetching } = pokemonModel.useGetPokemonsQuery({ limit: limit, offset: offset })



    const dataLength = useMemo(() => data.results.length, [data.results.length]);

    const changeTotalCount = () => {
        if (dataLength === 0) {
            dispatch(pokemonModel.changeTotalElementCount(0))

            return;
        }

        dispatch(pokemonModel.changeTotalElementCount(data.count))
    }

    useEffect(() => {
        if (!isFetching) {
            changeTotalCount()
        }
    }, [isFetching, dataLength, data.count])


    return (
        <div className="pokemon">
            <section className="wrapper__container">
                {isFetching && <Spin />}
                {isError && <Error description='Произошла ошибка при загрузке данных' />}
                <ErrorBoundary fallback={<Error description='Произошла непредвиденная ошибка, обратитесть в тех. поддержку' />}>
                    <div className="pokemon__container">
                        {dataLength !== 0 && !isError ? results.map((el, i) => {
                            return <div key={i} className="pokemon__container_item">
                                <PokemonCard name={el.name} />
                            </div>
                        }) : <Empty className='pokemon__container-empty' />}
                    </div>
                </ErrorBoundary>
            </section>
        </div >
    )
}

export default PokemonRow;