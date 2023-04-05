import { FC } from "react";
import { Route } from "react-router-dom";

type TPublicRoute = {
    element: React.ComponentType;
};

const PublicRoute: FC<TPublicRoute> = ({
    element: RouteComponent,
}) => {
    return <RouteComponent />
};

export const createRoute = ({ element, path, ...route }: { element: React.ComponentType, path: string }) => {
    return (
        <Route
            path={path}
            key={path}
            element={<PublicRoute element={element} />}
            {...route}
        />
    );
};