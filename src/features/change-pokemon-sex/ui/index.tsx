import { ManOutlined, WomanOutlined } from "@ant-design/icons";
import { memo } from "react";

type CardActionsType = {
    front_default: string;
    front_female: string;
    onClick: () => void;
    isMale: boolean;

}

const iconStyle = {
    fontSize: 28, color: "#1677ff"
}

const btnStyle = {
    cursor: "pointer",
    border: 'none',
    background: 'transparent'
}

export const ChangePokemonSex = memo(({
    front_default = '',
    front_female = '',
    isMale = false,
    onClick = () => { }
}: CardActionsType) => {
    const icon = isMale ? <ManOutlined style={iconStyle} /> : <WomanOutlined style={iconStyle} />;

    const handleClick = (e: any) => {
        e.stopPropagation();
        onClick()
    }

    return (<>
        {(front_default && front_female) && <button style={btnStyle} onClick={handleClick}>{icon}</button>}
    </>)
})

