import { useState } from "react";
import { Pagination } from "antd";
import { pokemonModel } from "entities/pokemon";
import { useAppDispatch, useAppSelector } from "shared/api";
import { limitData } from "shared/constants";


const CustomPagination = () => {
    const [current, setCurrent] = useState(1);

    const { total, limit } = useAppSelector((state) => state.pokemons);
    const dispatch = useAppDispatch();

    const handleChangeLimit = (_: number, pageSize: number) => {
        dispatch(pokemonModel.onChangeLimit(pageSize));
    }

    const handeChangePage = (current: number) => {
        setCurrent(current)

        dispatch(pokemonModel.onChangeOffsetSize(current))
    }

    return <>

        {total !== 0 && <div className="pagination__container">
            <Pagination
                size="default"
                showSizeChanger
                responsive={true}
                current={current}
                total={total}
                defaultPageSize={limit}
                pageSizeOptions={limitData}
                onShowSizeChange={handleChangeLimit}
                onChange={handeChangePage}
            />
        </div>}
    </>
}

export default CustomPagination;