import {articles} from '../../model'
import {createAction} from '../../utilities'

export const GET_HEADLINE: string = 'HEADLINE.GET_HEADLINE';

export const setHeadline = (headline: articles[]) => {
    return createAction<articles[]>(GET_HEADLINE, headline)
}