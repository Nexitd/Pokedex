import { lazy } from "react";

export const routes = [
    {
        id: 1,
        path: "/",
        element: lazy(() => import("pages/pokemons-list"))
    },
    {
        id: 2,
        path: "/:id",
        element: lazy(() => import("pages/pokemon-detail"))
    }
]