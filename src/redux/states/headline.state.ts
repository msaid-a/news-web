import {articles} from '../../model'

export interface headlineReduxState {
    headline : articles[],
    breakingNews: articles[]
    world: articles[],
    sport: articles[],
    healt: articles[]
}

export const headlineDefaultState: headlineReduxState = {
    headline : [],
    breakingNews: [],
    world: [],
    sport: [],
    healt: []
}