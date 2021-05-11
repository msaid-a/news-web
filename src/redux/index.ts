import { createStore, combineReducers } from 'redux';
import newsReducer from './reducer/news.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newsReduxState } from './states/news.state';

export interface AppReduxState {
    news: newsReduxState
}

const rootReducer = combineReducers<AppReduxState>({
    news: newsReducer
})

const middleware = composeWithDevTools();

export const store = createStore(rootReducer, middleware);
