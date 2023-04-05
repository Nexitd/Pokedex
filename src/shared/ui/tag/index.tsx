import { Tag } from "antd";

type CustomTagType = {
    name: string;
    color: string;
}

const CustomTag = ({ name, color }: CustomTagType) => {
    return <Tag color={color}>{name}</Tag>
}

export default CustomTag