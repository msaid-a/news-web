import {articles} from '../../model'
import {createAction} from '../../utilities'

export const GET_HEADLINE: string = 'HEADLINE.GET_HEADLINE';
export const GET_HEADLINE_WORD: string = 'HEADLINE.GET_HEADLINE_WORD';
export const GET_HEADLINE_SPORT: string = 'HEADLINE.GET_HEADLINE_SPORT';
export const GET_HEADLINE_HEALTH: string = 'HEADLINE.GET_HEADLINE_HEALTH';



// export const setHeadline = (headline: articles[]) => {
//     return createAction<articles[]>(GET_HEADLINE, headline)
// }
export const setHeadlineWordl = (headline: articles[]) => {
    return createAction<articles[]>(GET_HEADLINE_WORD, headline)
}
export const setHeadlineSport = (headline: articles[]) => {
    return createAction<articles[]>(GET_HEADLINE_SPORT, headline)
}
export const setHeadlineHealth = (headline: articles[]) => {
    return createAction<articles[]>(GET_HEADLINE_HEALTH, headline)
}

