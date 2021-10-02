import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home/index.jsx'
import Cart from './pages/Cart/index.jsx';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/cart" exact component={ Cart } />
        </Switch>
    </BRouter>
);

export default Routes; 