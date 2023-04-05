import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import { Divider } from "antd";
import { pokemonModel } from "entities/pokemon"
import { ChangePokemonSex } from "features/change-pokemon-sex";
import { Collapse, Error, Spin, Tag } from "shared/ui";
import Avatar from "../pokemon-card/avatar";
import { pokemonTypeColor } from "shared/constants";



const PokemonDetail = () => {
    const { id } = useParams();

    const [isMale, setIsMalse] = useState<boolean>(false)

    const { data, front_default = '', stats = [], height, weight, base_experience, front_female = '', types = [], name = '', isLoading, isError } = pokemonModel.useGetPokemonByNameQuery(`${id}`, {
        selectFromResult: ({ data, isLoading, isError }) => ({
            front_default: data?.sprites.front_default,
            front_female: data?.sprites.front_female,
            types: data?.types,
            isLoading: isLoading,
            name: data?.name,
            stats: data?.stats,
            weight: data?.weight,
            height: data?.height,
            base_experience: data?.base_experience,
            data: data,
            isError: isError,
        })
    });

    const handleClick = () => {
        setIsMalse(prev => !prev)
    }


    return (
        <div className="detail">
            <section className="wrapper__container detail__container">
                {isError && <Error description='Произошла ошибка при загрузке данных' />}
                {isLoading && <Spin />}
                <ErrorBoundary fallback={<Error description='Произошла непредвиденная ошибка, обратитесть в тех. поддержку' />}>
                    <div className="detail__container_item">
                        <Avatar front_default={front_default} front_female={front_female} isMale={isMale} />
                        <ChangePokemonSex front_default={front_default} front_female={front_female} isMale={isMale} onClick={handleClick} />
                    </div>
                    <div className="detail__container_item">
                        <h1 className="detail__container_name">{name}</h1>
                        <Divider />
                        <h2 className="detail__container_title">Pokemon Characteristics:</h2>
                        <p className="detail__text"><span>Weight:</span> {weight}</p>
                        <p className="detail__text"><span>Height:</span> {height}</p>
                        <p className="detail__text"><span>Base Experience:</span> {base_experience}</p>


                        <h2 className="detail__container_title">Pokemon Types:</h2>
                        {types.map((el) => {
                            const { name } = el.type;

                            return <Tag color={pokemonTypeColor[name]} key={el.slot} name={name.toUpperCase()} />
                        })}

                        <Divider />
                        <h2 className="detail__container_title">Pokemon Stats:</h2>
                        <Collapse header={"Pokemon Stats"}>
                            {stats.map((el, index) => {
                                return <li key={index} className="detail__list_item"><span>{el.stat.name}</span>: {el.base_stat}</li>
                            })}
                        </Collapse>
                    </div>

                </ErrorBoundary>
            </section>
        </div>
    )
}

export default PokemonDetail