import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import { pokemonModel } from "entities/pokemon";
import { ChangePokemonSex } from "features/change-pokemon-sex";
import { pokemonTypeColor } from "shared/constants";
import { Tag } from "shared/ui"
import Avatar from "./avatar";


const { Meta } = Card;


const PokemonCard = ({ name }: { name: string }) => {
    const { data, front_default = '', front_female = '', types = [], isFetching, id } = pokemonModel.useGetPokemonByNameQuery(name, {
        selectFromResult: ({ data, isFetching }) => ({
            front_default: data?.sprites.front_default,
            front_female: data?.sprites.front_female,
            types: data?.types,
            isFetching: isFetching,
            id: data?.id,
            data: data,
        })
    });
    const [isMale, setIsMalse] = useState<boolean>(true);
    const navigate = useNavigate();


    const handleClick = () => {
        setIsMalse(prev => !prev)
    }


    return (
        <>
            {data && <Card
                onClick={() => navigate(`/${id}`)}
                className="card"
                hoverable
                loading={isFetching}
                actions={[
                    <ChangePokemonSex front_default={front_default} front_female={front_female} onClick={handleClick} isMale={isMale} />
                ]}
                title={<h2 className="card__title">{name}</h2>}
                cover={
                    <Avatar isMale={isMale} front_default={front_default} front_female={front_female} />
                }
            >
                <Meta className="card__body"
                    description={
                        <>
                            <span className="card__description">Pokemon Types: </span>
                            {types.map((el, index) => {
                                const { name } = el.type;

                                return <Tag color={pokemonTypeColor[name]} key={index} name={name.toUpperCase()} />
                            })}
                        </>
                    }
                />
            </Card >}
        </>
    )
}

export default PokemonCard;