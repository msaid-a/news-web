import { createStore, combineReducers } from 'redux';
import newsReducer from './reducer/news.reducer';
import headlineReducer from './reducer/headline.reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { newsReduxState } from './states/news.state';
import { headlineReduxState } from './states/headline.state'

export interface AppReduxState {
    news: newsReduxState,
    headline: headlineReduxState
}

const rootReducer = combineReducers<AppReduxState>({
    news: newsReducer,
    headline: headlineReducer
})

const middleware = composeWithDevTools();

export const store = createStore(rootReducer, middleware);
