import {articles} from '../../model'

export interface newsReduxState {
    news : articles[],
}

export const newsDefaultState: newsReduxState = {
    news : [],
}