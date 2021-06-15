import {articles} from '../../model'

export interface headlineReduxState {
    headline : articles[],
    breakingNews: articles[]
}

export const headlineDefaultState: headlineReduxState = {
    headline : [],
    breakingNews: []
}