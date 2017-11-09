import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default (developmentMode = false) => {
    const enhancer = developmentMode ? composeWithDevTools({}) : compose;
    const store = createStore(
        rootReducer,
        { },
        enhancer(applyMiddleware(
            sagaMiddleware,
            // scheduledActionMiddleware(),
        )),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    sagaMiddleware.run(rootSaga);

    return store;
};
