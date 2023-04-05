import { ReactNode } from "react";
import Wrapper from "../layout";

export const withWrapper = (component: () => ReactNode) => () =>
    <Wrapper>
        {component()}
    </Wrapper>


