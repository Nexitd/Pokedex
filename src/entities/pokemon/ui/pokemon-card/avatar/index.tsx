import { Skeleton } from "antd";
import { memo, useMemo } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import nodata from "assets/nodata.jpeg"

type AvatarType = {
    isMale: boolean;
    front_default: string | undefined;
    front_female: string | undefined;
}

const Avatar = ({ isMale = false, front_default = '', front_female = '' }: AvatarType) => {
    const image = useMemo(() => {
        if (isMale) {
            return front_default;
        }

        if (!front_female) {
            return front_default;
        }

        return front_female;
    }, [isMale, front_default, front_female]);



    return <LazyLoadImage
        placeholder={<Skeleton />}
        style={{ minHeight: 300 }}
        src={image || nodata}
        alt="image"
        width={'100%'}
        effect="blur" />;
}

export default memo(Avatar);