import React from "react";
import { Route, Routes } from "react-router-dom";
import { createRoute } from "./lib/create-router";
import { routes } from "./lib/routes";



export const Routing = () => {
    return (
        <Routes>
            {routes.map(createRoute)}
        </Routes>
    );
};