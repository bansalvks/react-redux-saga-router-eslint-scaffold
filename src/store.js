import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    let middleware = applyMiddleware(sagaMiddleware);

    if (process.env.NODE_ENV !== 'production') {
        const { devToolsExtension } = window;
        if (typeof devToolsExtension === 'function') {
            middleware = compose(middleware, devToolsExtension());
        }
    }

    const store = createStore(reducers, middleware);
    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers').default);
        });
    }
    store.dispatch({
        type: 'SEND_OTP',
    });
    store.dispatch({
        type: 'SEND_OTP',
    });
    store.dispatch({
        type: 'SEND_OTP',
    });
    store.dispatch({
        type: 'SEND_OTP',
    });
    store.dispatch({
        type: 'SEND_OTP',
    });
    return store;
}
