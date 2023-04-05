import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd"

const Loader = () => <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} />} />

export default Loader;