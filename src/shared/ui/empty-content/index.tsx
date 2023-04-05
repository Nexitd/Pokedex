import { Empty } from "antd"

const EmptyContent = ({ className = '' }: { className: string }) => {
    return <Empty
        className={className}
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        description={
            <span>
                Данные отсутствуют
            </span>
        }
    />
}

export default EmptyContent