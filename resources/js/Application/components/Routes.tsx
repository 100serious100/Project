import React from 'react';
import { Route, Switch } from "react-router-dom";
import ItemsList from "./ItemsList";
import ProductsList from "./ProductsList"

const Routes: React.FC = (props) => {
    return (
        <Switch>
            <Route component={ItemsList} path="/" exact />
            <Route component={ProductsList} path="/products" />
        </Switch>
    )
}

export default Routes;