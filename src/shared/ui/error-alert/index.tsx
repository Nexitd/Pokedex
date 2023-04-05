import { Alert } from "antd"

const ErrorAlert = ({ description }: { description: string }) => {
    return <Alert style={{ margin: "2em auto", width: 360 }}
        message="Error "
        showIcon
        description={description}
        type="error" />
}

export default ErrorAlert