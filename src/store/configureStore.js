import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import blogsReducer from '../reducers/blogs';
import filtersReducer from '../reducers/filters';

const composeEnhancer = (typeof window !== undefined &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = () => {
    const store = createStore (
        combineReducers({
            blogs: blogsReducer,
            filters: filtersReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );

    return store;
};

export default configureStore;