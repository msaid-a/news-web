import {articles} from '../../model'

export interface headlineReduxState {
    headline : articles[]
}

export const headlineDefaultState: headlineReduxState = {
    headline : []
}