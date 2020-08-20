import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

export default () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route
                    path="/"
                    component={App}
                />
            </Switch>
        </div>
    </BrowserRouter>
);
