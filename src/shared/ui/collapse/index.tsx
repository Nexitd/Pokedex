import { Collapse } from "antd";
import { PropsWithChildren } from "react";

type CollapseCustomType<T> = {
    header: string;
    children: T;
}

const { Panel } = Collapse

function CollapseCustom<T>({ header, children }: PropsWithChildren<CollapseCustomType<T>>) {
    return (
        <Collapse ghost>
            <Panel header={header} key="1">
                <ul>
                    {children}
                </ul>
            </Panel>
        </Collapse>
    )
}

export default CollapseCustom