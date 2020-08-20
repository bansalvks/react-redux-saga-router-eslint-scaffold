import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import configureStore from './store';
import Routes from './routes';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <Routes />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.register();
